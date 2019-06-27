import React, { Component } from 'react'
import setupManager from '../../modules/setupManager'
import { Container, Form, Button, Grid, Header, Tab } from 'semantic-ui-react'
import GarageSetup from './GarageSetup'
import HotLapsSetup from './HotLapsSetup'
import HeatRaceSetup from './HeatRaceSetup'
import FeatureSetup from './FeatureSetup'
import './setups.css'

export default class SetupDetail extends Component {
    state = {
        trackSetup: [],
        isHidden: true,
    }

    componentDidMount() {
        setupManager.getSetups()
            .then(setups => setups.filter(setup => setup.id === this.props.setup))
            .then(mySetup => this.setState({ trackSetup: mySetup[0] }))
        // .then(stuff => console.log(this.state))
    }

    editSetup = () => {
        setupManager.editSetup(this.state.trackSetup)
            .then(setup => this.setState({
                trackSetup: setup,
                isHidden: true
            }))
    }

    handleFieldChange = (e) => {
        this.setState(
            Object.assign(
                this.state.trackSetup,
                { [e.target.id]: e.target.value })
        )
    }

    handleDropdown = (e, { value }) => {
        this.setState(
            Object.assign(
                this.state.trackSetup,
                { gWing: value })
        )
    }


    deleteSetup = (setupId) => {
        setupManager.deleteSetup(setupId)
            .then(() => this.props.history.push(`/tracks/${this.state.trackSetup.trackId}`))
    }


    panes = [
        {
            menuItem: 'Garage', render: () => <Tab.Pane className='setup-tab' attached={false}>  <GarageSetup
                trackSetup={this.state.trackSetup} isHidden={this.state.isHidden}
                handleFieldChange={this.handleFieldChange} editSetup={this.editSetup}
                handleDropdown={this.handleDropdown}></GarageSetup></Tab.Pane>
        },
        {
            menuItem: 'Hot Laps', render: () => <Tab.Pane className='setup-tab' attached={false}><HotLapsSetup trackSetup={this.state.trackSetup} isHidden={this.state.isHidden}
                handleFieldChange={this.handleFieldChange} editSetup={this.editSetup}
                handleDropdown={this.handleDropdown}></HotLapsSetup></Tab.Pane>
        },
        {
            menuItem: 'Heat Race', render: () => <Tab.Pane className='setup-tab' attached={false}><HeatRaceSetup trackSetup={this.state.trackSetup} isHidden={this.state.isHidden}
                handleFieldChange={this.handleFieldChange} editSetup={this.editSetup}
                handleDropdown={this.handleDropdown}></HeatRaceSetup></Tab.Pane>
        },
        {
            menuItem: 'Feature', render: () => <Tab.Pane className='setup-tab' attached={false}><FeatureSetup
                trackSetup={this.state.trackSetup} isHidden={this.state.isHidden}
                handleFieldChange={this.handleFieldChange} editSetup={this.editSetup}
                handleDropdown={this.handleDropdown}></FeatureSetup></Tab.Pane>
        },
    ]


    render() {
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
                    <Tab menu={{ secondary: true, pointing: true, size: 'massive' }} panes={this.panes}
                    />
                </Grid>
                <Container>
                    <Button className='setup-button' color='orange' size='huge'
                        onClick={() => this.setState({ isHidden: false })}
                        style={{ display: `${reverseHidden}` }}>
                        Edit
                    </Button>
                    <Button className='setup-button' color='black' size='huge' style={{ display: `${reverseHidden}` }}
                        onClick={() => this.deleteSetup(this.state.trackSetup.id)}
                    >
                        Delete
                    </Button>
                </Container>
            </>
        )
    }
}
