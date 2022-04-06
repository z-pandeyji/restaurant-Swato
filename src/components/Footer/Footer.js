import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import './Footer.css';

const handleClick = () => {
    console.log("DONE SUBSCRIBE NEWS LETTER")
}
const Footer = () => (
  <div className="app__footer section__padding">
    <div className="app__footerOverlay">
      <div className="app__footerOverlay-black" />
      <div className="app__footerOverlay-img app__bg" />
    </div>
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <div style={{ marginBottom: '1rem' }}>
          <p className="p__opensans">Newsletter</p>
          <img src="images/spoon.svg" alt="spoon" className="spoon__img" />
        </div>
        <h1 className="headtext">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss latest updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder="Enter your email address" />
        <button type="button" onClick={handleClick} className="custom__button">
          Subscribe
        </button>
      </div>
    </div>

    <div className="app__footer-links" id="contact">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Uttar Pradesh Gorakhpur: INDIA</p>
        <p className="p__opensans">Phone : +91 8xxxxxxxx3</p>
      </div>

      <div className="app__footer-links_logo">
        <img src="images/logo.jpg" alt="footer_logo" />
        <p className="p__opensans">INDIA best Rating app for Restaurants.</p>
        <img
          src="images/spoon.svg"
          className="spoon__img"
          style={{ marginTop: 15 }}
          alt="spoon"
        />
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/">
            <FiFacebook />
          </a>
          <a href="https://www.instagram.com/z_pandey_ji/">
            <FiInstagram />
          </a>
          <a href="mailto:shivanshup1@gmail.com">
            <HiOutlineMail />
          </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Hours</h1>
        <p className="p__opensans">Tuesday - Friday : 11:30 AM - 9:00 PM</p>
        <p className="p__opensans">Saturday - Sunday : 12:00 PM - 9:00 PM</p>
        <p className="p__opensans">Monday : Closed</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">
        Copyright &copy; Swato App 2022. All rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
