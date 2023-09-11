import './App.css';


function Login() {
    return (
      <>
      <div className="App">
        <body className="App-body">
          <p>
            Login to access the full dashboard
          </p>
          <form>
            <label htmlFor="email">
              Email:
              <input type="email" id="email" name="email"></input>
            </label>
            <label htmlFor="password">
              Password:
              <input type="password" id="password" name="password"></input>
            </label>
            <button type="submit">OK</button>
          </form>
        </body>
      </div>
      </>
    );
}

export default Login;
