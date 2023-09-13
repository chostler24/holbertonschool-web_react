import logo from '../assets/logo.jpg';
import React from 'react';
import './Header.css';


const Header = () => (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="title">School dashboard</h1>
    </div>
  );

export default Header;
