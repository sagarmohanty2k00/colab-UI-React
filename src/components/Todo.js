import React from 'react'
import './Todo.css'
import Button from '@material-ui/core/Button'

function Todo() {
    return (
        <div className="todo">
            <h2 className="todo-header">TODO <small><small>5</small></small></h2>
            <div className="all-task">
                <div className="todo-box">
                    <p className="todo-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, eos?</p>
                    <div className="assign">
                        <Button style={{'background' : 'rgba(255, 0, 0, 0.8)', padding: '0 4px', color : 'white', margin: '0 0 5px'}}>ASSIGN SOMEONE</Button>
                    </div>
                    <div className="assign">
                        <Button style={{'background' : 'rgba(0, 0, 255, 0.8)', padding: '0 4px', color : 'white', margin: '0 0 5px'}}>DO YOURSELF</Button>
                    </div>
                </div>

                <div className="todo-box">
                    <p className="todo-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, eos?</p>
                    <div className="assign">
                        <Button style={{'background' : 'rgba(255, 0, 0, 0.8)', padding: '0', color : 'white', margin: '0 0 5px'}}>ASSIGN</Button>
                        <Button style={{'background' : 'rgba(0, 0, 255, 0.8)', padding: '0 4px', color : 'white', margin: '0 0 5px'}}>TAKE</Button>
                    </div>
                </div>

                <div className="todo-box">
                    <p className="todo-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, eos?</p>
                    <div className="assign">
                        <Button style={{'background' : 'rgba(255, 0, 0, 0.8)', padding: '0', color : 'white', margin: '0 0 5px'}}>ASSIGN</Button>
                        <Button style={{'background' : 'rgba(0, 0, 255, 0.8)', padding: '0 4px', color : 'white', margin: '0 0 5px'}}>TAKE</Button>
                    </div>
                </div>

                <div className="todo-box">
                    <p className="todo-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, eos?</p>
                    <div className="assign">
                        <Button style={{'background' : 'rgba(255, 0, 0, 0.8)', padding: '0', color : 'white', margin: '0 0 5px'}}>ASSIGN</Button>
                        <Button style={{'background' : 'rgba(0, 0, 255, 0.8)', padding: '0 4px', color : 'white', margin: '0 0 5px'}}>TAKE</Button>
                    </div>
                </div>

                <div className="todo-box">
                    <p className="todo-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, eos?</p>
                    <div className="assign">
                        <Button style={{'background' : 'rgba(255, 0, 0, 0.8)', padding: '0', color : 'white', margin: '0 0 5px'}}>ASSIGN</Button>
                        <Button style={{'background' : 'rgba(0, 0, 255, 0.8)', padding: '0 4px', color : 'white', margin: '0 0 5px'}}>TAKE</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo
