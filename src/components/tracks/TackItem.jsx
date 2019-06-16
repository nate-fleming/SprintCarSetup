import React, { Component } from 'react'
import { Button, Grid, Image, Card, Icon } from 'semantic-ui-react'


export default class TackItem extends Component {
    render() {
        return (
            <Card>
                <Image src={this.props.track.imgUrl} style={{ height: 200 }} centered />
                <Card.Content>
                    <Card.Header>{this.props.track.name}</Card.Header>
                    <Card.Description>
                        <Icon name='map marker alternate' />{this.props.track.address}
                    </Card.Description>
                    <Grid>
                        <Grid.Column textAlign="center">
                            <Button as='a' color='orange' style={{ marginTop: 20 }}
                                href={`/tracks/${this.props.track.id}`}
                            >See Setups</Button>
                        </Grid.Column>
                    </Grid>
                </Card.Content>
            </Card >
        )
    }
}
