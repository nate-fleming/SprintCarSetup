import React, { Component } from 'react'
import moment from 'moment'
import { Container, Button, Grid, Header, Card } from 'semantic-ui-react'
import ScheduleItemWW from './ScheduleItemWW'
import ScheduleItem from './ScheduleItem'


export default class Schedule extends Component {
    year = moment(new Date()).format('YYYY')
    today = new Date()


    render() {
        const sortedSchedule = this.props.schedule.sort((a, b) => {
            a = new Date(a.date)
            b = new Date(b.date)
            return (a < b) ? -1 : (a > b) ? 1 : 0
        })
        console.log('sorted schedule', sortedSchedule)
        return (
            <>
                <Container>
                    <Header textAlign='center' style={{ fontSize: 40 }}>
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
                    <Card.Group centered style={{ marginTop: 40 }}>
                        {
                            sortedSchedule.map((race, index) => {
                                console.log(index)
                                const raceDate = new Date(race.date)
                                console.log('raceDate', raceDate, this.today)
                                return (
                                    (index === 0) ?
                                        <ScheduleItemWW key={race.id} race={race} tracks={this.props.tracks} ></ScheduleItemWW>
                                        :
                                        <ScheduleItem key={race.id} race={race} tracks={this.props.tracks} ></ScheduleItem>
                                )
                            })
                        }
                    </Card.Group>
                </Container>
            </>
        )
    }
}
