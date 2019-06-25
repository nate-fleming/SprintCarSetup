import React, { Component } from 'react'
import moment from 'moment'
import { Container, Button, Grid, Header, Card, Table, Segment } from 'semantic-ui-react'
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
                <Container style={{ marginTop: 40 }}>
                    <Header as='h1' textAlign='center' style={{
                        fontSize: 80, fontFamily: 'Racing Sans One, cursive'
                    }}>
                        <p style={{
                            textShadowColor: 'rgba(0, 0, 0, 0.75)',
                            textShadowOffset: { width: -1, height: 1 },
                            textShadowRadius: 10
                        }} > {this.year} Schedule</p></Header>
                    <Grid textAlign='center' style={{ marginTop: 50 }}>
                        <Button as='a' color='orange' size='huge'
                            href={`/schedule/new`}
                        >
                            Add New Race
                        </Button>
                    </Grid>
                </Container>
                <Container>
                    <Segment style={{ marginTop: 40, marginBottom: 40, backgroundColor: '#4D4F52' }}>
                        {
                            sortedSchedule.map((race, index) => {
                                return (
                                    (index === 0) ?
                                        <ScheduleItemWW key={race.id} race={race} tracks={this.props.tracks} deleteRace={this.props.deleteRace}
                                            editRace={this.props.editRace} user={this.props.user}></ScheduleItemWW>
                                        : null
                                )
                            })
                        }
                    </Segment>
                    <Container style={{ marginBottom: 80 }}>
                        <Table striped style={{ marginTop: 100, marginBottom: 40 }}>
                            {/* <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell width={2} textAlign='center'
                                        style={{ fontSize: 20 }}>Date</Table.HeaderCell>
                                    <Table.HeaderCell width={2} textAlign='center'
                                        style={{ fontSize: 20 }}>Track</Table.HeaderCell>
                                    <Table.HeaderCell width={1} textAlign='center'
                                        style={{ fontSize: 20 }}>See Setup</Table.HeaderCell>
                                    <Table.HeaderCell width={1} textAlign='center'
                                        style={{ fontSize: 20 }}>Edit</Table.HeaderCell>
                                    <Table.HeaderCell width={1} textAlign='center'
                                        style={{ fontSize: 20 }}>Remove</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header> */}
                            <Table.Body>
                                {
                                    sortedSchedule.map((race, index) => {
                                        return (
                                            (index !== 0) ?
                                                <Table.Row key={race.id}>
                                                    <ScheduleItem key={race.id} race={race} tracks={this.props.tracks} deleteRace={this.props.deleteRace}
                                                        editRace={this.props.editRace} user={this.props.user}></ScheduleItem>
                                                </Table.Row>
                                                : null
                                        )
                                    })
                                }
                            </Table.Body>
                        </Table>
                    </Container>
                </Container>
            </>
        )
    }
}

