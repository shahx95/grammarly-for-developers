import './App.css';
import { Inbox } from './components/Inbox';
import { ChatList } from './components/ChatList';
import { CustomerInfo } from './components/CustomerInfo';

function App() {
  return (
    <div className="App">
      <Inbox />
      <ChatList />
      <CustomerInfo />
    </div>
  );
}

export default App;
