import React, { Component } from 'react'
import { Image, Segment, Button, Grid } from 'semantic-ui-react'
import error from './error.png'
import { Link } from "react-router-dom"
import './error.css'


export default class Error extends Component {
    render() {
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Segment>
                        <Image src={error} size='medium' centered />
                        <Button color='orange' fluid size='large' as='a' href='/'
                        >
                            Try Again
                        </Button>
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}
