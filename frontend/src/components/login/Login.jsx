import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../redux/authActions";
import './Login.css';

function Login({ setValues, values, error }) {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setValues({ ...values, email });
    if (!validateEmail(email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    setValues({ ...values, password });
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let isValid = true;

    if (!values.email) {
      setEmailError("*Email is required*");
      isValid = false;
    } else if (!validateEmail(values.email)) {
      setEmailError("*Invalid email format*");
      isValid = false;
    }

    if (!values.password) {
      setPasswordError("*Password is required*");
      isValid = false;
    } else if (values.password.length < 6) {
      setPasswordError("*Password must be at least 6 characters long*");
      isValid = false;
    }

    if (isValid) {
      dispatch(loginSuccess(values));
      navigate("/");
    }
  };

  return (
    <div id="login-box">
      <form onSubmit={handleFormSubmit}>
        <h2 id="loginTitle">Login</h2>
        {error && (
          <div id="error" className="bg-red-100 border mb-4 border-red-400 text-red-700 px-4 py-3 rounded ">
            <strong id="errorTitle">Error: </strong>
            <span>{error}</span>
          </div>
        )}
        <div id="user-box" className="user-box">
          <input
            type="text"
            id="email"
            onChange={handleEmailChange}
            value={values.email}
          />
          <label>Email</label>
          {emailError && <div className="error">{emailError}</div>}
        </div>
        <div id="user-box" className="user-box">
          <input
            type="password"
            id="password"
            onChange={handlePasswordChange}
            value={values.password}
          />
          <label>Password</label>
          {passwordError && <div className="error">{passwordError}</div>}
        </div>
        <button type="submit" id="loginBtn">Login</button>
        <p>Don't have an account?</p>
        <a href="/signup">Sign up here</a>
      </form>
    </div>
  );
}

export default Login;
