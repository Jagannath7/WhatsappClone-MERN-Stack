import React from 'react'
import './SidebarChats.css'
import {Avatar} from '@material-ui/core'

function SidebarChats() {
    return (
        <div className="sidebar_chats">
            <Avatar />
            <div className="sidebar_chat_info">
                <h2>Name</h2>
                <p>Last Message</p>
            </div>
        </div>
    )
}

export default SidebarChats
