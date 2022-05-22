import React from 'react';
import "./Footer.css"
const Footer = () => {
    const year=new Date().getFullYear();
    return (
        <footer>
        <div class="wrapper">
          <small>&copy; 2021 - {year} , <strong>FYNTUNE-SHOPS</strong>, All Rights Reserved</small>
          <div class="footer-nav">
            <a href="https://www.linkedin.com/in/md-imranul-haque/" target="_blank" rel="noreferrer">Back to Top</a>
            <a href="https://www.linkedin.com/in/md-imranul-haque/" target="_blank" rel="noreferrer">Terms of Use</a>
            <a href="https://www.linkedin.com/in/md-imranul-haque/" target="_blank" rel="noreferrer">Privacy</a>
          </div>
        </div>
      </footer>
    );
};

export default Footer;