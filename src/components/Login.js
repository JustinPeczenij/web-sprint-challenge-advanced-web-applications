import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const Login = () => {
  const { push } = useHistory();
  const [error, setError] = useState('')
  const [loginForm, setLoginForm] = useState({
    username: '',
    password:''
  })

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  
  const handleChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    axiosWithAuth().post('/api/login', loginForm)
      .then(res => {
        window.localStorage.setItem('token', res.data.payload)
        push('/bubbles-page')
      })
      .catch(err => setError(err.message))
  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={handleLogin}>
          <legend>Login</legend>
          <input 
            name='username'
            placeholder='Username'
            type='text'
            value={loginForm.username}
            onChange={handleChange}
            data-testid='username'
          />
          <input 
            name='password'
            placeholder='Password'
            type='password'
            value={loginForm.password}
            onChange={handleChange}
            data-testid='password'
          />
          <button type='submit'>Login</button>
        </form>
      </div>
      {
        error ? <p data-testid="errorMessage" className="error">{error}</p> : undefined
      }
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.