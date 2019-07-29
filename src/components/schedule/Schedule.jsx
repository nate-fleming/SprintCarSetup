import React, { Component } from 'react'
import moment from 'moment'
import { Container, Button, Header, Table, Segment } from 'semantic-ui-react'
import ScheduleItemWW from './ScheduleItemWW'
import ScheduleItem from './ScheduleItem'
import './schedule.css'


export default class Schedule extends Component {
    year = moment(new Date()).format('YYYY')


    render() {
        // Sort upcoming races
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
                <Container style={{ marginBottom: 40 }}>
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
                    <Container className='upcoming-table'>
                        <Header className='next-header'>Upcoming Races</Header>
                        <Table unstackable className='schedule-table'>
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

