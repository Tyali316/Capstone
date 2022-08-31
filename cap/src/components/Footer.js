import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import '../styles/Footer.css';


function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <InstagramIcon />
        </a>
        <a href="https://twitter.com/Plan_it_h_o_p_e" target="_blank" rel="noreferrer">
          <TwitterIcon />
        </a>
        <a href="https://www.facebook.com/login/" target="_blank" rel="noreferrer">
          <FacebookIcon />
        </a>
        <a href="https://www.linkedin.com/in/tyali-warren" target="_blank" rel="noreferrer">
          <LinkedInIcon />
        </a>
      </div>
        <p> &copy; 2022 Road to Hire Coding Apprentice</p>
    </div>
  );
}

export default Footer;