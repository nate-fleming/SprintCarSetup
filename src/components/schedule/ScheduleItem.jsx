import React, { Component } from 'react'
import { Button, Grid, Image, Card, Icon, Segment } from 'semantic-ui-react'
import moment from 'moment'

export default class ScheduleItem extends Component {

    track = this.props.tracks.find(track => track.id === this.props.race.trackId)


    render() {
        console.log("track", this.track)
        return (
            <Grid>
                <Segment.Group horizontal raised style={{ padding: 20 }}>
                    <Grid.Column >
                        <Image src={this.track.imgUrl} style={{ maxHeight: 200 }}></Image>
                    </Grid.Column>
                    <Grid.Column style={{ paddingLeft: 40 }}>
                        <Grid.Row style={{ fontSize: 20 }}>
                            <Icon name='calendar alternate outline' />
                            {moment(this.props.race.date).format('MMM-DD')}
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column>
                        <Grid.Row>
                            <Button as='a' color='orange' style={{ marginTop: 20, marginLeft: 40 }}
                                href={`/tracks/${this.props.race.trackId}`}
                            >See My Setups</Button>
                        </Grid.Row>
                    </Grid.Column>
                </Segment.Group>
            </Grid>
        )
    }
}
