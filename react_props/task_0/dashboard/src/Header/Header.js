import logo from './holberton_logo.jpg';
import './App.css';

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          School dashboard
        </p>
      </header>
    </div>
  );
}

export default Header;
