import React from 'react';
import './footer.css';
import { Button } from '../pages/button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { MdLightbulb } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-subscription'>
        <p className='footer-subscription-heading'>
        THE PERFECT SOLUTION FOR YOU.
        </p>
        <p className='footer-subscription-text'>
        Let us know what you want and we’ll do our best to help. 
        </p>
        <div className='input-areas'>
            <Button buttonStyle='btn--outline'>Contact Us</Button>
        </div>
      </div>
{/*
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <Link to='/'>Privacy</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
        </div>
      </div>
*/}
      <div className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdLightbulb className='footer-icon' />
              Gerald and Rose
            </Link>
          </div>
          <small className='website-rights'>© Gerald and Rose 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '/'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Footer;