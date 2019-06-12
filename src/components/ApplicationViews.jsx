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
import SetupManager from '../modules/setupManager'
import setupForm from './setups/SetupForm';
import setupManager from '../modules/setupManager';
import ScheduleForm from './schedule/ScheduleForm'
import scheduleManager from '../modules/scheduleManager'



class ApplicationViews extends Component {
    state = {
        user: loginManager.getUserFromLocalStorage(),
        tracks: [],
        schedule: []
    }

    componentDidMount() {
        trackManager.getTracks()
            .then(tracks => this.setState({ tracks: tracks }))
            .then(() => scheduleManager.getSchedule())
            .then(schedule => this.setState({ schedule: schedule }))
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
                    return this.state.user ? (
                        <Schedule {...props} tracks={this.state.tracks} schedule={this.state.schedule}></Schedule>
                    ) : (
                            <Redirect to="/sign-in" />
                        )
                }} />

                <Route path="/schedule/new" render={(props) => {
                    return (
                        <ScheduleForm user={this.state.user} {...props} tracks={this.state.tracks}></ScheduleForm>
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
