import './Login.css';
import React from 'react';

const Login = () => (
  <>
    <div className="Login">
      <p>Login to access the full dashboard</p>
      <form>
        <label htmlFor='email' >Email</label>
        <input type='email' name='email' id='email' autoComplete='email'></input>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' autoComplete='true'></input>
        <button>OK</button>
      </form>
    </div>
  </>
);

export default Login;
