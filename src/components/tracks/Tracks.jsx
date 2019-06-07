import React, { Component } from 'react'
import trackManager from '../../modules/trackManager'
import { Header, Container, Card } from 'semantic-ui-react'
import track from './track.jpg'
import TrackItem from './TackItem'


export default class Tracks extends Component {
    state = {
        tracks: []
    }

    componentDidMount() {
        trackManager.getTracks()
            .then(tracks => this.setState({ tracks: tracks }))
    }


    render() {
        return (
            <Container>
                <Header as='h1' textAlign='center' size='huge'>Tracks</Header>
                <Card.Group>
                    {
                        this.state.tracks.map(track => {
                            return <TrackItem key={track.id} track={track}></TrackItem>
                        })
                    }
                </Card.Group>
            </Container>
        )
    }
}
