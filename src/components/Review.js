import React from 'react'
import './Review.css'
import Button from '@material-ui/core/Button'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Review() {
    return (
        <div className="todo">
            <h2 className="todo-header">REVIEW <small><small>1</small></small></h2>
            <div className="all-task">
                <div className="todo-box">
                    <p className="todo-description"> <b>REST API </b>- Data is in arest API which is to be fetched in JSON format. </p>
                    <div className="assign">
                        <Button style={{'background' : 'green', padding: '0', color : 'white', margin: '0 0 5px'}}>ACCEPT</Button>
                        <Button style={{'background' : 'rgba(255, 0, 0, 0.8)', padding: '0 4px', color : 'white', margin: '0 0 5px'}}> REJECT</Button>
                    </div>
                    <div className="assign">
                        <Button style={{'background' : 'gray', padding: '0', color : 'white', margin: '0 0 5px'}}>CODE</Button>
                        <AccountCircleIcon />
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Review
