import React, { useContext } from 'react';
import './index.css';
import logo from './images/logo.png';
import { Link } from "react-router-dom";
import {clearStoreToken} from  '../../lib/token'
import { FlashContext } from '../../providers/Flash';

const Header = () => {

  const {createFlashMessage} = useContext(FlashContext);

  const handleLogOut = () => {
    clearStoreToken()
    createFlashMessage({
      type: 'success',
      message: 'Successfully Logged Out.'
    })
  }
  
  return (
    <div>
      <header className='header-outer'>
        <div className='header-inner responsive-wrapper'>
          <div className='header-logo'>
            <img src={logo} />
          </div>
          <nav className='header-navigation' data-testid='navbar'>
            <Link to="/">
              <span>Home</span>
            </Link>
            <Link to="">
              <span>About</span>
            </Link>
            <Link to='/bookmarks'>
              <span>My Recipes</span>
            </Link>
            <Link to="/login">
              <span onClick={() => handleLogOut()}>Log Out</span>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
