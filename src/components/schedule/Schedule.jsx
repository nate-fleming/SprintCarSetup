import React, { Component } from 'react'
import moment from 'moment'
import { Container, Button, Grid, Header, Card, Table, Segment } from 'semantic-ui-react'
import ScheduleItemWW from './ScheduleItemWW'
import ScheduleItem from './ScheduleItem'
import './schedule.css'


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
                    <Header className='main-header' as='h1' textAlign='center'>
                        {this.year} Schedule</Header>
                    <Button className='schedule-button' as='a' color='orange' size='big'
                        href={`/schedule/new`}
                    >
                        Add New Race
                        </Button>
                </Container>
                <Container>
                    <Header className='next-header'>Next Race</Header>
                    <Segment className='next'>
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
                        <Header className='next-header'>Upcoming Races</Header>
                        <Table striped className='schedule-table'>
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

