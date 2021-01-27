import React from 'react'
import './Sidebar.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_user">
                <div className="user">
                    <AccountCircleIcon className="user_icon" fontSize="large"
                    style={{zoom: 2.5}}/>
                    <h4>Sagar Mohanty</h4>
                </div>
                
                <AddIcon className="add_icon" fontSize="large" style={{zoom: 1.5}}/>
            </div>
            <div className="sidebar_project_details">
                <div className="bar"></div>
                <div className="project_selector ">
                    <h3>
                        Streamer
                    </h3>
                    <NavigateNextIcon />
                </div>
                <div className="bar"></div>
                <a href="" className="sidebar_listitem">
                    Repositories
                </a>
                <div className="bar"></div>
                <a href="" className="sidebar_listitem">
                    Cards
                </a>
                <div className="bar"></div>
                <a href="" className="sidebar_listitem">
                    Documents
                </a>
                <div className="bar"></div>
                <a href="" className="sidebar_listitem">
                    Members
                </a>
                <div className="bar"></div>
                <a href="" className="sidebar_listitem">
                    My Tasks
                </a>
                <div className="bar"></div>
                <a href="" className="sidebar_listitem">
                    Chat
                </a>
                <div className="bar"></div>
                <a href="" className="sidebar_listitem">
                    Progress
                </a>
                <div className="bar"></div>
            </div>
        </div>
    )
}


export default Sidebar
