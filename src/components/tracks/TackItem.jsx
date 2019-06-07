import React, { Component } from 'react'
import { Button, Grid, Image, Card } from 'semantic-ui-react'

export default class TackItem extends Component {
    render() {
        return (
            <Card>
                <Image src={this.props.track.imgUrl} style={{ height: 250 }} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{this.props.track.name}</Card.Header>
                    <Card.Description>
                        {this.props.track.address}
                    </Card.Description>
                    <Grid>
                        <Grid.Column textAlign="center">
                            <Button color='orange' >See Setups</Button>
                        </Grid.Column>
                    </Grid>
                </Card.Content>
            </Card >
        )
    }
}
