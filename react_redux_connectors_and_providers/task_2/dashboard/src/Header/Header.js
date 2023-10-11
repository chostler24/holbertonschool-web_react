import logo from '../assets/logo.jpg';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';
import { logout } from '../actions';

// Define the Header component as a class component
class Header extends React.Component {
  // Render method to display the component
  render() {
    // Access user and logOut function from the context
    const { user, logOut } = this.context;

    return (
      <div className={`App-header ${css(styles.appHeader)}`}>
      {/* Display the logo */}
      <img src={logo} className={`App-logo ${css(styles.appLogo)}`} alt="logo" />

      {/* Display the title */}
      <h1 className={`title ${css(styles.title)}`}>School dashboard</h1>

      {/* Conditionally display a logout section if the user is logged in */}
      {user.isLoggedIn && (
        <div id="logoutSection">
          Welcome {user.email} (<a href="#" onClick={logout}>logout</a>)
        </div>
      )}
    </div>
    );
  };
};

// Specify that Header should use the AppContext for context data
Header.contextType = AppContext;

// Define CSS styles using Aphrodite
const styles = StyleSheet.create({
  appLogo: {
    height: '40vmin',       // Set the height of the logo
    pointerEvents: 'none',  // Disable pointer events on the logo
  },

  appHeader: {
    fontSize: 'calc(10px + 2vmin)',  // Set the font size using a calculated value
    display: 'flex',                 // Display the header as a flex container
    alignItems: 'center',            // Align items vertically in the center
    marginBottom: '5%',              // Add some bottom margin
  },

  title: {
    color: 'rgb(224,53,75)',  // Set the title text color
  },
})

export default Header; // Export the Header component
