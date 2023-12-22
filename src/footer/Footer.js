import React from 'react';
import './Footer.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CloseIcon from '@mui/icons-material/Close';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Hostels</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#facilities">Facilities</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="contact-info">
            <h4>Contact Information</h4>
            <p>Email: 2023@accofinder.com</p>
            <p>Phone: +265(0)884012843</p>
          </div>
          <div className="footer-social">
            <p>Follow us:</p>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <AlternateEmailIcon/>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FacebookOutlinedIcon/>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
            <p>&copy; 2023 accommodation finder.com All rights reserved</p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
