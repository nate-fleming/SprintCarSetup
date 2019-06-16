import React, { Component } from 'react'
import { Header, Container, Card, Image } from 'semantic-ui-react'
import track from './track.jpg'
import TrackItem from './TackItem'


export default class Tracks extends Component {

    render() {
        return (
            <Container>
                <Header as='h1' textAlign='center' style={{ fontSize: 100 }}>Tracks</Header>
                <Card.Group centered>
                    {
                        this.props.tracks.map(track => {
                            return <TrackItem key={track.id} track={track}></TrackItem>
                        })
                    }
                </Card.Group>
            </Container>
        )
    }
}
