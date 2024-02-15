import React, { useState } from 'react';
import './Login.css';

import Home from '../Home/Home';


function Login() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessages, setErrorMessages] = useState({});

    const database = [
        {
          username: "peter.parker",
          password: "webslingers"
        },
        {
          username: "j.jonah.jameson",
          password: "dailybugle"
        }
    ];

    const errors = {
        creds: "Invalid username or password."
    };

    const handleSubmit = (event) => {

        event.preventDefault();

        var { uname, pass } = document.forms[0];
    
        // Find user login info
        const userData = database.find((user) => user.username === uname.value);
    
        // Compare user info
        if (userData) {
          if (userData.password !== pass.value) {
            // Invalid password
            setErrorMessages({ name: "creds", message: errors.creds });
          } else {
            setIsSubmitted(true);
          }
        } else {
          // Username not found
          setErrorMessages({ name: "creds", message: errors.creds });
        }
    };
    
    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
    );

    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
            <h1>SHIELD</h1>
            <div className="input-container">
                <label>Username </label>
                <input type="text" name="uname" placeholder='Username' required />
            </div>
            <div className="input-container">
                <label>Password </label>
                <input type="password" name="pass" placeholder='********' required />
            </div>
            <div className="button-container">
                <input type="submit" />
            </div>
            {renderErrorMessage("creds")}
            </form>
        </div>
    );

    return (
        <div className="Login-header">
        <div className="login-form">
          {isSubmitted ? Home() : renderForm}
        </div>
      </div>
    );
  }
  
  export default Login;