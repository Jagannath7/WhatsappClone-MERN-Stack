import React, { useState } from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFile from '@material-ui/icons/AttachFileOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from '../../axios';

function Chat({ messages }) {

    
    const[input, setInput] = useState("")

    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post("/messages/new", {
            message: input,
            name: "app",
            timestamp: "now",
            received: false
        })

        setInput("")
    }

    return (
        <div className='chat'>
            <div className='header'>
                <Avatar />
                <div className='header_info'>
                    <h3>Name</h3>
                    <p>Last Seen</p>
                </div>
                <div className='header_right'>
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                {messages.map((message) => (
                    <p className={`chat_message ${!message.received && "chat_receiver"}`}>
                        <span className="chat_name">{ message.name}</span>
                {message.message}
                <span className="chat_timestamp">{message.timestamp}
                </span>
                </p>
                ))}
            </div>
            <div className="chat_footer">
                <InsertEmoticonIcon />
                <form>
                    <input
                        value={input}
                        onChange = {(e) => setInput(e.target.value)}
                        placeholder='Type a message'
                        type='text' />
                    <button
                        onClick = {sendMessage}
                        type='submit'>
                        Send a message
                        </button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
