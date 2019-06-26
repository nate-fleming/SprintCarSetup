import React, { Component } from 'react'
import { Button, Form, Grid, Header, Icon, Message, Segment, Dropdown } from 'semantic-ui-react'
import scheduleManager from '../../modules/scheduleManager'
import './schedule.css'

export default class ScheduleForm extends Component {
    state = {
        date: '',
        trackId: '',
        userId: this.props.user
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
        return (
            <Grid textAlign='center'  >
                <Grid.Column style={{ maxWidth: 520 }}>
                    <Header className='form-header' as='h1' color='black' textAlign='center'>
                        Create A New Race
                    </Header>
                    <Form size='large' >
                        <Segment className='form-segment'>
                            <Form.Input type='date' fluid icon='calendar alternate outline' iconPosition='left'
                                placeholder='Date'
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
                            <Button className='schedule-form-button' color='black' size='large'
                                onClick={() => this.props.saveRace(this.state)}>
                                Save
                            </Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
}
