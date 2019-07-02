import React, { Component } from 'react'
import { Container, Button, Grid, Table, Input } from 'semantic-ui-react'

export default class HotLapsSetup extends Component {
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
                                            LF <span style={{ display: `${reverseHidden}`, textAlign: 'center' }}>{this.props.trackSetup.hlShocksLF}</span>
                                            <Input fluid
                                                id='hlShocksLF'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.hlShocksLF}
                                            ></Input>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            RF <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.hlShocksRF}</span>
                                            <Input fluid
                                                id='hlShocksRF'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.hlShocksRF}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>
                                            LR <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.hlShocksLR}</span>
                                            <Input fluid
                                                id='hlShocksLR'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.hlShocksLR}></Input>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            RR <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.hlShocksRR}</span>
                                            <Input fluid
                                                id='hlShocksRR'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.hlShocksRR}></Input>
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
                                            <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.hlStagger}</span>
                                            <Input fluid
                                                id='hlStagger'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.hlStagger}></Input>
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
                                            LF <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.hlTurnLF}</span>
                                            <Input fluid
                                                id='hlTurnLF'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.hlTurnLF}></Input>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            RF <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.hlTurnRF}</span>
                                            <Input fluid
                                                id='hlTurnRF'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.hlTurnRF}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>
                                            LR <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.hlTurnLR}</span>
                                            <Input fluid
                                                id='hlTurnLR'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.hlTurnLR}></Input>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            RR <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.hlTurnRR}</span>
                                            <Input fluid
                                                id='hlTurnRR'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.hlTurnRR}></Input>
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
                                            <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.hlRRSpacing}</span>
                                            <Input fluid
                                                id='hlRRSpacing'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.hlRRSpacing}></Input>
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
                                            LF <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.hlTirePressureLF}</span>
                                            <Input fluid
                                                id='hlTirePressureLF'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.hlTirePressureLF}></Input>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            RF <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.hlTirePressureRF}</span>
                                            <Input fluid
                                                id='hlTirePressureRF'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.hlTirePressureRF}></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'>
                                            LR <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.hlTirePressureLR}</span>
                                            <Input fluid
                                                id='hlTirePressureLR'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.hlTirePressureLR}></Input>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            RR <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.hlTirePressureRR}</span>
                                            <Input fluid
                                                id='hlTirePressureRR'
                                                onChange={this.props.handleFieldChange}
                                                style={{ display: `${hidden}` }}
                                                defaultValue={this.props.trackSetup.hlTirePressureRR}></Input>
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
                                                <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.hlWingPosition}</span>
                                                <Input fluid
                                                    id='hlWingPosition'
                                                    onChange={this.props.handleFieldChange}
                                                    style={{ display: `${hidden}` }}
                                                    defaultValue={this.props.trackSetup.hlWingPosition}></Input>
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
                                                <span style={{ display: `${reverseHidden}` }}>{this.props.trackSetup.hlRPM}</span>
                                                <Input fluid
                                                    id='hlRPM'
                                                    onChange={this.props.handleFieldChange}
                                                    style={{ display: `${hidden}` }}
                                                    defaultValue={this.props.trackSetup.hlRPM}></Input>
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
