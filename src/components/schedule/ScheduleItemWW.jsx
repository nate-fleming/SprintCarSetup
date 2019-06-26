import React, { Component } from 'react'
import { Button, Grid, Image, Modal, Icon, Header, Segment, Form, Dropdown, Confirm, GridRow } from 'semantic-ui-react'
import moment from 'moment'
import weatherManager from '../../modules/weatherManager'
import WeatherIcon from 'react-icons-weather'
import './scheduleItemWW.css'

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
            `${parseInt((this.state.currentWeather.precipProbability) * 100)}%`
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
            <Grid centered doubling stackable className='next-race'>
                <Grid.Row >
                    <Grid.Column width={6} verticalAlign='middle'>
                        <Grid.Row className='first-row'>
                            <Icon name='calendar alternate outline' size='big' className='calendar-icon' />
                            {moment(this.props.race.date).format('MMM-DD')}
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column width={10} >
                        <Grid.Row className='img-background'>
                            <Image centered src={track.imgUrl} style={{ maxHeight: 120 }} ></Image>
                        </Grid.Row>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={8} textAlign='center' verticalAlign='middle'>
                        {/* <Grid.Row>
                            <WeatherIcon name='darksky' iconId={`${icon}`} className='icon' />
                        </Grid.Row> */}
                        <Grid.Row className='weather-header'>
                            <p>Race Day Weather</p>
                        </Grid.Row>
                        <hr className='line'></hr>
                        <Grid.Row className='current-weather'>
                            <p>{this.state.currentWeather.summary}</p>
                            <Icon name='thermometer half' size='large' style={{ color: '#ff6f00' }} />
                            {temp}&deg;
                            <Icon name='theme' size='large' style={{ color: '#ff6f00' }} />
                            {rain}
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column width={6} textAlign='center' verticalAlign='middle'>
                        <Grid.Row className='button-row'>
                            <Button className='weather-button' fluid as='a' color='orange'
                                href={`/tracks/${this.props.race.trackId}`}
                            >See My Setups</Button>
                        </Grid.Row>
                        <Grid.Row className='button-row'>
                            <Modal trigger={<Button fluid onClick={this.handleOpen} color='black' className='weather-button'>Edit Race</Button>}
                                closeIcon
                                open={this.state.modalOpen}
                                onClose={this.handleClose}>
                                <Header icon='cog' content='Edit Race' className='modal-header' />
                                <Modal.Content className='modal-body'>
                                    <Grid textAlign='center' style={{ fontSize: 40 }}  >
                                        <Grid.Column style={{ maxWidth: 450 }}>
                                            <Form size='large' >
                                                <Segment color='orange' inverted className='modal-segment'>
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
                                <Modal.Actions className='modal-header'>
                                    <Button className='modal-button' color='black' onClick={this.handleClose}>
                                        <Icon name='remove' /> Cancel
                                    </Button>
                                    <Button className='modal-button' color='orange'
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
                        <Grid.Row className='button-row'>
                            <Button fluid as='a' color='red' className='weather-button'
                                onClick={() => this.props.deleteRace(this.props.race.id)}
                            >Remove Race</Button>
                        </Grid.Row>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
