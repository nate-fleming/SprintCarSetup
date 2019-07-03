import React, { Component } from 'react'
import { Button, Grid, Card, Icon, Modal, Header } from 'semantic-ui-react'
import moment from 'moment'


export default class SetupItem extends Component {
    state = {
        modalOpen: false
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    render() {
        return (
            <Card className='setup-card'>
                <Card.Content >
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
                                className='track-page-button'
                                href={`/setups/detail/${this.props.setup.id}`}
                            >
                                See Setup
                            </Button>
                            <Modal trigger={<Button className='setup-button' color='black' onClick={this.handleOpen}>Delete</Button>} closeIcon open={this.state.modalOpen}
                                onClose={this.handleClose}>
                                <Header className='modal-header' icon='trash alternate' content={`Delete ${this.props.setup.name}?`} />
                                <Modal.Content className='modal-body'>
                                    <p>
                                        Are you sure you want to delete this setup?
                                    </p>
                                </Modal.Content>
                                <Modal.Actions className='modal-header'>
                                    <Button color='orange' onClick={this.handleClose}>
                                        <Icon name='remove' /> No
                                    </Button>
                                    <Button color='black' onClick={() => this.props.deleteSetup(this.props.setup.id, this.props.trackId)}>
                                        <Icon name='checkmark' /> Yes
                                    </Button>
                                </Modal.Actions>
                            </Modal>
                        </Grid.Column>
                    </Grid>
                </Card.Content>
            </Card >
        )
    }
}
