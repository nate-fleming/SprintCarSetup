import React, { Component } from 'react'
import { Container, Button, Grid, Table, Input } from 'semantic-ui-react'

export default class HeatRaceSetup extends Component {
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
                                            style={{ fontSize: 20, backgroundColor: '' }}>Shocks</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>
                                            LF <span style={{ display: `${reverseHidden}`, textAlign: 'center' }}>{this.props.trackSetup.hrShocksLF}</span>
                                            <Input fluid
                                                id='hrShocksLF'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.hrShocksLF}
                                            ></Input>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            RF <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.hrShocksRF}</span>
                                            <Input fluid
                                                id='hrShocksRF'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.hrShocksRF}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>
                                            LR <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.hrShocksLR}</span>
                                            <Input fluid
                                                id='hrShocksLR'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.hrShocksLR}></Input>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            RR <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.hrShocksRR}</span>
                                            <Input fluid
                                                id='hrShocksRR'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.hrShocksRR}></Input>
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
                                            <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.hrStagger}</span>
                                            <Input fluid
                                                id='hrStagger'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.hrStagger}></Input>
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
                                            LF <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.hrTurnLF}</span>
                                            <Input fluid
                                                id='hrTurnLF'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.hrTurnLF}></Input>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            RF <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.hrTurnRF}</span>
                                            <Input fluid
                                                id='hrTurnRF'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.hrTurnRF}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>
                                            LR <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.hrTurnLR}</span>
                                            <Input fluid
                                                id='hrTurnLR'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.hrTurnLR}></Input>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            RR <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.hrTurnRR}</span>
                                            <Input fluid
                                                id='hrTurnRR'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.hrTurnRR}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                        <Grid.Column computer={8} tablet={8} mobile={hidden === 'none' ? 8 : 16} style={{ marginTop: hidden === 'none' ? '' : 20 }}>
                            <Table unstackable celled className='setup-table'>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='2' textAlign='center' style={{ fontSize: 20 }}>RR Spacing</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell colSpan='2' textAlign='center'>
                                            <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.hrRRSpacing}</span>
                                            <Input fluid
                                                id='hrRRSpacing'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.hrRRSpacing}></Input>
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
                                            style={{ fontSize: 20 }}>Tire Pressure</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>
                                            LF <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.hrTirePressureLF}</span>
                                            <Input fluid
                                                id='hrTirePressureLF'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.hrTirePressureLF}></Input>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            RF <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.hrTirePressureRF}</span>
                                            <Input fluid
                                                id='hrTirePressureRF'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.hrTirePressureRF}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>
                                            LR <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.hrTirePressureLR}</span>
                                            <Input fluid
                                                id='hrTirePressureLR'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.hrTirePressureLR}></Input>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            RR <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.hrTirePressureRR}</span>
                                            <Input fluid
                                                id='hrTirePressureRR'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.hrTirePressureRR}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                        <Grid.Column computer={8} tablet={8} mobile={hidden === 'none' ? 8 : 16} style={{ marginTop: hidden === 'none' ? '' : 20 }}>
                            <Grid.Row>
                                <Table unstackable celled className='setup-table'>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell colSpan='2' textAlign='center' style={{ fontSize: 20 }}>Wing Position</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell colSpan='2' textAlign='center'>
                                                <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.hrWingPosition}</span>
                                                <Input fluid
                                                    id='hrWingPosition'
                                                    onChange={this.props.handleFieldChange}
                                                    style={{ display: `${hidden}` }}
                                                    defaultValue={this.props.trackSetup.hrWingPosition}></Input>
                                            </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </Grid.Row>
                            <Grid.Row style={{ marginTop: 20 }}>
                                <Table unstackable celled className='setup-table'>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell colSpan='2' textAlign='center' style={{ fontSize: 20 }}>RPM</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell colSpan='2' textAlign='center'>
                                                <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.hrRPM}</span>
                                                <Input fluid
                                                    id='hrRPM'
                                                    onChange={this.props.handleFieldChange}
                                                    style={{ display: `${hidden}` }}
                                                    defaultValue={this.props.trackSetup.hrRPM}></Input>
                                            </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </Grid.Row>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid textAlign='center' style={{ marginTop: 20, marginBottom: 40 }}>
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
