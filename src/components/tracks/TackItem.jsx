import React, { Component } from 'react'
import { Button, Grid, Image, Card, Icon } from 'semantic-ui-react'


export default class TackItem extends Component {
    render() {
        return (
            <Card style={{ boxShadow: 'none' }}>
                <Image src={this.props.track.imgUrl} style={{ height: 200 }} centered />
                <Card.Content style={{ backgroundColor: '#4D4F52', boder: 'none' }}>
                    <Card.Header style={{ color: '#F1A63B' }}>{this.props.track.name}</Card.Header>
                    <Card.Description>
                        <p style={{ color: '#CFC7B2' }}><Icon color='black' name='map marker alternate' />{this.props.track.address}</p>
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
