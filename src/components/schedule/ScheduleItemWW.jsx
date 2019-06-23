import React, { Component } from 'react'
import { Button, Grid, Image, Modal, Icon, Header, Segment, Form, Dropdown, Confirm, GridRow } from 'semantic-ui-react'
import moment from 'moment'
import trackManager from '../../modules/trackManager'
import weatherManager from '../../modules/weatherManager'
import WeatherIcon from 'react-icons-weather'

export default class ScheduleItem extends Component {
    state = {
        currentWeather: {},
        dailyWeather: {},
        modalOpen: false,
        open: false,
        date: '',
        trackId: '',
        id: ''
    }


    componentDidMount() {
        const track = this.props.tracks.find(track => track.id === this.props.race.trackId)
        const newState = {}
        const date = this.props.race.date + "T19:00:00"
        newState.date = this.props.race.date
        newState.trackId = this.props.race.trackId
        newState.id = this.props.race.id
        weatherManager.getWeather(track.latitude, track.longitude, date)
            // .then(weather => console.log(weather))
            .then(weather => {
                newState.currentWeather = weather.currently
                newState.dailyWeather = weather.daily.data[0]
            })
            .catch(error => newState.currentWeather = "")
            .then(() => this.setState(newState))
    }


    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.setState({ modalOpen: false })
    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })

    saveEdits = () => {
        const editedRace = {
            date: this.state.date,
            trackId: this.state.trackId,
            id: this.state.id,
            userId: this.props.user
        }
        this.props.editRace(editedRace)
    }


    render() {
        console.log(this.state.currentWeather)
        const track = this.props.tracks.find(track => track.id === this.props.race.trackId)
        const rain = (this.state.currentWeather === "") ? "no weather data" :
            `${(this.state.currentWeather.precipProbability) * 100}%`
        const temp = (this.state.currentWeather === "") ? "no weather data" :
            parseInt(this.state.currentWeather.temperature)
        const icon = (this.state.currentWeather === "") ? "no weather data" :
            `${this.state.currentWeather.icon}`

        const trackOptions = []

        const getTrackackOptions = () => this.props.tracks.map(track => {
            const options = {
                key: track.id, text: track.name, value: track.id
            }
            trackOptions.push(options)
        })

        getTrackackOptions()


        return (
            <Grid>
                <Segment.Group horizontal raised style={{ padding: 20 }} >
                    <Grid.Column >
                        <Grid.Row >
                            <Icon name='calendar alternate outline' size='huge' style={{ marginTop: 20 }} />
                        </Grid.Row>
                        <Grid.Row>
                            <p style={{ fontSize: 20, marginTop: 20 }}>{moment(this.props.race.date).format('MMM-DD')}</p>
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column style={{ maxWidth: 400, marginLeft: 20 }}>
                        <Image centered src={track.imgUrl} style={{ maxHeight: 200 }} ></Image>
                    </Grid.Column>
                    <Grid.Column style={{ paddingLeft: 20 }}>
                        {/* <Grid.Row>
                            <WeatherIcon name='darksky' iconId='' className='icon' />
                        </Grid.Row> */}
                        <Grid.Row>
                            <p style={{ marginTop: 20, fontSize: 20 }}>Race Day Weather</p>
                        </Grid.Row>
                        <hr />
                        <Grid.Row>
                            <p style={{ marginTop: 10, fontSize: 20 }}>{this.state.currentWeather.summary}</p>
                        </Grid.Row>
                        <Grid.Row style={{ fontSize: 20, marginTop: 10 }}>
                            <Icon name='thermometer half' size='big' />
                            {temp}&deg;
                        </Grid.Row>
                        <Grid.Row style={{ fontSize: 20, marginTop: 10 }}>
                            <Icon name='theme' size='big' />
                            {rain}
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column>
                        <Grid.Row>
                            <Button as='a' color='orange' style={{ marginTop: 20, marginLeft: 40, width: 140 }}
                                href={`/tracks/${this.props.race.trackId}`}
                            >See My Setups</Button>
                        </Grid.Row>
                        <Grid.Row >
                            <Modal trigger={<Button onClick={this.handleOpen} color='black' style={{ marginTop: 20, marginLeft: 40, width: 140 }}>Edit Race</Button>}
                                closeIcon
                                open={this.state.modalOpen}
                                onClose={this.handleClose}>
                                <Header icon='cog' content='Edit Race' style={{ backgroundColor: '#D0D6D9' }} />
                                <Modal.Content>
                                    <Grid textAlign='center' style={{ fontSize: 40 }}  >
                                        <Grid.Column style={{ maxWidth: 450 }}>
                                            <Form size='large' >
                                                <Segment stacked color='orange' inverted>
                                                    <Form.Input type='date' fluid icon='calendar alternate outline' iconPosition='left'
                                                        placeholder='Date'
                                                        label='Date'
                                                        defaultValue={this.props.race.date}
                                                        onChange={(e) => this.setState({ date: e.target.value })} />
                                                    <Dropdown
                                                        fluid
                                                        placeholder='Track'
                                                        selection
                                                        defaultValue={this.props.race.trackId}
                                                        options={trackOptions}
                                                        onChange={(e, { value }) => this.setState(
                                                            { trackId: value })
                                                        }
                                                    >
                                                    </Dropdown>
                                                </Segment>
                                            </Form>
                                        </Grid.Column>
                                    </Grid>
                                </Modal.Content>
                                <Modal.Actions style={{ backgroundColor: '#D0D6D9' }}>
                                    <Button color='black' onClick={this.handleClose}>
                                        <Icon name='remove' /> Cancel
                                    </Button>
                                    <Button color='orange'
                                        onClick={() => {
                                            this.handleClose()
                                            this.saveEdits()
                                        }}
                                    >
                                        <Icon name='checkmark' /> Save
                                    </Button>
                                </Modal.Actions>
                            </Modal>
                        </Grid.Row>
                        <Grid.Row >
                            <Button as='a' color='red' style={{ marginTop: 20, marginLeft: 40, width: 140 }}
                                onClick={() => this.props.deleteRace(this.props.race.id)}
                            >Remove Race</Button>
                        </Grid.Row>
                    </Grid.Column>
                </Segment.Group>
            </Grid>
        )
    }
}
