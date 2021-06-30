import React, { useState, useContext } from "react";
import { StoreContext } from "../../providers/store";
import "./index.css";
import { FlashContext } from '../../providers/Flash';
import  { useHistory } from 'react-router-dom'
import LoginSocialsBar from '../../components/loginSocialsBar'


const LoginForm = () => {
  const [state, actions] = useContext(StoreContext);
  const [logInDetails, setLogInDetails] = useState({
    email: "",
    password: "",
  });
  const {createFlashMessage} = useContext(FlashContext);
  const history = useHistory()

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLogInDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const status = await actions.signIn(logInDetails);
    if (status >= 400) {
      createFlashMessage({
        type: 'error',
        message: 'Invalid username or password.'
      })
    } else if (status >= 200) {
      createFlashMessage({
        type: 'success',
        message: 'Successfully logged in.' //`Successfully logged in. Welcome ${state.user.name}!` - would like but state not updating in time
      })
      history.push('/')
    }
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <h1>Sign in</h1>
      <LoginSocialsBar/>
      <span>or use your account</span>
      <input
        type='email'
        placeholder='Email'
        onChange={handleLoginChange}
        name='email'
        value={logInDetails.email}
      />
      <input
        type='password'
        placeholder='Password'
        name='password'
        onChange={handleLoginChange}
        value={logInDetails.password}
      />
      <a href='#'>Forgot your password?</a>
      <button>Sign In</button>
    </form>
  );
};

export default LoginForm;
