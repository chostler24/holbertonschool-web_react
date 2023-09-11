import './App.css';
import { getFooterCopy, getFullYear } from './utils.js';


function Footer() {
    return (
      <div className="App">
        <footer className="App-footer">
          <p>
          Copyright {getFullYear()} - {getFooterCopy(0)}
          </p>
        </footer>
      </div>
    );
}

export default Footer;