import React, { Component } from 'react'
import { Container, Button, Grid, Header, Card } from 'semantic-ui-react'
import ResultItem from './ResultItem'

export default class Results extends Component {
    render() {
        const sortedRaces = this.props.races.sort((a, b) => {
            a = new Date(a.date)
            b = new Date(b.date)
            return (a < b) ? -1 : (a > b) ? 1 : 0
        })

        return (
            <>
                <Container>
                    <Header textAlign='center' style={{ fontSize: 40 }}>
                        Results </Header>
                </Container>
                <Container>
                    <Card.Group centered style={{ marginTop: 40 }}>
                        {
                            sortedRaces.map(race => {
                                return (
                                    <ResultItem key={race.id} race={race} tracks={this.props.tracks} editRace={this.props.editRace}
                                        user={this.props.user}></ResultItem>
                                )
                            })
                        }
                    </Card.Group>
                </Container>
            </>
        )
    }
}
