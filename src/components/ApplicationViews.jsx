import React, { Component } from 'react'
import { withRouter } from "react-router"
import { Route, Redirect } from "react-router-dom"
import './applicationViews.css'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import loginManager from '../modules/loginManager'
import Schedule from './schedule/Schedule'
import Tracks from './tracks/Tracks'



class ApplicationViews extends Component {
    state = {
        user: loginManager.getUserFromLocalStorage()
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
                        <Schedule></Schedule>
                    ) : (
                            <Redirect to="/sign-in" />
                        )
                }} />

                <Route exact path="/tracks"
                    render={props => {
                        return this.state.user ? (
                            <Tracks user={this.state.user} {...props}></Tracks>
                        ) : (
                                <Redirect to="/sign-in" />
                            )
                    }}

                />
            </div>
        )
    }
}

export default withRouter(ApplicationViews)
