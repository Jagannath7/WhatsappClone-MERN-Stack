import React from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFile from '@material-ui/icons/AttachFileOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
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
            <div className = "chat_body">
                <p className = "chat_message">
                    <span className="chat_name">Name</span>
                    Message
                    <span className="chat_timestamp">{new Date().toUTCString()}
                    </span>
                </p>
                <p className = "chat_message chat_receiver">
                    <span className="chat_name">Name</span>
                    Message
                    <span className="chat_timestamp">{new Date().toUTCString()}
                    </span>
                </p>
                <p className = "chat_message">
                    <span className="chat_name">Name</span>
                    Message
                    <span className="chat_timestamp">{new Date().toUTCString()}
                    </span>
                </p>
                <p className = "chat_message">
                    <span className="chat_name">Name</span>
                    Message
                    <span className="chat_timestamp">{new Date().toUTCString()}
                    </span>
                </p>
                <p className = "chat_message">
                    <span className="chat_name">Name</span>
                    Message
                    <span className="chat_timestamp">{new Date().toUTCString()}
                    </span>
                </p>
                <p className = "chat_message">
                    <span className="chat_name">Name</span>
                    Message
                    <span className="chat_timestamp">{new Date().toUTCString()}
                    </span>
                </p>
                <p className = "chat_message">
                    <span className="chat_name">Name</span>
                    Message
                    <span className="chat_timestamp">{new Date().toUTCString()}
                    </span>
                </p>
                <p className = "chat_message chat_receiver">
                    <span className="chat_name">Name</span>
                    Message
                    <span className="chat_timestamp">{new Date().toUTCString()}
                    </span>
                </p>
                <p className = "chat_message">
                    <span className="chat_name">Name</span>
                    Message
                    <span className="chat_timestamp">{new Date().toUTCString()}
                    </span>
                </p>
            </div>
            <div className="chat_footer">
                <InsertEmoticonIcon />
                <form>
                    <input
                        placeholder='Type a message'
                        type='text' />
                    <button
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
