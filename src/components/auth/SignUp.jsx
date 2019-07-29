import React, { Component } from 'react'
import { Button, Form, Grid, Header, Icon, Message, Segment } from
    'semantic-ui-react'
import { Link } from "react-router-dom";
import loginManager from '../../modules/loginManager'
import Error from '../../Error'
import './auth.css'


export default class SignUp extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        hasError: false
    }


    // Check user login and set user state and catch if there is an error
    signUp = () => {
        loginManager.registerUser(this.state.email, this.state.password)
            .then(newUser => {
                this.props.onRegister(newUser)
                this.props.history.push('/')
            })
            .catch(() => {
                this.setState({ hasError: true })
            })
    }

    render() {
        return (
            // if there is an error with login, display error component
            this.state.hasError ? <Error></Error>
                :
                <Grid textAlign='center' style={{ marginTop: 40 }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header className='auth-header' as='h1' color='black' textAlign='center'>
                            <Icon name='flag checkered' /> Sign Up for a new account
              </Header>
                        <Form size='large'>
                            <Segment className='auth-segment' >
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='Username'
                                    onChange={(e) => this.setState({ username: e.target.value })} />
                                <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address'
                                    onChange={(e) => this.setState({ email: e.target.value })} />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    onChange={(e) => this.setState({ password: e.target.value })}
                                />

                                <Button className='auth-button' color='black' size='large'
                                    onClick={this.signUp}>
                                    Sign Up
                            </Button>
                            </Segment>
                        </Form>
                        <Message className='auth-message' color='black'>
                            Already a User? <Link to='/sign-in'>Sign In</Link>
                        </Message>
                    </Grid.Column>
                </Grid >
        )
    }
}
