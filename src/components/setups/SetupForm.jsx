import React, { Component } from 'react'
import { Container, Image, Button, Grid, Header, Table, Input, Dropdown, GridColumn, TableCell } from 'semantic-ui-react'

export default class setupForm extends Component {
    state = {
        date: new Date()
    }

    wingOptions = [
        {
            key: 'winged',
            text: 'winged',
            value: 'winged'
        },
        {
            key: 'non-winged',
            text: 'non-winged',
            value: 'non-winged'
        }
    ]

    render() {
        return (
            <>
                <Container>
                    <Header textAlign='center' size='huge'>
                        Create a new setup for {this.props.track.name}
                    </Header>
                </Container>
                <Grid columns={2}>
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
                                            <Input fluid></Input>
                                        </Table.Cell>
                                        <Table.Cell>
                                            RF
                                            <Input fluid></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            LR
                                            <Input fluid></Input>
                                        </Table.Cell>
                                        <Table.Cell>
                                            RR
                                            <Input fluid></Input>
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
                                            <Input fluid></Input>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Input fluid></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell colSpan='2'>
                                            <Input fluid></Input>
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
                                            <Input fluid></Input>
                                        </Table.Cell>
                                        <Table.Cell>
                                            RF
                                            <Input fluid></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            LR
                                            <Input fluid></Input>
                                        </Table.Cell>
                                        <Table.Cell>
                                            RR
                                            <Input fluid></Input>
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
                                            <Dropdown
                                                fluid
                                                placeholder='winged race?'
                                                selection
                                                options={this.wingOptions}
                                            >
                                            </Dropdown>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell colSpan='2' textAlign='center'>
                                            Angle
                                            <Input
                                                fluid
                                                placeholder='write none if non-winged race'
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
                                            <Input fluid></Input>
                                        </Table.Cell>
                                        <Table.Cell>
                                            RF
                                            <Input fluid></Input>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            LR
                                            <Input fluid></Input>
                                        </Table.Cell>
                                        <Table.Cell>
                                            RR
                                            <Input fluid></Input>
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
                                            <Input fluid ></Input>
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
                                <Table.Row >
                                    <Table.Cell colSpan='2' textAlign='center'>
                                        Stagger
                                            <Input></Input>
                                    </Table.Cell>
                                </Table.Row>
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
                                            <Input fluid></Input>
                                        Brand
                                            <Input fluid></Input>
                                    </Table.Cell>
                                    <Table.Cell>
                                        Model
                                            <Input fluid></Input>
                                        Brand
                                            <Input fluid></Input>
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
                                            <Input fluid></Input>
                                        Brand
                                            <Input fluid></Input>
                                    </Table.Cell>
                                    <Table.Cell>
                                        Model
                                            <Input fluid></Input>
                                        Brand
                                            <Input fluid></Input>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Row>
                </Grid>
            </>
        )
    }
}
