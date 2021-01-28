import React from 'react'
import './Progress.css'
import Button from '@material-ui/core/Button'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Progress() {
    return (
        <div className="todo">
            <h2 className="todo-header">IN PROGRESS <small><small>1</small></small></h2>
            <div className="all-task">
                <div className="todo-box">
                    <p className="todo-description"><b>e-mail Verification</b> - User will verify their e-mail by clicking on the link.</p>
                    <div className="assign">
                        <Button style={{'background' : 'rgba(255, 0, 0, 0.8)', padding: '0', color : 'white', margin: '0 0 5px'}}>REJECT</Button>
                        <Button style={{'background' : 'blue', padding: '0', color : 'white', margin: '0 0 5px'}}>ACCEPT</Button>
                    </div>
                    <div className="assign">
                        <Button style={{'background' : 'gray', padding: '0 4px', color : 'white', margin: '0 0 5px'}}>Upload CODE</Button>
                        <Button style={{'background' : 'green', padding: '0 4px', color : 'white', margin: '0 0 5px'}}>DONE</Button>
                    </div>
                </div>

                <div className="todo-box">
                    <p className="todo-description"><b>phone Verification</b> - User will verify their phone number by entering the OTP.</p>
                    <div className="assign">
                        <AccountCircleIcon />
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Progress
