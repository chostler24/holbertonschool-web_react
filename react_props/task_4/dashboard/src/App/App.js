import './App.css';
import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import Notifications from '../Notifications/Notifications.js';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';


const App = ({ isLoggedin = false }) => {
  if (isLoggedin === false) {
    return (
      <>
        <Notifications />
        <Header />
        <Login />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Notifications />
        <Header />
        <CourseList />
        <Footer />
      </>
    );
  }
}

export default App;
