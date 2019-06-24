import React, { Component } from 'react'
import { Container, Tab, Header, Grid } from 'semantic-ui-react'
import ResultTab from './ResultTab'
import moment from 'moment'


export default class Results extends Component {

    render() {
        const sortedRaces = this.props.races.sort((a, b) => {
            a = new Date(a.date)
            b = new Date(b.date)
            return (a < b) ? -1 : (a > b) ? 1 : 0
        })

        const twentyNineteenRaces = this.props.races.filter(race => moment(race.date).format('YYYY') === '2019').sort((a, b) => {
            a = new Date(a.date)
            b = new Date(b.date)
            return (a < b) ? -1 : (a > b) ? 1 : 0
        })

        const twentyEighteenRaces = this.props.races.filter(race => moment(race.date).format('YYYY') === '2018').sort((a, b) => {
            a = new Date(a.date)
            b = new Date(b.date)
            return (a < b) ? -1 : (a > b) ? 1 : 0
        })

        const twentySeventeenRaces = this.props.races.filter(race => moment(race.date).format('YYYY') === '2017').sort((a, b) => {
            a = new Date(a.date)
            b = new Date(b.date)
            return (a < b) ? -1 : (a > b) ? 1 : 0
        })



        const panes = [
            {
                menuItem: '2019', render: () => <Tab.Pane attached={false} style={{ backgroundColor: '#D0D6D9' }}><ResultTab
                    filteredRaces={twentyNineteenRaces}
                    tracks={this.props.tracks} deleteResult={this.props.deleteResult}
                    editResult={this.props.editResult}
                    user={this.props.user} {...this.props}></ResultTab></Tab.Pane>
            },
            {
                menuItem: '2018', render: () => <Tab.Pane attached={false} style={{ backgroundColor: '#D0D6D9' }}><ResultTab filteredRaces={twentyEighteenRaces}
                    tracks={this.props.tracks} deleteResult={this.props.deleteResult}
                    editResult={this.props.editResult}
                    user={this.props.user} {...this.props}></ResultTab></Tab.Pane>
            },
            {
                menuItem: '2017', render: () => <Tab.Pane attached={false} style={{ backgroundColor: '#D0D6D9' }}><ResultTab filteredRaces={twentySeventeenRaces}
                    tracks={this.props.tracks} deleteResult={this.props.deleteResult}
                    editResult={this.props.editResult}
                    user={this.props.user} {...this.props}></ResultTab></Tab.Pane>
            },
            {
                menuItem: 'All', render: () => <Tab.Pane attached={false} style={{ backgroundColor: '#D0D6D9' }}><ResultTab
                    filteredRaces={sortedRaces}
                    tracks={this.props.tracks} deleteResult={this.props.deleteResult}
                    editResult={this.props.editResult}
                    user={this.props.user} {...this.props}></ResultTab></Tab.Pane>
            },
        ]



        return (
            <>
                <Container>
                    <Header textAlign='center' style={{ fontSize: 80, fontFamily: 'Racing Sans One, cursive' }}>
                        Results </Header>
                    <Grid textAlign='center' style={{ marginTop: 40, marginBottom: 80 }}>
                        <Tab menu={{ secondary: true, pointing: true, size: 'massive' }} panes={panes}
                        />
                    </Grid>
                </Container>

            </>
        )
    }
}
