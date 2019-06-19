import React, { Component } from 'react'
import { Container, Button, Grid, Header, Card } from 'semantic-ui-react'
import ResultItem from './ResultItem'
import ResultsChart from './ResultsChart'

export default class Results extends Component {
    render() {
        const sortedRaces = this.props.races.sort((a, b) => {
            a = new Date(a.date)
            b = new Date(b.date)
            return (a < b) ? 1 : (a > b) ? -1 : 0
        })

        return (
            <>
                <Container>
                    <Header textAlign='center' style={{ fontSize: 40 }}>
                        Results </Header>
                </Container>
                <Container>
                    <ResultsChart races={sortedRaces}></ResultsChart>
                </Container>
                <Container>
                    <Card.Group centered style={{ marginTop: 40 }}>
                        {
                            sortedRaces.map(race => {
                                return (
                                    <ResultItem key={race.id} race={race} tracks={this.props.tracks} deleteResult={this.props.deleteResult}
                                        user={this.props.user} {...this.props}></ResultItem>
                                )
                            })
                        }
                    </Card.Group>
                </Container>
            </>
        )
    }
}