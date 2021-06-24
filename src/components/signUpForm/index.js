import React, { useState, useContext } from 'react';
import { FlashContext } from '../../providers/Flash';
import './index.css';
import axios from 'axios'
import LoginSocialsBar from '../../components/loginSocialsBar'

const SignUpForm = ({ handleCardFlip }) => {
  const initialState = {
    email : "",
    name : "",
    username : "",
    password : "",
    confirmPassword : ""
  }
  
  const [signUpDetails, setSignUpDetails] = useState(initialState)
  
  const {createFlashMessage} = useContext(FlashContext);

  const handleSignUpChange = (event) => {
    const {name, value} = event.target
    setSignUpDetails(prevState => ({
      ...prevState,
      [name] : value
    }))
  }
  
  const handleSignUpSubmit = (event) => {
    event.preventDefault()
    if(signUpDetails.password === signUpDetails.confirmPassword) {
      sendDetailsToServer()
      setSignUpDetails(initialState)
      handleCardFlip()
    } else {
      createFlashMessage({
        type: "error",
        message: "Error: Passwords do not match",
      })
    }
  }

  const sendDetailsToServer = async () => {
    if(signUpDetails.email.length && signUpDetails.password.length) {
      // and error is null || success message present 
      const userDetails={
        "email":signUpDetails.email,
        "name":signUpDetails.name,
        "username":signUpDetails.username,
        "password":signUpDetails.password
      }

      try {
        const response = await axios.post(
          "http://localhost:5000/api/users/signup",
          JSON.stringify(userDetails),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        createFlashMessage({
          type: "success",
          message: `Account created. Welcome ${response.data.name}!`,
        })
      } catch (e) {
        createFlashMessage({ type: "error", message: `Error: ${e.response.data.errors[0].msg}`})
      }
    }
  }  

  return (
    <form onSubmit={handleSignUpSubmit}>
      <h1>Create Account</h1>
      <LoginSocialsBar/>
      <span>or use your email for registration</span>
      <input
        type='text'
        placeholder='Name'
        name='name'
        onChange={handleSignUpChange}
        value={signUpDetails.name}
      />
      <input
        type='email'
        name='email'
        placeholder='Email'
        onChange={handleSignUpChange}
        value={signUpDetails.email}
      />
      <input
        type='password'
        name='password'
        placeholder='Password'
        value={signUpDetails.password}
        onChange={handleSignUpChange}
      />
      <input
        type='password'
        name='confirmPassword'
        placeholder='Confirm Password'
        value={signUpDetails.confirmPassword}
        onChange={handleSignUpChange}
      />
      <button type='submit'>Sign Up</button>
    </form>  )
}


export default SignUpForm