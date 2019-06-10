import React, { Component } from 'react'
import { Header, Container, Image, Button, Grid } from 'semantic-ui-react'

export default class TrackSetups extends Component {
    render() {
        console.log(this.props)
        return (
            <Container>
                <Image src={this.props.track.imgUrl} style={{ height: 200 }} centered></Image>
                <Grid textAlign='center' style={{ marginTop: 50 }}>
                    <Button color='orange' centered size='huge'>Add Setup</Button>
                </Grid>
            </Container>
        )
    }
}
