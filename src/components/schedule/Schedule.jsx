import React, { Component } from 'react'
import moment from 'moment'
import { Container, Button, Grid, Header, Card } from 'semantic-ui-react'
import ScheduleItem from './ScheduleItem'


export default class Schedule extends Component {
    year = moment(new Date()).format('YYYY')
    today = new Date()
    render() {
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
                            this.props.schedule.map(race => {
                                return (
                                    <ScheduleItem key={race.id} race={race} tracks={this.props.tracks}></ScheduleItem>
                                )
                            })
                        }
                    </Card.Group>
                </Container>
            </>
        )
    }
}
