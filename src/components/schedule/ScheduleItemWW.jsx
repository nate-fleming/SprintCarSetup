import React, { Component } from 'react'
import { Button, Grid, Image, Card, Icon, GridColumn, Segment, GridRow } from 'semantic-ui-react'
import moment from 'moment'
import trackManager from '../../modules/trackManager'
import weatherManager from '../../modules/weatherManager'
import WeatherIcon from 'react-icons-weather'

export default class ScheduleItem extends Component {
    state = {
        track: [],
        currentWeather: {},
        dailyWeather: {}
    }

    track = this.props.tracks.find(track => track.id === this.props.race.trackId)

    componentDidMount() {
        const newState = {}
        const date = this.props.race.date + "T19:00:00"
        weatherManager.getWeather(this.track.latitude, this.track.longitude, date)
            .then(weather => {
                newState.currentWeather = weather.currently
                newState.dailyWeather = weather.daily.data[0]
            })
            .then(() => this.setState(newState))
    }




    render() {
        console.log(this.state.dailyWeather.icon)
        const rain = (this.state.currentWeather.precipProbability) * 100
        const temp = parseInt(this.state.currentWeather.temperature)
        return (
            <Grid>
                <Segment.Group horizontal raised style={{ padding: 20 }}>
                    <Grid.Column >
                        <Image src={this.track.imgUrl} style={{ maxHeight: 200 }} ></Image>
                    </Grid.Column>
                    <Grid.Column style={{ paddingLeft: 40 }}>
                        <Grid.Row style={{ fontSize: 20 }}>
                            <Icon name='calendar alternate outline' />
                            {moment(this.props.race.date).format('MMM-DD')}
                        </Grid.Row>
                        {/* <Grid.Row>
                            <WeatherIcon name='darksky' iconId={this.state.dailyWeather.icon}></WeatherIcon>
                        </Grid.Row> */}
                        <Grid.Row>
                            <p>{this.state.currentWeather.summary}</p>
                        </Grid.Row>
                        <Grid.Row>
                            <p>Temp {temp}&deg;</p>
                        </Grid.Row>
                        <Grid.Row>
                            <p>{rain}% chaince of rain</p>
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column>
                        <Grid.Row>
                            <Button as='a' color='orange' style={{ marginTop: 20, marginLeft: 40 }}
                                href={`/tracks/${this.state.track.id}`}
                            >See My Setups</Button>
                        </Grid.Row>
                    </Grid.Column>
                </Segment.Group>
            </Grid>
        )
    }
}
