import React, { Component } from 'react'
import { Menu, Dropdown, Image } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import loginManager from '../../modules/loginManager'
import logo from '../../img/Logo2.png'
import './navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            (window.innerWidth > 425) ?
                <Menu borderless size='massive' inverted fixed='top' color="orange" style={{ minHeight: 80 }}>
                    <Container >
                        <Menu.Item as='a' href='/' className='logo-name'>
                            Sprint Setup Pro
                            {/* <Image src={logo} className='logo'></Image> */}
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
                :
                <Menu borderless size='massive' inverted fixed='top' color="orange" style={{ minHeight: 80 }}>
                    <Container>
                        <Menu.Item as='a' href='/' >
                            Sprint Setup Pro
                        </Menu.Item>
                        <Dropdown item simple text='Go To'>
                            <Dropdown.Menu>
                                <Dropdown.Item as='a' href='/'>Schedule</Dropdown.Item>
                                <Dropdown.Item as='a' href='/tracks'>Tracks</Dropdown.Item>
                                <Dropdown.Item as='a' href='/results'>Results</Dropdown.Item>
                                <Dropdown.Item as='a' href='/' onClick={loginManager.logout}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Container>
                </Menu>
        )
    }
}
