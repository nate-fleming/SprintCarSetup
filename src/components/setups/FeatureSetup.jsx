import React, { Component } from 'react'
import { Container, Button, Grid, Table, Input } from 'semantic-ui-react'

export default class FeatureSetup extends Component {
    render() {
        const hidden = this.props.isHidden ? 'none' : ''
        const reverseHidden = this.props.isHidden ? '' : 'none'
        return (
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Table unstackable className='setup-table'>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='2' textAlign='center'
                                            style={{ fontSize: 20, backgroundColor: '' }}>Shocks</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>
                                            LF <span style={{ display: `${reverseHidden}`, textAlign: 'center' }}>{this.props.trackSetup.fShocksLF}</span>
                                            <Input fluid
                                                id='fShocksLF'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.fShocksLF}
                                            ></Input>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            RF <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.fShocksRF}</span>
                                            <Input fluid
                                                id='fShocksRF'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.fShocksRF}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>
                                            LR <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.fShocksLR}</span>
                                            <Input fluid
                                                id='fShocksLR'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.fShocksLR}></Input>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            RR <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.fShocksRR}</span>
                                            <Input fluid
                                                id='fShocksRR'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.fShocksRR}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Table unstackable className='setup-table'>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='2' textAlign='center' style={{ fontSize: 20 }}>Stagger</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell colSpan='2' textAlign='center'>
                                            <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.fStagger}</span>
                                            <Input fluid
                                                id='fStagger'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.fStagger}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Table unstackable className='setup-table'>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='2' textAlign='center'
                                            style={{ fontSize: 20 }}>Turns</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>
                                            LF <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.fTurnLF}</span>
                                            <Input fluid
                                                id='fTurnLF'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.fTurnLF}></Input>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            RF <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.fTurnRF}</span>
                                            <Input fluid
                                                id='fTurnRF'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.fTurnRF}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>
                                            LR <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.fTurnLR}</span>
                                            <Input fluid
                                                id='fTurnLR'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.fTurnLR}></Input>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            RR <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.fTurnRR}</span>
                                            <Input fluid
                                                id='fTurnRR'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.fTurnRR}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Table unstackable className='setup-table'>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='2' textAlign='center' style={{ fontSize: 20 }}>RR Spacing</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell colSpan='2' textAlign='center'>
                                            <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.fRRSpacing}</span>
                                            <Input fluid
                                                id='fRRSpacing'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.fRRSpacing}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Table unstackable className='setup-table'>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='2' textAlign='center'
                                            style={{ fontSize: 20 }}>Tire Pressure</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>
                                            LF <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.fTirePressureLF}</span>
                                            <Input fluid
                                                id='fTirePressureLF'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.fTirePressureLF}></Input>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            RF <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.fTirePressureRF}</span>
                                            <Input fluid
                                                id='fTirePressureRF'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.fTirePressureRF}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>
                                            LR <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.fTirePressureLR}</span>
                                            <Input fluid
                                                id='fTirePressureLR'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.fTirePressureLR}></Input>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            RR <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.fTirePressureRR}</span>
                                            <Input fluid
                                                id='fTirePressureRR'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.fTirePressureRR}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Grid.Row>
                                <Table unstackable className='setup-table'>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell colSpan='2' textAlign='center' style={{ fontSize: 20 }}>Wing Position</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell colSpan='2' textAlign='center'>
                                                <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.fWingPosition}</span>
                                                <Input fluid
                                                    id='fWingPosition'
                                                    onChange={this.props.handleFieldChange}
                                                    style={{ display: `${hidden}` }}
                                                    defaultValue={this.props.trackSetup.fWingPosition}></Input>
                                            </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </Grid.Row>
                            <Grid.Row style={{ marginTop: 20 }}>
                                <Table unstackable className='setup-table'>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell colSpan='2' textAlign='center' style={{ fontSize: 20 }}>RPM</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell colSpan='2' textAlign='center'>
                                                <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.fRPM}</span>
                                                <Input fluid
                                                    id='fRPM'
                                                    onChange={this.props.handleFieldChange}
                                                    style={{ display: `${hidden}` }}
                                                    defaultValue={this.props.trackSetup.fRPM}></Input>
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
