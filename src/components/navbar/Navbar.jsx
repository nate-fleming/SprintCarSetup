import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { Container } from 'semantic-ui-react'
import loginManager from '../../modules/loginManager'


export default class Navbar extends Component {
    render() {
        return (

            <Menu stackable borderless size='massive' inverted fixed='top' color="orange" style={{ minHeight: 80 }}>
                <Container >
                    <Menu.Item as='a' href='/' >
                        Sprint Setup Pro
                    </Menu.Item>

                    <Menu.Item as='a' href='/' >
                        Schedule
                    </Menu.Item>

                    <Menu.Item as='a' href='/tracks' >
                        Tracks
                    </Menu.Item >

                    <Menu.Item as='a' href='/results' >
                        Results
                    </Menu.Item>

                    <Menu.Item position='right' as='a' href='/' onClick={loginManager.logout} >
                        Logout
                    </Menu.Item>
                </Container>
            </Menu>
        )
    }
}
