import React, { Component } from 'react'
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import './auth.css'
import loginManager from '../../modules/loginManager'
import Error from '../../Error'

export default class SignIn extends Component {
    state = {
        email: '',
        password: '',
        hasError: false
    }

    signIn = () => {
        loginManager.login(this.state.email, this.state.password)
            .then(user => {
                // this.props.onLogin(user.user.uid)
                this.props.login(user.user.uid)
            })
            .catch(() => {
                this.setState({ hasError: true })
            })
    }

    render() {
        return (
            this.state.hasError ? <Error></Error>
                :
                <Grid textAlign='center' style={{ height: '' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h1' color='black' textAlign='center'>
                            <Icon name='flag checkered' /> Sign-in to your account
              </Header>
                        <Form size='large' >
                            <Segment stacked>
                                <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address'
                                    onChange={(e) => this.setState({ email: e.target.value })} />
                                <Form.Input
                                    // className='hidden'
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    onChange={(e) => this.setState({ password: e.target.value })}
                                />
                                <Button color='orange' fluid size='large'
                                    onClick={this.signIn}>
                                    Login
                  </Button>
                            </Segment>
                        </Form>
                        <Message color='black'>
                            New User? <Link className='link' to='/sign-up'>Sign Up</Link>
                        </Message>
                    </Grid.Column>
                </Grid>
        )
    }
}
