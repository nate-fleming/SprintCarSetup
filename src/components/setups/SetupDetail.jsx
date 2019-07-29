import React, { Component } from 'react'
import setupManager from '../../modules/setupManager'
import { Container, Form, Button, Grid, Header, Tab, Modal, Icon } from 'semantic-ui-react'
import GarageSetup from './GarageSetup'
import HotLapsSetup from './HotLapsSetup'
import HeatRaceSetup from './HeatRaceSetup'
import FeatureSetup from './FeatureSetup'
import './setups.css'

export default class SetupDetail extends Component {
    state = {
        trackSetup: [],
        isHidden: true,
        modalOpen: false
    }

    // Handle Modal
    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.setState({ modalOpen: false })

    componentDidMount() {
        setupManager.getSetups()
            .then(setups => setups.filter(setup => setup.id === this.props.setup))
            .then(mySetup => this.setState({ trackSetup: mySetup[0] }))
        // .then(stuff => console.log(this.state))
    }

    // Handle Edits for setups
    editSetup = () => {
        setupManager.editSetup(this.state.trackSetup)
            .then(setup => this.setState({
                trackSetup: setup,
                isHidden: true
            }))
    }

    // Store changes for edits
    handleFieldChange = (e) => {
        this.setState(
            Object.assign(
                this.state.trackSetup,
                { [e.target.id]: e.target.value })
        )
    }

    // Handle wing dropdown menu
    handleDropdown = (e, { value }) => {
        this.setState(
            Object.assign(
                this.state.trackSetup,
                { gWing: value })
        )
    }

    // Handle Delete setup
    deleteSetup = (setupId) => {
        setupManager.deleteSetup(setupId)
            .then(() => this.props.history.push(`/tracks/${this.state.trackSetup.trackId}`))
    }

    // Create Tab panes
    panes = [
        {
            // Create pane for Garage Setup
            menuItem: 'Garage', render: () => <Tab.Pane className='setup-tab' attached={false}>  <GarageSetup
                trackSetup={this.state.trackSetup} isHidden={this.state.isHidden}
                handleFieldChange={this.handleFieldChange} editSetup={this.editSetup}
                handleDropdown={this.handleDropdown}></GarageSetup></Tab.Pane>
        },
        {
            // Create pane for Hot Lap Setup
            menuItem: 'Hot Laps', render: () => <Tab.Pane className='setup-tab' attached={false}><HotLapsSetup trackSetup={this.state.trackSetup} isHidden={this.state.isHidden}
                handleFieldChange={this.handleFieldChange} editSetup={this.editSetup}
                handleDropdown={this.handleDropdown}></HotLapsSetup></Tab.Pane>
        },
        {
            // Create pane for Heat Race Setup
            menuItem: 'Heat Race', render: () => <Tab.Pane className='setup-tab' attached={false}><HeatRaceSetup trackSetup={this.state.trackSetup} isHidden={this.state.isHidden}
                handleFieldChange={this.handleFieldChange} editSetup={this.editSetup}
                handleDropdown={this.handleDropdown}></HeatRaceSetup></Tab.Pane>
        },
        {
            // Create pane for Feature Race Setup
            menuItem: 'Feature', render: () => <Tab.Pane className='setup-tab' attached={false}><FeatureSetup
                trackSetup={this.state.trackSetup} isHidden={this.state.isHidden}
                handleFieldChange={this.handleFieldChange} editSetup={this.editSetup}
                handleDropdown={this.handleDropdown}></FeatureSetup></Tab.Pane>
        },
    ]


    render() {
        // Setup components that are hidden when the edit button is clicked and reverse
        const hidden = this.state.isHidden ? 'none' : ''
        const reverseHidden = this.state.isHidden ? '' : 'none'
        return (
            <>
                <Container>
                    <Header className='setup-header'>
                        {this.state.trackSetup.name}
                    </Header>
                    <Grid columns={2} >
                        <Form style={{ display: `${hidden}`, fontSize: 20, marginBottom: 20 }}>
                            <Form.Input
                                label='Setup Name'
                                onChange={(e) => this.setState(
                                    Object.assign(
                                        this.state.trackSetup,
                                        { name: e.target.value })
                                )}
                                defaultValue={this.state.trackSetup.name}
                            ></Form.Input>
                        </Form>
                    </Grid>

                    <Button className='setup-button' color='orange' size='huge'
                        onClick={() => this.setState({ isHidden: false })}
                        style={{ display: `${reverseHidden}` }}>
                        Edit
                    </Button>

                </Container>
                <Grid textAlign='center' >
                    <Tab menu={{ secondary: true, pointing: true, size: 'massive', stackable: true }} panes={this.panes}
                    />
                </Grid>
                <Container>
                    <Button className='setup-button' color='orange' size='huge'
                        onClick={() => this.setState({ isHidden: false })}
                        style={{ display: `${reverseHidden}` }}>
                        Edit
                    </Button>
                    <Modal trigger={<Button className='setup-button' color='black' size='huge' style={{ display: `${reverseHidden}` }} onClick={this.handleOpen}>Delete</Button>} closeIcon open={this.state.modalOpen}
                        onClose={this.handleClose}>
                        <Header className='modal-header' icon='trash alternate' content={`Delete ${this.state.trackSetup.name}?`} />
                        <Modal.Content className='modal-body'>
                            <p>
                                Are you sure you want to delete this setup?
                            </p>
                        </Modal.Content>
                        <Modal.Actions className='modal-header'>
                            <Button color='orange' onClick={this.handleClose}>
                                <Icon name='remove' /> No
                            </Button>
                            <Button color='black' onClick={() => this.deleteSetup(this.state.trackSetup.id)}>
                                <Icon name='checkmark' /> Yes
                            </Button>
                        </Modal.Actions>
                    </Modal>
                </Container>
            </>
        )
    }
}
