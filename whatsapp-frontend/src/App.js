import { useEffect } from 'react';
import './App.css';
import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';
import Pusher from 'pusher-js'
import pusher_config from './pusherConfig'

function App() {

  useEffect(() => {
    const pusher = new Pusher(pusher_config, {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted',  (data) => {
    
      alert(JSON.stringify(data));
    });
  }, [])

  return (
    <div className="App">
       <h2>Whatsapp clone</h2>
      <div className = "app_body">
     
      <Sidebar />
      <Chat />
      </div>
    </div>
  );
}

export default App;
