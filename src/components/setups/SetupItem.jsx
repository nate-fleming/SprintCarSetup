import React, { Component } from 'react'
import { Button, Grid, Image, Card, Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import moment from 'moment'


export default class SetupItem extends Component {


    render() {
        return (
            <Card>
                <Card.Content>
                    <Card.Header>{this.props.setup.name}</Card.Header>
                    <Card.Description>
                        <Icon name='calendar alternate outline' /> {moment(this.props.setup.date).format('MMM-DD-YYYY')}

                    </Card.Description>
                    <Card.Content extra>
                        <Icon name='wrench' />
                        {this.props.setup.gWing}
                    </Card.Content>
                    <Grid>
                        <Grid.Column textAlign="center">
                            <Button as='a' color='orange'
                                style={{ marginTop: 20 }}
                                href={`/setups/detail/${this.props.setup.id}`}
                            >
                                See Setup
                            </Button>
                            <Button color='black'
                                onClick={() => this.props.deleteSetup(this.props.setup.id, this.props.trackId)}
                            >
                                Delete
                            </Button>
                        </Grid.Column>
                    </Grid>
                </Card.Content>
            </Card >
        )
    }
}
