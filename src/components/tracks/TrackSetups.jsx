import React, { Component } from 'react'
import { Header, Container, Image } from 'semantic-ui-react'

export default class TrackSetups extends Component {
    render() {
        console.log(this.props)
        return (
            <Container>
                <Header as='h1' textAlign='center' size='huge'>
                    {this.props.track.name}
                </Header>
                <Image src={this.props.track.imgUrl} style={{ height: 200 }} centered></Image>
            </Container>
        )
    }
}
