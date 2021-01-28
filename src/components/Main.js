import React from 'react'
import './Main.css'
import Todo from './Todo'
import Progres from './Progress'
import Review from './Review'
import Done from './Done'

function Main() {
    return (
        <div className="main">
            <Todo />
            <Progres />
            <Review />
            <Done />
        </div>
    )
}

export default Main
