import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { Container } from 'semantic-ui-react'
import loginManager from '../../modules/loginManager'


export default class Navbar extends Component {
    render() {
        return (
            <Menu borderless size='massive' inverted fixed='top' className='navbar' color="orange">
                <Container>
                    <Menu.Item>
                        <Link to='/'>Sprint Setup Pro</Link>
                    </Menu.Item>

                    <Menu.Item>
                        <Link to='/'>Schedule</Link>
                    </Menu.Item>

                    <Menu.Item>
                        <Link to='/tracks'>Tracks</Link>
                    </Menu.Item>

                    <Menu.Item>
                        <Link to='/'>Results</Link>
                    </Menu.Item>

                    <Menu.Item position='right'>
                        <Link to='/' onClick={loginManager.logout}>Logout
                        </Link>
                    </Menu.Item>
                </Container>
            </Menu>
        )
    }
}
