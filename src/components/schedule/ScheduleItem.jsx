import React, { Component } from 'react'
import { Button, Grid, Image, Modal, Icon, Segment, Header, Form, Dropdown, Table } from 'semantic-ui-react'
import moment from 'moment'
import './schedule.css'

export default class ScheduleItem extends Component {
    state = {
        modalOpen: false,
        track: [],
        date: '',
        trackId: '',
        id: ''
    }



    componentDidMount() {
        this.setState({
            track: this.props.tracks.find(track => track.id === this.props.race.trackId),
            date: this.props.race.date,
            trackId: this.props.race.trackId,
            id: this.props.race.id
        })
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    saveEdits = () => {
        const editedRace = {
            date: this.state.date,
            trackId: this.state.trackId,
            id: this.state.id,
            userId: this.props.user
        }
        this.props.editRace(editedRace)
    }

    render() {
        const trackOptions = []
        const getTrackackOptions = () => this.props.tracks.map(track => {
            const options = {
                key: track.id, text: track.name, value: track.id
            }
            trackOptions.push(options)
        })

        getTrackackOptions()
        const track = this.props.tracks.find(track => track.id === this.props.race.trackId)
        return (
            <>
                <Table.Cell textAlign='center' style={{ fontSize: 20 }}>
                    <Icon name='calendar alternate outline' size='large' />
                    {moment(this.props.race.date).format('MMM-DD')}
                </Table.Cell>
                <Table.Cell>
                    <Image className='schedule-icon' centered src={track.imgUrl} style={{ maxHeight: 80 }}></Image>
                </Table.Cell>
                <Table.Cell textAlign='center'>
                    <Button className='schedule-icon' as='a' color='orange'
                        href={`/tracks/${this.props.race.trackId}`}
                        icon='table'
                    ></Button>
                    <Modal trigger={<Button className='schedule-icon' onClick={this.handleOpen} color='black' icon='edit'></Button>}
                        closeIcon
                        open={this.state.modalOpen}
                        onClose={this.handleClose}>
                        <Header className='modal-header' icon='cog' content='Edit Race' />
                        <Modal.Content className='modal-body'>
                            <Grid textAlign='center' style={{ fontSize: 40 }}  >
                                <Grid.Column style={{ maxWidth: 450 }}>
                                    <Form size='large' >
                                        <Segment className='modal-segment' color='orange' inverted>
                                            <Form.Input type='date' fluid icon='calendar alternate outline' iconPosition='left'
                                                placeholder='Date'
                                                label='Date'
                                                defaultValue={this.props.race.date}
                                                onChange={(e) => this.setState({ date: e.target.value })} />
                                            <Dropdown
                                                fluid
                                                placeholder='Track'
                                                selection
                                                defaultValue={this.props.race.trackId}
                                                options={trackOptions}
                                                onChange={(e, { value }) => this.setState(
                                                    { trackId: value })
                                                }
                                            >
                                            </Dropdown>
                                        </Segment>
                                    </Form>
                                </Grid.Column>
                            </Grid>
                        </Modal.Content>
                        <Modal.Actions className='modal-header'>
                            <Button className='modal-button' color='black' onClick={this.handleClose}>
                                <Icon name='remove' /> Cancel
                                    </Button>
                            <Button className='modal-button' color='orange'
                                onClick={() => {
                                    this.handleClose()
                                    this.saveEdits()
                                }}
                            >
                                <Icon name='checkmark' /> Save
                                    </Button>
                        </Modal.Actions>
                    </Modal>
                    <Button as='a' color='red' icon='delete'
                        className='schedule-icon'
                        onClick={() => this.props.deleteRace(this.props.race.id)}
                    ></Button>
                </Table.Cell>
            </>
        )
    }
}
