import React, { Component } from 'react'
import { Button, Grid, Modal, Icon, Segment, Header, Form, Dropdown, Label, Divider, Table } from 'semantic-ui-react'
import moment from 'moment'
import scheduleManager from '../../modules/scheduleManager'

export default class ResultItem extends Component {
    state = {
        modalOpen: false,
        track: [],
        date: '',
        trackId: '',
        id: '',
        featureResult: 'enter result',
        heatRaceResult: 'enter result'
    }



    componentDidMount() {
        this.setState({
            track: this.props.tracks.find(track => track.id === this.props.race.trackId),
            date: this.props.race.date,
            trackId: this.props.race.trackId,
            id: this.props.race.id,
            featureResult: (!this.props.race.featureResult) ? 'enter result' : this.props.race.featureResult,
            heatRaceResult: (!this.props.race.heatRaceResult) ? 'enter result' : this.props.race.heatRaceResult
        })
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    saveEdits = () => {
        const editedRace = {
            date: this.state.date,
            trackId: this.state.trackId,
            id: this.state.id,
            userId: this.props.user,
            featureResult: this.state.featureResult,
            heatRaceResult: this.state.heatRaceResult
        }

        this.props.editResult(editedRace)
    }

    results = [
        { key: 1, text: '1st', value: '1st' },
        { key: 2, text: '2nd', value: '2nd' },
        { key: 3, text: '3rd', value: '3rd' },
        { key: 4, text: '4th', value: '4th' },
        { key: 5, text: '5th', value: '5th' },
        { key: 6, text: '6th', value: '6th' },
        { key: 7, text: '7th', value: '7th' },
        { key: 8, text: '8th', value: '8th' },
        { key: 9, text: '9th', value: '9th' },
        { key: 10, text: '10th', value: '10th' },
        { key: 11, text: '11th', value: '11th' },
        { key: 12, text: '12th', value: '12th' },
        { key: 13, text: '13th', value: '13th' },
        { key: 14, text: '14th', value: '14th' },
        { key: 15, text: '15th', value: '15th' },
        { key: 16, text: '16th', value: '16th' },
        { key: 17, text: '17th', value: '17th' },
        { key: 18, text: '18th', value: '18th' },
        { key: 19, text: '19th', value: '19th' },
        { key: 20, text: '20th', value: '20th' },
        { key: 21, text: '21st', value: '21st' },
        { key: 22, text: '22nd', value: '22nd' },
        { key: 23, text: '23rd', value: '23rd' },
        { key: 24, text: '24th', value: '24th' },
        { key: 25, text: 'DNF', value: 'DNF' },
    ]

    render() {
        const track = this.props.tracks.find(track => track.id === this.props.race.trackId)
        return (
            <>
                <Table.Cell style={{ fontSize: 16 }}>
                    <Icon name='calendar alternate outline' size='large' />
                    {moment(this.props.race.date).format('MMM-DD-YY')}
                </Table.Cell>
                <Table.Cell>
                    <p style={{ fontSize: 16 }}>{track.name}</p>
                </Table.Cell>
                <Table.Cell style={{ fontSize: 16 }}>
                    <p>{(!this.state.featureResult) ? 'enter result'
                        : this.state.featureResult
                    }</p>
                </Table.Cell>
                <Table.Cell style={{ fontSize: 16 }}>
                    <p>{(!this.state.heatRaceResult) ? 'enter result'
                        : this.state.heatRaceResult
                    }</p>
                </Table.Cell>
                <Table.Cell>
                    <Grid>
                        <Grid.Column>
                            <Modal trigger={<Button onClick={this.handleOpen} color='orange' >Log Results</Button>}
                                closeIcon
                                open={this.state.modalOpen}
                                onClose={this.handleClose}>
                                <Header icon='cog' content={`Log Results for ${track.name} on ${moment(this.props.race.date).format('MMM-DD-YY')}`} style={{ backgroundColor: '#D0D6D9' }} />
                                <Modal.Content>
                                    <Grid textAlign='center' style={{ fontSize: 40 }}  >
                                        <Grid.Column style={{ maxWidth: 450 }}>
                                            <Form size='large' >
                                                <Segment color='orange' inverted>
                                                    <Form.Field>
                                                        <Label
                                                            color='black'

                                                        // style={{ marginTop: 10, marginLeft: 10 }}
                                                        >Feature Result</Label>
                                                        <Dropdown fluid
                                                            selection
                                                            placeholder='Feature'
                                                            options={this.results}
                                                            defaultValue={this.state.featureResult}
                                                            onChange={(e, { value }) => this.setState(
                                                                { featureResult: value })
                                                            }
                                                        ></Dropdown>
                                                    </Form.Field>
                                                    <Divider />
                                                    <Form.Field>
                                                        <Label
                                                            color='black'

                                                        // style={{ marginTop: 10, marginLeft: 10 }}
                                                        >HeatRace Result</Label>
                                                        <Dropdown fluid

                                                            selection
                                                            placeholder='Heat Race'
                                                            options={this.results}
                                                            header='Heat Race Result'
                                                            defaultValue={this.state.heatRaceResult}
                                                            onChange={(e, { value }) => this.setState(
                                                                { heatRaceResult: value })
                                                            }
                                                        ></Dropdown>
                                                    </Form.Field>
                                                </Segment>
                                            </Form>
                                        </Grid.Column>
                                    </Grid>
                                </Modal.Content>
                                <Modal.Actions style={{ backgroundColor: '#D0D6D9' }}>
                                    <Button color='black' onClick={this.handleClose}>
                                        <Icon name='remove' /> Cancel
                                    </Button>
                                    <Button color='orange'
                                        onClick={() => {
                                            this.handleClose()
                                            this.saveEdits()
                                        }}
                                    >
                                        <Icon name='checkmark' /> Save
                                    </Button>
                                </Modal.Actions>
                            </Modal>
                        </Grid.Column>
                        <Grid.Column style={{ marginLeft: 80 }}>
                            <Button as='a' color='black'
                                onClick={() => this.props.deleteResult(this.props.race.id)}
                            >Remove Race</Button>
                        </Grid.Column>
                    </Grid>
                </Table.Cell>
            </>
        )
    }
}
