import React, { Component } from 'react'
import { Button, Grid, Image, Modal, Icon, Segment, Header, Form, Dropdown } from 'semantic-ui-react'
import moment from 'moment'

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
            <Grid>
                <Segment.Group horizontal raised style={{ padding: 20 }}>
                    <Grid.Column>
                        <Grid.Row >
                            <Icon name='calendar alternate outline' size='huge' style={{ marginTop: 20 }} />
                        </Grid.Row>
                        <Grid.Row>
                            <p style={{ fontSize: 40, marginTop: 20 }}>{moment(this.props.race.date).format('MMM-DD')}</p>
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column style={{ maxWidth: 400, marginLeft: 40 }}>
                        <Image centered src={track.imgUrl} style={{ maxHeight: 200 }}></Image>
                    </Grid.Column>
                    <Grid.Column verticalAlign='middle'>
                        <Grid.Row >
                            <Button as='a' color='orange' style={{ marginTop: 20, marginLeft: 40, width: 140 }}
                                href={`/tracks/${this.props.race.trackId}`}
                            >See My Setups</Button>
                        </Grid.Row>
                        <Grid.Row >
                            <Modal trigger={<Button onClick={this.handleOpen} color='black' style={{ marginTop: 20, marginLeft: 40, width: 140 }}>Edit Race</Button>}
                                closeIcon
                                open={this.state.modalOpen}
                                onClose={this.handleClose}>
                                <Header icon='cog' content='Edit Race' style={{ backgroundColor: '#D0D6D9' }} />
                                <Modal.Content>
                                    <Grid textAlign='center' style={{ fontSize: 40 }}  >
                                        <Grid.Column style={{ maxWidth: 450 }}>
                                            <Form size='large' >
                                                <Segment stacked color='orange' inverted>
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
                        </Grid.Row>
                        <Grid.Row >
                            <Button as='a' color='red' style={{ marginTop: 20, marginLeft: 40, width: 140 }}
                                onClick={() => this.props.deleteRace(this.props.race.id)}
                            >Remove Race</Button>
                        </Grid.Row>
                    </Grid.Column>
                </Segment.Group>
            </Grid>
        )
    }
}
