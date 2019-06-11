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

    render() {
        return (
            <>
                <Container>
                    <Image rounded src={this.props.track.imgUrl} style={{ height: 200 }} centered></Image>
                    <Grid textAlign='center' style={{ marginTop: 50 }}>
                        <Button color='orange' size='huge'>
                            <Link to={`/setups/new/${this.props.track.id}`}>Add New Setup</Link>
                        </Button>
                    </Grid>
                </Container>
                <Container>
                    <Card.Group centered style={{ marginTop: 40 }}>
                        {
                            this.state.mySetups.filter(setup => setup.trackId === this.props.track.id).map(setup => {
                                return <SetupItem key={setup.id} setup={setup}></SetupItem>
                            })
                        }
                    </Card.Group>
                </Container>
            </>
        )
    }
}
