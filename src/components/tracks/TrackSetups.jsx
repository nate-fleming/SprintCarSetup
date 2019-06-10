import React, { Component } from 'react'
import { Container, Image, Button, Grid } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class TrackSetups extends Component {
    render() {
        console.log(this.props)
        return (
            <Container>
                <Image src={this.props.track.imgUrl} style={{ height: 200 }} centered></Image>
                <Grid textAlign='center' style={{ marginTop: 50 }}>
                    <Button color='orange' size='huge'>
                        <Link to={`/setups/new/${this.props.track.id}`}>Add New Setup</Link>
                    </Button>
                </Grid>
            </Container>
        )
    }
}
