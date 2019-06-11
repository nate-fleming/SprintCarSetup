import React, { Component } from 'react'
import { Container, Form, Button, Grid, Header, Table, Input, Dropdown } from 'semantic-ui-react'
import setupManager from '../../modules/setupManager'


export default class setupForm extends Component {
    state = {
        date: new Date(),
        userId: this.props.user,
        trackId: this.props.track.id
    }

    wingOptions = [
        {
            key: 'winged',
            text: 'winged',
            value: 'winged',
        },
        {
            key: 'non-winged',
            text: 'non-winged',
            value: 'non-winged',
        }
    ]

    saveSetup = async () => {
        await this.setState({ trackId: this.props.track.id })
        await setupManager.post(this.state)
    }


    render() {
        return (
            <>
                <Container>
                    <Header textAlign='center' size='huge'>
                        Create a new setup for {this.props.track.name}
                    </Header>
                </Container>
                <Grid columns={2} style={{ padding: 20 }} textAlign='center'>
                    <Form>
                        <Form.Input
                            label='Setup Name'
                            onChange={(e) => this.setState({ name: e.target.value })}
                        ></Form.Input>
                    </Form>
                    <Grid.Row>
                        <Grid.Column>
                            <Table celled>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='2' textAlign='center'>Setup Blocks</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>
                                            LF
                                            <Input fluid
                                                onChange={(e) => this.setState({ gSetupBlockLF: e.target.value })}
                                            ></Input>
                                        </Table.Cell>
                                        <Table.Cell>
                                            RF
                                            <Input fluid
                                                onChange={(e) => this.setState({ gSetupBlockRF: e.target.value })}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            LR
                                            <Input fluid
                                                onChange={(e) => this.setState({ gSetupBlockLR: e.target.value })}></Input>
                                        </Table.Cell>
                                        <Table.Cell>
                                            RR
                                            <Input fluid
                                                onChange={(e) => this.setState({ gSetupBlockRR: e.target.value })}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                        <Grid.Column>
                            <Table celled>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='2' textAlign='center'>Gear Ratio</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Input fluid
                                                onChange={(e) => this.setState({ gGearRatio1: e.target.value })}></Input>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Input fluid
                                                onChange={(e) => this.setState({ gGearRatio2: e.target.value })}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell colSpan='2'>
                                            <Input fluid
                                                onChange={(e) => this.setState({ gGearRatio3: e.target.value })}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Table celled>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='2' textAlign='center'>Bars</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>
                                            LF
                                            <Input fluid
                                                onChange={(e) => this.setState({ gBarLF: e.target.value })}></Input>
                                        </Table.Cell>
                                        <Table.Cell>
                                            RF
                                            <Input fluid
                                                onChange={(e) => this.setState({ gBarRF: e.target.value })}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            LR
                                            <Input fluid
                                                onChange={(e) => this.setState({ gBarLR: e.target.value })}></Input>
                                        </Table.Cell>
                                        <Table.Cell>
                                            RR
                                            <Input fluid
                                                onChange={(e) => this.setState({ gBarRR: e.target.value })}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                        <Grid.Column>
                            <Table celled>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='2' textAlign='center'>Wing Angle</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>
                                            winged race?
                                            {/* <Dropdown
                                                fluid
                                                placeholder='winged race?'
                                                selection
                                                options={this.wingOptions}
                                            >
                                            </Dropdown> */}
                                            <select
                                                placeholder='winged race?'
                                                onChange={(e) => this.setState({ gWing: e.target.value })}
                                            >
                                                <option value='winged'>
                                                    winged
                                                </option>
                                                <option value='non-winged'>
                                                    non-winged
                                                </option>

                                            </select>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell colSpan='2' textAlign='center'>
                                            Angle
                                            <Input
                                                fluid
                                                placeholder='write none if non-winged race'
                                                onChange={(e) => this.setState({ gWingAngle: e.target.value })}
                                            ></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Table celled>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='2' textAlign='center'>Turns</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>
                                            LF
                                            <Input fluid
                                                onChange={(e) => this.setState({ gTurnLF: e.target.value })}></Input>
                                        </Table.Cell>
                                        <Table.Cell>
                                            RF
                                            <Input fluid
                                                onChange={(e) => this.setState({ gTurnRF: e.target.value })}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            LR
                                            <Input fluid
                                                onChange={(e) => this.setState({ gTurnLR: e.target.value })}></Input>
                                        </Table.Cell>
                                        <Table.Cell>
                                            RR
                                            <Input fluid
                                                onChange={(e) => this.setState({ gTurnRR: e.target.value })}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                        <Grid.Column>
                            <Table celled>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='2' textAlign='center'>Stagger</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell colSpan='2'>
                                            <Input fluid
                                                onChange={(e) => this.setState({ gStagger: e.target.value })}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Table celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell colSpan='2'
                                        textAlign='center'
                                    >
                                        Tires
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell textAlign='center'>
                                        Left Front
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        Right Front
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        Model
                                            <Input fluid
                                            onChange={(e) => this.setState({ gTireModelLF: e.target.value })}></Input>
                                        Brand
                                            <Input fluid
                                            onChange={(e) => this.setState({ gTireBrandLF: e.target.value })}></Input>
                                    </Table.Cell>
                                    <Table.Cell>
                                        Model
                                            <Input fluid
                                            onChange={(e) => this.setState({ gTireModelRF: e.target.value })}></Input>
                                        Brand
                                            <Input fluid
                                            onChange={(e) => this.setState({ gTireBrandRF: e.target.value })}></Input>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell textAlign='center'>
                                        Left Rear
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        Right Rear
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        Model
                                            <Input fluid
                                            onChange={(e) => this.setState({ gTireModelLR: e.target.value })}></Input>
                                        Brand
                                            <Input fluid
                                            onChange={(e) => this.setState({ gTireBrandLR: e.target.value })}></Input>
                                    </Table.Cell>
                                    <Table.Cell>
                                        Model
                                            <Input fluid
                                            onChange={(e) => this.setState({ gTireModelRF: e.target.value })}></Input>
                                        Brand
                                            <Input fluid
                                            onChange={(e) => this.setState({ gTireBrandRR: e.target.value })}></Input>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Row>
                </Grid>
                <Grid textAlign='center' style={{ marginTop: 20 }}>
                    <Button color='orange' size='huge'
                        onClick={this.saveSetup}
                    >
                        Save
                    </Button>
                </Grid>
            </>
        )
    }
}
