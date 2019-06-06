import React, { Component } from 'react'
import { withRouter } from "react-router"
import Navbar from './components/navbar/Navbar'
import ApplicationViews from './components/ApplicationViews'




class SprintCarSetup extends Component {


    render() {
        return (
            <>
                <Navbar />
                <ApplicationViews />
            </>
        )
    }
}

export default withRouter(SprintCarSetup)
