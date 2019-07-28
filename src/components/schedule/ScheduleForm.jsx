import React, { Component } from 'react'
import { Button, Form, Grid, Header, Segment, Dropdown, Message } from 'semantic-ui-react'
import './schedule.css'

export default class ScheduleForm extends Component {
    state = {
        date: '',
        trackId: '',
        userId: this.props.user
    }


    render() {

        // Store tracks
        const trackOptions = []

        // Get all tracks and create dropdown to select them
        const getTrackackOptions = () => this.props.tracks.map(track => {
            const options = {
                key: track.id, text: track.name, value: track.id
            }
            trackOptions.push(options)
        })

        getTrackackOptions()
        return (
            <Grid textAlign='center'  >
                <Grid.Column style={{ maxWidth: 520 }}>
                    <Header className='form-header' as='h1' color='black' textAlign='center'>
                        Create A New Race
                    </Header>
                    <Form size='large' success error>
                        <Segment className='form-segment'>
                            <Form.Input type='date' fluid icon='calendar alternate outline' iconPosition='left'
                                placeholder='yyyy-mm-dd'
                                label='Date'
                                onChange={(e) => this.setState({ date: e.target.value })} />
                            <Dropdown
                                fluid
                                placeholder='Track'
                                selection
                                options={trackOptions}
                                onChange={(e, { value }) => this.setState(
                                    { trackId: value })
                                }
                            >
                            </Dropdown>
                            {/* {(!this.state.date && !this.state.trackId) ?
                                <Message error
                                    header='Complete Form'
                                    content='Make sure to complete both fields'
                                /> : null
                            } */}
                            <Button className='schedule-form-button' color='black' size='large'
                                onClick={() => this.props.saveRace(this.state)}
                                disabled={(!this.state.date || !this.state.trackId) ? true : false}
                            >
                                Save
                            </Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
}
