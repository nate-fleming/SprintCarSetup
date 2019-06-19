import React, { Component } from 'react'
import moment from 'moment'
import { Container, Button, Grid, Header, Card } from 'semantic-ui-react'
import ScheduleItemWW from './ScheduleItemWW'
import ScheduleItem from './ScheduleItem'


export default class Schedule extends Component {
    year = moment(new Date()).format('YYYY')

    render() {
        const sortedSchedule = this.props.schedule.sort((a, b) => {
            a = new Date(a.date)
            b = new Date(b.date)
            return (a < b) ? -1 : (a > b) ? 1 : 0
        })

        return (
            <>
                <Container>
                    <Header as='h1' textAlign='center' style={{ fontSize: 80, fontFamily: 'Racing Sans One, cursive', textWithShadow: '-12px 10px 5px 0px rgba(0,0,0,0.75)' }}>
                        {this.year} Schedule</Header>
                    <Grid textAlign='center' style={{ marginTop: 50 }}>
                        <Button as='a' color='orange' size='huge'
                            href={`/schedule/new`}
                        >
                            Add New Race
                        </Button>
                    </Grid>
                </Container>
                <Container>
                    <Card.Group centered style={{ marginTop: 40, marginBottom: 80 }}>
                        {
                            sortedSchedule.map((race, index) => {
                                return (
                                    (index === 0) ?
                                        <ScheduleItemWW key={race.id} race={race} tracks={this.props.tracks} deleteRace={this.props.deleteRace}
                                            editRace={this.props.editRace} user={this.props.user}></ScheduleItemWW>
                                        :
                                        <ScheduleItem key={race.id} race={race} tracks={this.props.tracks} deleteRace={this.props.deleteRace}
                                            editRace={this.props.editRace} user={this.props.user}></ScheduleItem>
                                )
                            })
                        }
                    </Card.Group>
                </Container>
            </>
        )
    }
}

