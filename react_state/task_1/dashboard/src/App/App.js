import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

// Importing components
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';

// Data: Arrays to store notifications and courses
const listNotifications = [
  { id: 1, type: 'default', value: 'New course available', html: undefined },
  { id: 2, type: 'urgent', value: 'New resume available', html: undefined },
  { id: 3, type: 'urgent', value: undefined, html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' }},
];

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

// Define the main application component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false, // Initial state for displaying the drawer
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  // Lifecycle method: Add event listener when component is mounted
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  // Lifecycle method: Remove event listener when component is unmounted
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  // Event handler for keydown event
  handleKeyDown = (event) => {
    console.log('A key was pressed', event.key);
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut(); // Call a function to log the user out
    }
  };

  // Event handler to display the drawer
  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  };

  // Event handler to hide the drawer
  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  };

  render() {
    const { isLoggedIn, logOut } = this.props;
    const { displayDrawer } = this.state;
    return (
      <>
        {/* Header section */}
        <div className={`App-header ${css(styles.header)}`}>
          {/* Notifications component */}
          <Notifications
            listNotifications={listNotifications}
            displayDrawer={displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
          />
          <Header />
        </div>
        {/* Main body section */}
        <div className={`App-body ${css(styles.body)}`}>
          {/* Conditional rendering based on user login status */}
          {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          {/* A body section with news */}
          <BodySection title='News from the School'>
          </BodySection>
        </div>
        {/* Footer section */}
        <Footer className={`App-footer ${css(styles.footer)}`} />
      </>
    );
  }
}

// Define prop types for App component
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

// Default prop values for App component
App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

// Define CSS styles using Aphrodite
const styles = StyleSheet.create({
  footer: {
    borderTop: '1.5px solid rgb(224,53,75)',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  body: {
    minHeight: '30vw',
  },
  header: {
    borderBottom: '1.5px solid rgb(225, 53, 75)',
  },
});

export default App; // Export the App component
