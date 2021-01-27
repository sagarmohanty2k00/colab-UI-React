import React from 'react'
import './UpperNav.css'
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function UpperNav() {
    return (
        <div className="uppernav">
            <div className="search">
                <input type="text" placeholder="Type here"/>
                <SearchIcon style={{color:'black', margin: '0px'}}/>
            </div>
            <div className="filter">
                <h3>People</h3>
                <KeyboardArrowDownIcon />
            </div>
        </div>
    )
}

export default UpperNav
