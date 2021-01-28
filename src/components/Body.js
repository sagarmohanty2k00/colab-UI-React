import React from 'react'
import './Body.css'
import UpperNav from './UpperNav'
import Main from './Main'
import Button from '@material-ui/core/Button'

function Body() {
    return (
        <div className="body">
            <UpperNav />
            <div className="main-header">
                <p className="project-name">Streamer</p>
                <div>
                    <Button style={{'margin-right': '40px', color: 'white', background: 'purple', padding:'4px', 'margin-top': '20px'}}>Modules</Button>
                    <Button style={{'margin-right': '40px', color: 'white', background: 'green', padding:'4px', 'margin-top': '20px'}}>Release</Button>
                    <Button style={{'margin-right': '40px', color: 'white', background: 'red', padding:'4px', 'margin-top': '20px'}}>Logout</Button>
                </div>
            </div>
            <Main />
        </div>
    )
}

export default Body
