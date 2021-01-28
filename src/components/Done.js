import React from 'react'
import './Done.css'
import Button from '@material-ui/core/Button'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Done() {
    return (
        <div className="todo">
            <h2 className="todo-header">DONE <small><small>1</small></small></h2>
            <div className="all-task">
                <div className="todo-box">
                    <p className="todo-description"><b>Login</b> - User will be loged in only if the email and password will match with the the details available in the database.</p>
                    <div className="assign">
                        <Button style={{'background' : 'gray', padding: '0 4px', color : 'white', margin: '0 0 5px'}}>CODE</Button>
                        <AccountCircleIcon />
                    </div>
                </div>

                <div className="todo-box">
                    <p className="todo-description"><b>Logout</b> - User will be logged out when he/she clicks the logout button.</p>
                    <div className="assign">
                        <Button style={{'background' : 'gray', padding: '0 4px', color : 'white', margin: '0 0 5px'}}>CODE</Button>
                        <AccountCircleIcon />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Done
