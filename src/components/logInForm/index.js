import React, { useState } from 'react';
import './index.css';

const LoginForm = ({ handleSignUpClick }) => {
  const [logInDetails, setLogInDetails] = useState({
    email : "",
    password : ""
  })

  const handleChange = (event) => {
    const {name, value} = event.target
    setLogInDetails(prevState => ({
      ...prevState,
      [name] : value
    }))
  }

  const handleSubmitClick = (event) => {
    event.preventDefault()
    //authentication API call
  }

  

  return (
    <div className='loginForm login-form'>
      <h2 className='loginTitle'>Login</h2>
      <form onSubmit={handleSubmitClick}>
        <input type="email" 
              className="form-input"
              id="loginEmail" 
              name="email"
              placeholder="Email" 
              value={logInDetails.email} 
              onChange={handleChange}
              required />
        <br/>
        <input type='password'
              className="form-input"
              id = 'loginPassword'
              name='password'
              placeholder='Password'
              value={logInDetails.password}
              onChange={handleChange}
              required />
        <br/>
        <input type='submit' id='loginButton' value='Log In'/>
      </form>
      <p>
        Don't have an account? <a className='signUpLink' onClick={handleSignUpClick}>Sign Up!</a>
      </p>
    </div>
  )
}


export default LoginForm