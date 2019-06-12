import React, { Component } from 'react'
import setupManager from '../../modules/setupManager'
import { Container, Form, Button, Grid, Header, Table, Input, Dropdown } from 'semantic-ui-react'

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

    deleteSetup = (setupId) => {
        setupManager.deleteSetup(setupId)
            .then(() => this.props.history.push(`/tracks/${this.state.trackSetup.trackId}`))
    }

    wingOptions = [
        {
            key: '1',
            text: 'winged',
            value: 'winged',
        },
        {
            key: '2',
            text: 'non-winged',
            value: 'non-winged',
        }
    ]

    render() {
        const hidden = this.state.isHidden ? 'none' : ''
        const reverseHidden = this.state.isHidden ? '' : 'none'
        return (
            <>
                <Container>
                    <Header textAlign='center' style={{ fontSize: 40 }}>
                        {this.state.trackSetup.name}
                    </Header>
                </Container>
                <Grid columns={2} style={{ padding: 20, marginTop: 20 }} textAlign='center'>
                    <Form style={{ display: `${hidden}` }}>
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
                    <Grid.Row>
                        <Grid.Column>
                            <Table celled color='orange'>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='2' textAlign='center'
                                            style={{ fontSize: 20, backgroundColor: '#f56b00' }}>Setup Blocks</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>
                                            LF <span style={{ display: `${reverseHidden}`, textAlign: 'center' }}>{this.state.trackSetup.gSetupBlockLF}</span>
                                            <Input fluid
                                                onChange={(e) =>
                                                    this.setState(
                                                        Object.assign(
                                                            this.state.trackSetup,
                                                            { gSetupBlockLF: e.target.value })
                                                    )}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.state.trackSetup.gSetupBlockLF}
                                            ></Input>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            RF <span style={{ display: `${reverseHidden}` }}>{this.state.trackSetup.gSetupBlockRF}</span>
                                            <Input fluid
                                                onChange={(e) => this.setState(
                                                    Object.assign(
                                                        this.state.trackSetup,
                                                        { gSetupBlockRF: e.target.value })
                                                )}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.state.trackSetup.gSetupBlockRF}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>
                                            LR <span style={{ display: `${reverseHidden}` }}>{this.state.trackSetup.gSetupBlockLR}</span>
                                            <Input fluid
                                                onChange={(e) => this.setState(
                                                    Object.assign(
                                                        this.state.trackSetup,
                                                        { gSetupBlockLR: e.target.value })
                                                )}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.state.trackSetup.gSetupBlockLR}></Input>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            RR <span style={{ display: `${reverseHidden}` }}>{this.state.trackSetup.gSetupBlockRR}</span>
                                            <Input fluid
                                                onChange={(e) => this.setState(
                                                    Object.assign(
                                                        this.state.trackSetup,
                                                        { gSetupBlockRR: e.target.value })
                                                )}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.state.trackSetup.gSetupBlockRR}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                        <Grid.Column>
                            <Table celled color='orange'>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='2' textAlign='center'
                                            style={{ fontSize: 20 }}>Gear Ratio</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>
                                            <span style={{ display: `${reverseHidden}` }}>{this.state.trackSetup.gGearRatio1}</span>
                                            <Input fluid
                                                onChange={(e) => this.setState(
                                                    Object.assign(
                                                        this.state.trackSetup,
                                                        { gGearRatio1: e.target.value })
                                                )}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.state.trackSetup.gGearRatio1}></Input>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <span style={{ display: `${reverseHidden}` }}>{this.state.trackSetup.gGearRatio2}</span>
                                            <Input fluid
                                                onChange={(e) => this.setState(
                                                    Object.assign(
                                                        this.state.trackSetup,
                                                        { gGearRatio2: e.target.value })
                                                )}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.state.trackSetup.gGearRatio2}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell colSpan='2' textAlign='center'>
                                            <span style={{ display: `${reverseHidden}` }}>{this.state.trackSetup.gGearRatio3}</span>
                                            <Input fluid
                                                onChange={(e) => this.setState(
                                                    Object.assign(
                                                        this.state.trackSetup,
                                                        { gGearRatio3: e.target.value })
                                                )}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.state.trackSetup.gGearRatio3}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Table celled color='orange'>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='2' textAlign='center'
                                            style={{ fontSize: 20 }}>Bars</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>
                                            LF <span style={{ display: `${reverseHidden}` }}>{this.state.trackSetup.gBarLF}</span>
                                            <Input fluid
                                                onChange={(e) => this.setState(
                                                    Object.assign(
                                                        this.state.trackSetup,
                                                        { gBarLF: e.target.value })
                                                )}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.state.trackSetup.gBarLF}></Input>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            RF <span style={{ display: `${reverseHidden}` }}>{this.state.trackSetup.gBarRF}</span>
                                            <Input fluid
                                                onChange={(e) => this.setState(
                                                    Object.assign(
                                                        this.state.trackSetup,
                                                        { gBarRF: e.target.value })
                                                )}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.state.trackSetup.gBarRF}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>
                                            LR <span style={{ display: `${reverseHidden}` }}>{this.state.trackSetup.gBarLR}</span>
                                            <Input fluid
                                                onChange={(e) => this.setState(
                                                    Object.assign(
                                                        this.state.trackSetup,
                                                        { gBarLR: e.target.value })
                                                )}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.state.trackSetup.gBarLR}></Input>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            RR <span style={{ display: `${reverseHidden}` }}>{this.state.trackSetup.gBarRR}</span>
                                            <Input fluid
                                                onChange={(e) => this.setState(
                                                    Object.assign(
                                                        this.state.trackSetup,
                                                        { gBarRR: e.target.value })
                                                )}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.state.trackSetup.gBarRR}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                        <Grid.Column>
                            <Table celled color='orange'>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='2' textAlign='center'
                                            style={{ fontSize: 20 }}>Wing Angle</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>
                                            <span style={{ display: `${reverseHidden}` }}>{this.state.trackSetup.gWing}</span>
                                            <Dropdown
                                                style={{ display: `${hidden}` }}
                                                fluid
                                                defaultValue='winged race?'
                                                selection
                                                options={this.wingOptions}
                                                value={this.state.trackSetup.gWing}
                                                onChange={(e, { value }) => this.setState(
                                                    Object.assign(
                                                        this.state.trackSetup,
                                                        { gWing: value })
                                                )}
                                            >
                                            </Dropdown>
                                            {/* <select
                                                defaultValue={this.state.trackSetup.gWing}
                                                onChange={(e) => this.setState(
                                                    Object.assign(
                                                        this.state.trackSetup,
                                                        { gWing: e.target.value })
                                                )}
                                                style={{ display: `${hidden}` }}
                                            >
                                                <option value='winged'>
                                                    winged
                                            </option>
                                                <option value='non-winged'>
                                                    non-winged
                                            </option>

                                            </select> */}
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell colSpan='2' textAlign='center'>
                                            Angle <span style={{ display: `${reverseHidden}` }}>{this.state.trackSetup.gWingAngle}</span>
                                            <Input
                                                fluid
                                                onChange={(e) => this.setState(
                                                    Object.assign(
                                                        this.state.trackSetup,
                                                        { gWingAngle: e.target.value })
                                                )}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.state.trackSetup.gWingAngle}
                                            ></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Table celled color='orange'>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='2' textAlign='center'
                                            style={{ fontSize: 20 }}>Turns</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>
                                            LF <span style={{ display: `${reverseHidden}` }}>{this.state.trackSetup.gTurnLF}</span>
                                            <Input fluid
                                                onChange={(e) => this.setState(
                                                    Object.assign(
                                                        this.state.trackSetup,
                                                        { gTurnLF: e.target.value })
                                                )}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.state.trackSetup.gTurnLF}></Input>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            RF <span style={{ display: `${reverseHidden}` }}>{this.state.trackSetup.gTurnRF}</span>
                                            <Input fluid
                                                onChange={(e) => this.setState(
                                                    Object.assign(
                                                        this.state.trackSetup,
                                                        { gTurnRF: e.target.value })
                                                )}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.state.trackSetup.gTurnRF}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>
                                            LR <span style={{ display: `${reverseHidden}` }}>{this.state.trackSetup.gTurnLR}</span>
                                            <Input fluid
                                                onChange={(e) => this.setState(
                                                    Object.assign(
                                                        this.state.trackSetup,
                                                        { gTurnLR: e.target.value })
                                                )}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.state.trackSetup.gTurnLR}></Input>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            RR <span style={{ display: `${reverseHidden}` }}>{this.state.trackSetup.gTurnRR}</span>
                                            <Input fluid
                                                onChange={(e) => this.setState(
                                                    Object.assign(
                                                        this.state.trackSetup,
                                                        { gTurnRR: e.target.value })
                                                )}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.state.trackSetup.gTurnRR}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                        <Grid.Column>
                            <Table celled color='orange'>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='2' textAlign='center'>Stagger</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell colSpan='2' textAlign='center'>
                                            <span style={{ display: `${reverseHidden}` }}>{this.state.trackSetup.gStagger}</span>
                                            <Input fluid
                                                onChange={(e) => this.setState(
                                                    Object.assign(
                                                        this.state.trackSetup,
                                                        { gStagger: e.target.value })
                                                )}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.state.trackSetup.gStagger}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Table celled color='orange'>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell colSpan='2'
                                        textAlign='center'
                                        style={{ fontSize: 20 }}
                                    >
                                        Tires
                                </Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell textAlign='center' style={{ backgroundColor: 'black', color: 'white', fontSize: 20 }}>
                                        Left Front
                                </Table.Cell>
                                    <Table.Cell textAlign='center' style={{ backgroundColor: 'black', color: 'white', fontSize: 20 }}>
                                        Right Front
                                </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell textAlign='center'>
                                        Model <span style={{ display: `${reverseHidden}` }}>{this.state.trackSetup.gTireModelLF}</span>
                                        <Input fluid
                                            onChange={(e) => this.setState(
                                                Object.assign(
                                                    this.state.trackSetup,
                                                    { gTireModelLF: e.target.value })
                                            )}
                                            style={{ display: `${hidden}` }}
                                            defaultValue={this.state.trackSetup.gTireModelLF}></Input>
                                        Brand <span style={{ display: `${reverseHidden}` }}>{this.state.trackSetup.gTireBrandLF}</span>
                                        <Input fluid
                                            onChange={(e) => this.setState(
                                                Object.assign(
                                                    this.state.trackSetup,
                                                    { gTireBrandLF: e.target.value })
                                            )}
                                            style={{ display: `${hidden}` }}
                                            defaultValue={this.state.trackSetup.gTireBrandLF}
                                        ></Input>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        Model <span style={{ display: `${reverseHidden}` }}>{this.state.trackSetup.gTireModelRF}</span>
                                        <Input fluid
                                            onChange={(e) => this.setState(
                                                Object.assign(
                                                    this.state.trackSetup,
                                                    { gTireModelRF: e.target.value })
                                            )}
                                            style={{ display: `${hidden}` }}
                                            defaultValue={this.state.trackSetup.gTireModelRF}></Input>
                                        Brand <span style={{ display: `${reverseHidden}` }}>{this.state.trackSetup.gTireBrandRF}</span>
                                        <Input fluid
                                            onChange={(e) => this.setState(
                                                Object.assign(
                                                    this.state.trackSetup,
                                                    { gTireBrandRF: e.target.value })
                                            )}
                                            style={{ display: `${hidden}` }}
                                            defaultValue={this.state.trackSetup.gTireBrandRF}></Input>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell textAlign='center' style={{ backgroundColor: 'black', color: 'white', fontSize: 20 }}>
                                        Left Rear
                                </Table.Cell>
                                    <Table.Cell textAlign='center' style={{ backgroundColor: 'black', color: 'white', fontSize: 20 }}>
                                        Right Rear
                                </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell textAlign='center'>
                                        Model <span style={{ display: `${reverseHidden}` }}>{this.state.trackSetup.gTireModelLR}</span>
                                        <Input fluid
                                            onChange={(e) => this.setState(
                                                Object.assign(
                                                    this.state.trackSetup,
                                                    { gTireModelLR: e.target.value })
                                            )}
                                            style={{ display: `${hidden}` }}
                                            defaultValue={this.state.trackSetup.gTireModelLR}></Input>
                                        Brand <span style={{ display: `${reverseHidden}` }}>{this.state.trackSetup.gTireBrandLR}</span>
                                        <Input fluid
                                            onChange={(e) => this.setState(
                                                Object.assign(
                                                    this.state.trackSetup,
                                                    { gTireBrandLR: e.target.value })
                                            )}
                                            style={{ display: `${hidden}` }}
                                            defaultValue={this.state.trackSetup.gTireBrandLR}
                                        ></Input>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        Model <span style={{ display: `${reverseHidden}` }}>{this.state.trackSetup.gTireModelRR}</span>
                                        <Input fluid
                                            onChange={(e) => this.setState(
                                                Object.assign(
                                                    this.state.trackSetup,
                                                    { gTireModelRR: e.target.value })
                                            )}
                                            style={{ display: `${hidden}` }}
                                            defaultValue={this.state.trackSetup.gTireModelRR}></Input>
                                        Brand <span style={{ display: `${reverseHidden}` }}>{this.state.trackSetup.gTireBrandRR}</span>
                                        <Input fluid
                                            onChange={(e) => this.setState(
                                                Object.assign(
                                                    this.state.trackSetup,
                                                    { gTireBrandRR: e.target.value })
                                            )}
                                            style={{ display: `${hidden}` }}
                                            defaultValue={this.state.trackSetup.gTireBrandRR}></Input>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Row>
                </Grid>
                <Grid textAlign='center' style={{ marginTop: 20, marginBottom: 40 }}>
                    <Button color='orange' size='huge'
                        onClick={() => this.setState({ isHidden: false })}
                        style={{ display: `${reverseHidden}` }}>
                        Edit
                    </Button>
                    <Button color='black' size='huge' style={{ display: `${reverseHidden}` }}
                        onClick={() => this.deleteSetup(this.state.trackSetup.id)}
                    >
                        Delete
                    </Button>
                    <Button color='orange' size='huge' style={{ display: `${hidden}` }}
                        onClick={() => this.editSetup()}
                    >
                        Save Edits
                    </Button>
                </Grid>
            </>
        )
    }
}
