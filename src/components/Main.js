import React from 'react'
import './Main.css'
import Todo from './Todo'
import Progres from './Progress'
import Review from './Review'
import Done from './Done'

function Main() {
    return (
        <div>
            <h1>This is Main Area</h1>
            <Todo />
            <Progres />
            <Review />
            <Done />
        </div>
    )
}

export default Main
