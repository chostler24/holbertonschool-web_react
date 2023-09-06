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
        <form>
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email"></input>
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password"></input>
        </div>
        <button type="submit">OK</button>
    </form>
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
