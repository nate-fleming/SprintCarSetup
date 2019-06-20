import React, { Component } from 'react'
import { Container, Table } from 'semantic-ui-react'
import ResultItem from './ResultItem'
import ResultsChart from './ResultsChart'

export default class ResultTab extends Component {
    render() {
        return (
            <>
                <Container >
                    <ResultsChart races={this.props.filteredRaces}></ResultsChart>
                </Container>
                <Container>
                    <Table striped style={{ marginTop: 100, marginBottom: 40 }}>
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
                                this.props.filteredRaces.map(race => {
                                    return (
                                        <Table.Row key={race.id}>
                                            <ResultItem race={race} tracks={this.props.tracks} deleteResult={this.props.deleteResult}
                                                editResult={this.props.editResult}
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
