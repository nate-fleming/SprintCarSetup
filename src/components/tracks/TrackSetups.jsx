import React, { Component } from 'react'
import { Container, Image, Button, Grid, Card } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import setupManager from '../../modules/setupManager'
import SetupItem from '../setups/SetupItem'


export default class TrackSetups extends Component {
    state = {
        mySetups: []
    }

    componentDidMount() {
        setupManager.myTracks(this.props.user)
            .then(setups => this.setState({ mySetups: setups }))
    }

    deleteSetup = (setupId, trackId) => {
        setupManager.deleteSetup(setupId)
            .then(() => setupManager.myTracks(this.props.user)
                .then(setups => this.setState({ mySetups: setups })))
            .then(() => this.props.history.push(`/tracks/${trackId}`))
    }

    render() {
        return (
            <>
                <Container>
                    <Image rounded src={this.props.track.imgUrl} style={{ height: 200 }} centered></Image>
                    <Grid textAlign='center' style={{ marginTop: 50 }}>
                        <Button as='a' color='orange' size='huge'
                            href={`/setups/new/${this.props.track.id}`}>
                            Add New Setup
                        </Button>
                    </Grid>
                </Container>
                <Container>
                    <Card.Group centered style={{ marginTop: 40 }}>
                        {
                            this.state.mySetups.filter(setup => setup.trackId === this.props.track.id).map(setup => {
                                return <SetupItem key={setup.id} setup={setup}
                                    deleteSetup={this.deleteSetup}
                                    trackId={this.props.track.id}></SetupItem>
                            })
                        }
                    </Card.Group>
                </Container>
            </>
        )
    }
}
