import React, { Component } from 'react'
import { Button, Grid, Image, Card, Icon } from 'semantic-ui-react'
import './tracks.css'


export default class TackItem extends Component {
    render() {
        return (
            <Card className='card'>
                <Image src={this.props.track.imgUrl} style={{ height: 200 }} centered />
                <Card.Content style={{ backgroundColor: '#4D4F52', boder: 'none' }}>
                    <Card.Header style={{ color: '#F1A63B' }}>{this.props.track.name}</Card.Header>
                    <Card.Description>
                        <p style={{ color: '#CFC7B2' }}><Icon name='map marker alternate' />{this.props.track.address}</p>
                    </Card.Description>
                    <Grid>
                        <Grid.Column textAlign="center">
                            <Button className='track-button' as='a' color='orange'
                                href={`/tracks/${this.props.track.id}`}
                            >See Setups</Button>
                        </Grid.Column>
                    </Grid>
                </Card.Content>
            </Card >
        )
    }
}
