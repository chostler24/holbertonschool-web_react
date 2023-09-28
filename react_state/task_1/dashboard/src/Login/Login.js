import React, { useState } from 'react';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';

// Define the Login component
const Login = () => {
  // Define state variables for login status, email, password, and submit button enablement
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  // Event handler for login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  // Event handler for email input change
  const handleChangeEmail = (email) => {
    setEmail(email);
    setEnableSubmit(email !== '' && password !== '');
  };

  // Event handler for password input change
  const handleChangePassword = (password) => {
    setPassword(password);
    setEnableSubmit(email !== '' && password !== '');
  };

  // Render the Login component
  return (
    <>
      {/* Render a section with a title */}
      <BodySectionWithMarginBottom title='Log in to continue'>
        <div className={`Login ${css(styles.login)}`}>
          <p>Login to access the full dashboard</p>
          {/* Create a login form */}
          <form className={css(styles.form)} onSubmit={handleLoginSubmit}>
            <div className={css(styles.labelInput)}>
              <label htmlFor='email' >Email</label>
              {/* Email input field */}
              <input
                type='email'
                name='email'
                id='email'
                autoComplete='true'
                value={email}
                onChange={(e) => { handleChangeEmail(e.target.value) }}
              />
            </div>
            <div className={css(styles.labelInput)}>
              <label htmlFor='password'>Password</label>
              {/* Password input field */}
              <input
                type='password'
                name='password'
                id='password'
                autoComplete='true'
                value={password}
                onChange={(e) => { handleChangePassword(e.target.value) }}
              />
            </div>
            {/* Submit button */}
            <input
              type='submit'
              className={css(styles.button)}
              value='OK'
              disabled={!enableSubmit} // Disable if email or password is empty
            />
          </form>
        </div>
      </BodySectionWithMarginBottom>
    </>
  );
};

// Define CSS styles using Aphrodite
const styles = StyleSheet.create({
  login: {
    margin: '30px 30px auto', // Define margin styles
  },
  form: {
    display: 'flex', // Display the form as a flex container
    '@media screen and (max-width: 900px)': {
      flexDirection: 'column', // Change the flex direction to column on screens with a max width of 900px
    },
  },
  button: {
    maxWidth: 40, // Set a maximum width for the button
  },
  labelInput: {
    display: 'flex', // Display label and input as flex items in a row
    flexDirection: 'row', // Arrange label and input elements in a row
  },
});

export default Login; // Export the Login component
