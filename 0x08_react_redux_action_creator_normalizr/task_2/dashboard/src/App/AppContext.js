import React from 'react';

// Define a default user object with initial values
const defaultUser = {
  email: '',        // User's email
  password: '',     // User's password
  isLoggedIn: false, // User's login status
};

// Define a default logout function with an empty implementation
const defaultLogout = () => {};

// Create an AppContext using React's createContext function
const AppContext = React.createContext({
  user: defaultUser,   // Default user value
  logOut: defaultLogout, // Default logout function
});

export default AppContext; // Export the AppContext to make it available for components
