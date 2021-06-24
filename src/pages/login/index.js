import React, { useState } from 'react';
import './index.css';
import SignUpForm from '../../components/signUpForm'
import LogInForm from '../../components/loginForm'

const Login = () => {

  const [isRotated, setIsRotated] = useState(false);

  const handleCardFlip = () => {
    setIsRotated((rotated) => !rotated)
  }

  return (
    <div className='form-body'>
      <div className={`form-main-container ${isRotated ? 'right-panel-active' : ''}`} id='form-main-container'>
        <div className='login-form-container sign-up-container'>
          <SignUpForm handleCardFlip={handleCardFlip}/>
        </div>
        <div className='login-form-container sign-in-container'>
          <LogInForm />
        </div>
        <div className='overlay-container'>
          <div className='overlay'>
            <div className='overlay-panel overlay-left'>
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className='ghost' id='signIn' onClick={handleCardFlip}>
                Sign In
              </button>
            </div>
            <div className='overlay-panel overlay-right'>
              <h1>Hello, Chef!</h1>
              <p>Enter your personal details and find the perfect recipes</p>
              <button className='ghost' id='signUp' onClick={handleCardFlip}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
