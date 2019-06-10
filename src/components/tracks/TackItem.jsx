import React, { Component } from 'react'
import { Button, Grid, Image, Card } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class TackItem extends Component {
    render() {
        return (
            <Card>
                <Image src={this.props.track.imgUrl} style={{ height: 200 }} centered />
                <Card.Content>
                    <Card.Header>{this.props.track.name}</Card.Header>
                    <Card.Description>
                        {this.props.track.address}
                    </Card.Description>
                    <Grid>
                        <Grid.Column textAlign="center">
                            <Button color='orange' inverted style={{ marginTop: 20 }}><Link to={`tracks/${this.props.track.id}`}>See Setups</Link></Button>
                        </Grid.Column>
                    </Grid>
                </Card.Content>
            </Card >
        )
    }
}
