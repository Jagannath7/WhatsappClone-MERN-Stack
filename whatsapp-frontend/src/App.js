import { useEffect, useState } from 'react';
import './App.css';
import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';
import Pusher from 'pusher-js'
import pusher_config from './pusherConfig'
import axios from './axios';

function App() {

  const[messages, setMessages] = useState([])
  
  useEffect(() => {
    axios.get('/messages/sync').then((response) => {
      setMessages(response.data)
    })
  }, [])

  useEffect(() => {
    const pusher = new Pusher(pusher_config, {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted',  (newMessage) => {
      setMessages([...messages, newMessage])
    });
    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])



  

  return (
    <div className="App">
       <h2>Whatsapp clone</h2>
      <div className = "app_body">
     
      <Sidebar />
      <Chat messages = {messages} />
      </div>
    </div>
  );
}

export default App;
