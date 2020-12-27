import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutLined from '@material-ui/icons/Search'
import { Avatar, IconButton } from '@material-ui/core'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='header'>
                <Avatar />
                <div className='header_right'>
                <IconButton >
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
                </div>

            </div>
            <div className="search">
                <div className="search_container">
                    <SearchOutLined />
                    <input type='text' placeholder = 'Search or start a new chat'/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
