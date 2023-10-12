import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

// Import components
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import AppContext from './AppContext';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';
import { loginRequest } from '../actions/uiActionCreators';

// Create an array of course information
const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

// Define the main App component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false, // Control whether the notification drawer is displayed
      user: {
        email: '',
        password: '',
        isLoggedIn: false, // Keep track of the user's login state
      },
      logIn: this.logIn, // Function to log in the user
      logOut: this.logOut, // Function to log out the user
      listNotifications: [ // Array to store notification data
        { id: 1, type: 'default', value: 'New course available', html: undefined },
        { id: 2, type: 'urgent', value: 'New resume available', html: undefined },
        { id: 3, type: 'urgent', value: undefined, html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' }},
      ]
    };
    // this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    // this.handleHideDrawer = this.handleHideDrawer.bind(this);
    // this.logIn = this.logIn.bind(this);
    // this.logOut = this.logOut.bind(this);
  };

  // Lifecycle method: Called after the component is mounted
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  };

  // Lifecycle method: Called before the component is unmounted
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  };

  // Event handler for keydown events
  handleKeyDown = (event) => {
    console.log('A key was pressed', event.key);
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.logOut(); // Call the logOut function when Ctrl + h is pressed
    }
  };

  // Event handler to display the notification drawer
  // handleDisplayDrawer = () => {
  //   this.setState({ displayDrawer: true });
  // };

  // Event handler to hide the notification drawer
  // handleHideDrawer = () => {
  //   this.setState({ displayDrawer: false });
  // };

  // Function to log in the user
  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  };

  // Function to log out the user
  logOut = () => {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
    });
  };

  // Function to mark a notification as read
  // markNotificationAsRead = (id) => {
  //   this.setState({
  //     listNotifications: this.state.listNotifications.filter((notification) => notification.id !== id),
  //   });
  // };

  mapDispatchToProps = () => {
    return {
    displayNotificationDrawer,
    hideNotificationDrawer,
    login: loginRequest, // Map login to the loginRequest action creator
    };
  };

  mapDispatchToProps = () => {
    return {
    displayNotificationDrawer,
    hideNotificationDrawer,
    };
  };

  // Render method to display the main App component
  render() {
    const { displayDrawer, user, logIn, logOut, listNotifications } = this.state;
    const {
      displayNotificationDrawer, // Use the function from props
      hideNotificationDrawer,    // Use the function from props
    } = this.props;

    return (
      <AppContext.Provider value={{ user, logOut }}>
        <>
          <div className={`App-header ${css(styles.header)}`}>
            {/* Render the Notifications component */}
            <Notifications
              listNotifications={listNotifications}
              displayDrawer={displayDrawer}
              handleDisplayDrawer={this.handleDisplayDrawer}
              handleHideDrawer={this.handleHideDrawer}
              markAsRead={this.markNotificationAsRead}
              displayNotificationDrawer={displayNotificationDrawer} // Pass the function from props
              hideNotificationDrawer={hideNotificationDrawer}       // Pass the function from props
            />
            {/* Render the Header component */}
            <Header />
          </div>
          <div className={`App-body ${css(styles.body)}`}>
            {/* Conditionally render the CourseList or Login component based on user's login state */}
            {this.props.isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login logIn={logIn} />}
            <BodySection title='News from the School'>
            </BodySection>
          </div>
          {/* Render the Footer component */}
          <Footer className={`App-footer ${css(styles.footer)}`} />
        </>
      </AppContext.Provider>
    );
  };
};

// Define PropTypes for App component
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

// Default props for App component
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
