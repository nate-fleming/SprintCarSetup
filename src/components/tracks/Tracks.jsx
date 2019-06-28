import React, { Component } from 'react'
import { Header, Container, Card } from 'semantic-ui-react'
import TrackItem from './TackItem'
import './tracks.css'


export default class Tracks extends Component {

    render() {
        return (
            <Container className='track-container'>
                <Header as='h1' textAlign='center' className='track-header'>Tracks</Header>
                <Card.Group centered className='card-container'>
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
