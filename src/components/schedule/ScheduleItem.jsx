import React, { Component } from 'react'
import { Button, Grid, Image, Card, Icon, GridColumn, Segment, GridRow } from 'semantic-ui-react'
import moment from 'moment'
import trackManager from '../../modules/trackManager'

export default class ScheduleItem extends Component {
    state = {
        track: []
    }

    componentDidMount() {
        trackManager.getOneTrack(this.props.race.trackId)
            .then(track => this.setState({ track: track[0] }))
    }

    render() {
        return (
            <Grid>
                <Segment.Group horizontal raised style={{ padding: 20 }}>
                    <Grid.Column >
                        <Image src={this.state.track.imgUrl} ></Image>
                    </Grid.Column>
                    <Grid.Column style={{ paddingLeft: 20 }}>
                        <Grid.Row style={{ fontSize: 20 }}>
                            <Icon name='calendar alternate outline' />
                            {moment(this.props.race.date).format('MMM-DD')}
                        </Grid.Row>
                        <Grid.Row>
                            <Button as='a' color='orange' style={{ marginTop: 20 }}
                                href={`/tracks/${this.state.track.id}`}
                            >See My Setups</Button>
                        </Grid.Row>
                    </Grid.Column>
                </Segment.Group>
            </Grid>
        )
    }
}
