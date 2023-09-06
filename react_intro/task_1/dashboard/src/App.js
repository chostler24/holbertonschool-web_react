import logo from './holberton_logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          School dashboard
        </p>
      </header>
      <body className="App-body">
        <p>
          Login to access the full dashboard
        </p>
      </body>
      <footer className="App-footer">
        <p>
        Copyright {getFullYear()} - {getFooterCopy(0)}
        </p>
      </footer>
    </div>
  );
}

export default App;
