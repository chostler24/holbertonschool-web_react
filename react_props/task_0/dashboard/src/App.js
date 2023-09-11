import Notifications from './Notifications.js';
import Login from './Login.js';
import Footer from './Footer.js';
import Header from './Header.js';
import './App.css';

function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    </>
  );
}

export default App;
