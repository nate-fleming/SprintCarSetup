import React, { Component } from 'react'
import { Container, Table, Header } from 'semantic-ui-react'
import ResultItem from './ResultItem'
import ResultsChart from './ResultsChart'

export default class Results extends Component {
    render() {
        const sortedRaces = this.props.races.sort((a, b) => {
            a = new Date(a.date)
            b = new Date(b.date)
            return (a < b) ? -1 : (a > b) ? 1 : 0
        })

        // const graphRaces = this.props.races.sort((a, b) => {
        //     a = new Date(a.date)
        //     b = new Date(b.date)
        //     return (a < b) ? -1 : (a > b) ? 1 : 0
        // })

        return (
            <>
                <Container>
                    <Header textAlign='center' style={{ fontSize: 40 }}>
                        Results </Header>
                </Container>
                <Container >
                    <ResultsChart races={sortedRaces}></ResultsChart>
                </Container>
                <Container>
                    <Table striped style={{ marginTop: 100, marginBottom: 100 }}>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell width={2} textAlign='center'
                                    style={{ fontSize: 20 }}>Date</Table.HeaderCell>
                                <Table.HeaderCell width={3} textAlign='center'
                                    style={{ fontSize: 20 }}>Track</Table.HeaderCell>
                                <Table.HeaderCell width={2} textAlign='center'
                                    style={{ fontSize: 20 }}>Feature Result</Table.HeaderCell>
                                <Table.HeaderCell width={2} textAlign='center'
                                    style={{ fontSize: 20 }}>Heat Race Result</Table.HeaderCell>
                                <Table.HeaderCell width={2} textAlign='center'
                                    style={{ fontSize: 20 }}></Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {
                                sortedRaces.map(race => {
                                    return (
                                        <Table.Row>
                                            <ResultItem key={race.id} race={race} tracks={this.props.tracks} deleteResult={this.props.deleteResult}
                                                user={this.props.user} {...this.props}></ResultItem>
                                        </Table.Row>
                                    )
                                })
                            }
                        </Table.Body>
                    </Table>
                </Container>
            </>
        )
    }
}
