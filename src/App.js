import './App.css';
import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';


function App() {
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
