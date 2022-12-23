import { useState } from "react";
/**
 * react-bootstrap npm package
 */
import "bootstrap/dist/css/bootstrap.min.css";
/**
 * Css styles for login page
 */
import "./Login.module.css";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || !username.includes(".")) {
      setPasswordError(null);
      setUsernameError("Enter a valid input.");
      return;
    }
    if (password.trim().length < 8){
      setUsernameError(null);
      setPasswordError("Password is minimum of '8' characters.")
      return;
    }
    // console.log(username);
    // console.log(password);
    setUsername("");
    setPassword("");
    setUsernameError(null);
    setPasswordError(null);
    props.onSuccessfulLogin(true);
  };

  return (
    <>
    <form className="border shadow m-5 p-3" onSubmit={onSubmitHandler}>
      <div className="form-group p-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="form-control"
          placeholder="john@example.com"
          value={username}
          onChange={usernameHandler}
        />
        {usernameError && (
          <div style={{ color: 'red' }}>
            {usernameError}
          </div>
        )}
      </div>
      <div className="form-group p-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={passwordHandler}
          className="form-control"
          id="password"
        />
        {passwordError && (
          <div style={{ color: 'red' }}>
            {passwordError}
          </div>
        )}
      </div>
      <div className="form-group mt-3 p-3">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
    </>
  );
};

export default Login;
