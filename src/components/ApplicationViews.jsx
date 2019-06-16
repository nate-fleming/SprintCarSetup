import React, { Component } from 'react'
import { withRouter } from "react-router"
import { Route, Redirect } from "react-router-dom"
import './applicationViews.css'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import loginManager from '../modules/loginManager'
import Schedule from './schedule/Schedule'
import Tracks from './tracks/Tracks'
import trackManager from '../modules/trackManager'
import TrackSetups from './tracks/TrackSetups'
import SetupForm from './setups/SetupForm'
import SetupDetail from './setups/SetupDetail'
import ScheduleForm from './schedule/ScheduleForm'
import scheduleManager from '../modules/scheduleManager'
import Results from './results/Results'
import moment from 'moment'




class ApplicationViews extends Component {
    state = {
        user: loginManager.getUserFromLocalStorage(),
        tracks: [],
        schedule: []
    }

    componentDidMount() {
        const newState = {}

        scheduleManager.getSchedule(this.state.user)
            .then(schedule => newState.schedule = schedule)
            .then(() => trackManager.getTracks())
            .then(tracks => newState.tracks = tracks)
            .then(() => this.setState(newState))
    }

    login = (user) => {
        scheduleManager.getSchedule(user)
            .then(schedule =>
                this.setState({
                    schedule: schedule,
                    user: user
                }))
            .then(() => this.props.history.push('/'))
    }


    saveRace = (race) => {
        scheduleManager.post(race)
            .then(() => scheduleManager.getSchedule(this.state.user))
            .then(schedule => this.setState({ schedule: schedule }))
            .then(() => this.props.history.push('/'))
    }

    deleteRace = (id) => {
        scheduleManager.deleteRace(id)
            .then(() => scheduleManager.getSchedule(this.state.user))
            .then(schedule => this.setState({ schedule: schedule }))
            .then(() => this.props.history.push('/'))
    }

    deleteResult = (id) => {
        scheduleManager.deleteRace(id)
            .then(() => scheduleManager.getSchedule(this.state.user))
            .then(schedule => this.setState({ schedule: schedule }))
            .then(() => this.props.history.push('/results'))
    }

    editRace = (editedRace) => {
        scheduleManager.editRace(editedRace)
            .then(() => scheduleManager.getSchedule(this.state.user))
            .then(schedule => this.setState({ schedule: schedule }))
            .then(() => this.props.history.push('/'))
    }


    render() {
        return (
            <div className='applicationViews'>
                <Route
                    exact path="/sign-in"
                    render={props => {
                        return (
                            <SignIn
                                {...props}
                                onLogin={(user) => this.setState({ user: user })}
                                login={this.login}
                            />
                        );
                    }}
                />

                <Route
                    exact path="/sign-up"
                    render={props => {
                        return (
                            <SignUp
                                {...props} onRegister={(user) => this.setState({ user: user })}
                            />
                        );
                    }}
                />

                <Route exact path="/" render={(props) => {
                    console.log(this.state)
                    const today = moment(new Date()).format('YYYY-MM-DD')
                    const futureSchedule = this.state.schedule.filter(schedule =>
                        schedule.date >= today
                    )

                    return this.state.user ? (
                        <Schedule {...props} tracks={this.state.tracks} schedule={futureSchedule} deleteRace={this.deleteRace} editRace={this.editRace} user={this.state.user}></Schedule>
                    ) : (
                            <Redirect to="/sign-in" />
                        )
                }} />

                <Route exact path="/results" render={(props) => {
                    const today = moment(new Date()).format('YYYY-MM-DD')
                    const pastSchedule = this.state.schedule.filter(schedule =>
                        schedule.date < today
                    )

                    return this.state.user ? (
                        <Results {...props} races={pastSchedule} tracks={this.state.tracks}
                            user={this.state.user} deleteResult={this.deleteResult}></Results>
                    ) : (
                            <Redirect to="/sign-in" />
                        )
                }} />

                <Route path="/schedule/new" render={(props) => {
                    return (
                        <ScheduleForm user={this.state.user} {...props} tracks={this.state.tracks} saveRace={this.saveRace} user={this.state.user}></ScheduleForm>
                    )
                }}
                />

                <Route exact path="/tracks"
                    render={props => {
                        return this.state.user ? (
                            <Tracks user={this.state.user} {...props}
                                tracks={this.state.tracks}></Tracks>
                        ) : (
                                <Redirect to="/sign-in" />
                            )
                    }}
                />

                <Route exact path="/tracks/:trackId" render={(props) => {
                    let track = this.state.tracks.find(track =>
                        track.id === parseInt(props.match.params.trackId))

                    if (!track) {
                        track = { id: 404, name: "" }
                    }

                    return (
                        <TrackSetups user={this.state.user} {...props} track={track}></TrackSetups>
                    )
                }}
                />

                <Route path="/setups/new/:trackId" render={(props) => {
                    let track = this.state.tracks.find(track =>
                        track.id === parseInt(props.match.params.trackId))

                    if (!track) {
                        track = { id: 404, name: "" }
                    }
                    return (
                        <SetupForm user={this.state.user} {...props} track={track}></SetupForm>
                    )
                }}
                />

                <Route path="/setups/detail/:setupId" render={(props) => {
                    let setup = props.match.params.setupId


                    if (!setup) {
                        setup = { id: 404, name: "" }
                    }
                    return (
                        <SetupDetail user={this.state.user} {...props} setup={setup}></SetupDetail>
                    )
                }}
                />

            </div>
        )
    }
}

export default withRouter(ApplicationViews)
