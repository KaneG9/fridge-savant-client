import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';


const LoginSocialsBar = () => {

  return (
    <div className='social-container'>
      <a href='#' className='social'>
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href='#' className='social'>
        <FontAwesomeIcon icon={faGooglePlus} />
      </a>
      <a href='#' className='social'>
        <FontAwesomeIcon icon={faPinterest} />
      </a>
    </div>
  )
}

export default LoginSocialsBar