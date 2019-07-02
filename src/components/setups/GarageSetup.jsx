import React, { Component } from 'react'
import { Container, Button, Grid, Table, Input, Dropdown } from 'semantic-ui-react'
import './setups.css'

export default class GarageSetup extends Component {

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
        const hidden = this.props.isHidden ? 'none' : ''
        const reverseHidden = this.props.isHidden ? '' : 'none'
        return (
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column computer={8} tablet={8} mobile={hidden === 'none' ? 8 : 16}>
                            <Table unstackable celled className='setup-table'>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='2' textAlign='center'
                                            style={{ fontSize: 20, backgroundColor: '' }}>Setup Blocks</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>
                                            LF <span style={{ display: `${reverseHidden}`, textAlign: 'center' }}>{this.props.trackSetup.gSetupBlockLF}</span>
                                            <Input fluid
                                                id='gSetupBlockLF'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.gSetupBlockLF}
                                            ></Input>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            RF <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.gSetupBlockRF}</span>
                                            <Input fluid
                                                id='gSetupBlockRF'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.gSetupBlockRF}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>
                                            LR <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.gSetupBlockLR}</span>
                                            <Input fluid
                                                id='gSetupBlockLR'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.gSetupBlockLR}></Input>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            RR <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.gSetupBlockRR}</span>
                                            <Input fluid
                                                id='gSetupBlockRR'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.gSetupBlockRR}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                        <Grid.Column computer={8} tablet={8} mobile={hidden === 'none' ? 8 : 16} style={{ marginTop: hidden === 'none' ? '' : 20 }}>
                            <Table unstackable celled className='setup-table'>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='2' textAlign='center'
                                            style={{ fontSize: 20 }}>Gear Ratio</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>
                                            <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.gGearRatio1}</span>
                                            <Input fluid
                                                id='gGearRatio1'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.gGearRatio1}></Input>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.gGearRatio2}</span>
                                            <Input fluid
                                                id='gGearRatio2'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.gGearRatio2}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell colSpan='2' textAlign='center'>
                                            <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.gGearRatio3}</span>
                                            <Input fluid
                                                id='gGearRatio3'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.gGearRatio3}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column computer={8} tablet={8} mobile={hidden === 'none' ? 8 : 16}>
                            <Table unstackable celled className='setup-table'>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='2' textAlign='center'
                                            style={{ fontSize: 20 }}>Bars</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>
                                            LF <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.gBarLF}</span>
                                            <Input fluid
                                                id='gBarLF'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.gBarLF}></Input>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            RF <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.gBarRF}</span>
                                            <Input fluid
                                                id='gBarRF'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.gBarRF}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>
                                            LR <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.gBarLR}</span>
                                            <Input fluid
                                                id='gBarLR'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.gBarLR}></Input>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            RR <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.gBarRR}</span>
                                            <Input fluid
                                                id='gBarRR'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.gBarRR}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                        <Grid.Column computer={8} tablet={8} mobile={hidden === 'none' ? 8 : 16} style={{ marginTop: hidden === 'none' ? '' : 20 }}>
                            <Table unstackable celled className='setup-table'>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='2' textAlign='center'
                                            style={{ fontSize: 20 }}>Wing Angle</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>
                                            <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.gWing}</span>
                                            <Dropdown
                                                style={{ display: `${hidden}` }}
                                                fluid
                                                id='gWing'
                                                selection
                                                options={this.wingOptions}
                                                value={this.props.trackSetup.gWing}
                                                onChange={this.props.handleDropdown}
                                            >
                                            </Dropdown>
                                            {/* <select
                                                defaultValue={this.props.trackSetup.gWing}
                                                onChange={(e) => this.setState(
                                                    Object.assign(
                                                        this.props.trackSetup,
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
                                            Angle <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.gWingAngle}</span>
                                            <Input
                                                fluid
                                                id='gWingAngle'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.gWingAngle}
                                            ></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column computer={8} tablet={8} mobile={hidden === 'none' ? 8 : 16}>
                            <Table unstackable celled className='setup-table'>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='2' textAlign='center'
                                            style={{ fontSize: 20 }}>Turns</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>
                                            LF <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.gTurnLF}</span>
                                            <Input fluid
                                                id='gTurnLF'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.gTurnLF}></Input>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            RF <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.gTurnRF}</span>
                                            <Input fluid
                                                id='gTurnRF'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.gTurnRF}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>
                                            LR <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.gTurnLR}</span>
                                            <Input fluid
                                                id='gTurnLR'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.gTurnLR}></Input>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            RR <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.gTurnRR}</span>
                                            <Input fluid
                                                id='gTurnRR'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.gTurnRR}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                        <Grid.Column computer={8} tablet={8} mobile={hidden === 'none' ? 8 : 16} style={{ marginTop: hidden === 'none' ? '' : 20 }}>
                            <Table unstackable celled className='setup-table'>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='2' textAlign='center' style={{ fontSize: 20 }}>Stagger</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell colSpan='2' textAlign='center'>
                                            <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.gStagger}</span>
                                            <Input fluid
                                                id='gStagger'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.gStagger}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Table unstackable celled className='tire-table'>
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
                                    <Table.Cell textAlign='center' style={{ backgroundColor: 'grey', color: 'white', fontSize: 20 }}>
                                        Left Front
                                </Table.Cell>
                                    <Table.Cell textAlign='center' style={{ backgroundColor: 'grey', color: 'white', fontSize: 20 }}>
                                        Right Front
                                </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell textAlign='center'>
                                        <p>Model <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.gTireModelLF}</span></p>
                                        <Input fluid
                                            id='gTireModelLF'
                                            onChange={this.props.handleFieldChange}
                                            style={{ display: `${hidden}` }}
                                            defaultValue={this.props.trackSetup.gTireModelLF}></Input>
                                        Brand <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.gTireBrandLF}</span>
                                        <Input fluid
                                            id='gTireBrandLF'
                                            onChange={this.props.handleFieldChange}
                                            style={{ display: `${hidden}` }}
                                            defaultValue={this.props.trackSetup.gTireBrandLF}
                                        ></Input>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        <p>Model <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.gTireModelRF}</span></p>
                                        <Input fluid
                                            id='gTireModelRF'
                                            onChange={this.props.handleFieldChange}
                                            style={{ display: `${hidden}` }}
                                            defaultValue={this.props.trackSetup.gTireModelRF}></Input>
                                        Brand <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.gTireBrandRF}</span>
                                        <Input fluid
                                            id='gTireBrandRF'
                                            onChange={this.props.handleFieldChange}
                                            style={{ display: `${hidden}` }}
                                            defaultValue={this.props.trackSetup.gTireBrandRF}></Input>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell textAlign='center' style={{ backgroundColor: 'grey', color: 'white', fontSize: 20 }}>
                                        Left Rear
                                </Table.Cell>
                                    <Table.Cell textAlign='center' style={{ backgroundColor: 'grey', color: 'white', fontSize: 20 }}>
                                        Right Rear
                                </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell textAlign='center'>
                                        <p>Model <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.gTireModelLR}</span></p>
                                        <Input fluid
                                            id='gTireModelLR'
                                            onChange={this.props.handleFieldChange}
                                            style={{ display: `${hidden}` }}
                                            defaultValue={this.props.trackSetup.gTireModelLR}></Input>
                                        Brand <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.gTireBrandLR}</span>
                                        <Input fluid
                                            id='gTireBrandLR'
                                            onChange={this.props.handleFieldChange}
                                            style={{ display: `${hidden}` }}
                                            defaultValue={this.props.trackSetup.gTireBrandLR}
                                        ></Input>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        <p>Model <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.gTireModelRR}</span></p>
                                        <Input fluid
                                            id='gTireModelRR'
                                            onChange={this.props.handleFieldChange}
                                            style={{ display: `${hidden}` }}
                                            defaultValue={this.props.trackSetup.gTireModelRR}></Input>
                                        Brand <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.gTireBrandRR}</span>
                                        <Input fluid
                                            id='gTireBrandRR'
                                            onChange={this.props.handleFieldChange}
                                            style={{ display: `${hidden}` }}
                                            defaultValue={this.props.trackSetup.gTireBrandRR}></Input>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Row>
                </Grid>
                <Grid textAlign='center' style={{ marginTop: 20, marginBottom: 20 }}>
                    <Button color='orange' size='huge' style={{ display: `${hidden}` }}
                        onClick={() => this.props.editSetup()}
                    >
                        Save Edits
                    </Button>
                </Grid>
            </Container>
        )
    }
}
