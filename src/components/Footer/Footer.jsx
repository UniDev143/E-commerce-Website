 import React, { useState } from 'react';
import './Footer.css';
import logo from '../../assets/Header/logo-colored.png';
import appstore from '../../assets/Footer/market-button A.png';
import googleplay from '../../assets/Footer/market-button.png';
import twitter from '../../assets/Footer/twitter3.png';
import linkedin from '../../assets/Footer/linkedin3.png';
import instagram from '../../assets/Footer/instagram3.png';
import youtube from '../../assets/Footer/youtube3.png';

function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    // Add subscription logic here
  };

  return (
    <footer className="main-footer">
      <div className="newsletter-section">
        <h3>Subscribe on our newsletter</h3>
        <p>Get daily news on upcoming offers from many suppliers all over the world</p>
        <form className="newsletter-form" onSubmit={handleSubscribe}>
          <span className="email-icon">✉️</span>
          <input type="email" placeholder="Email" required disabled={subscribed} />
          <button type="submit" disabled={subscribed}>Subscribe</button>
        </form>
        {subscribed && <div className="subscribe-message">Thank you for subscribing!</div>}
      </div>
      <div className="footer-content">
        <div className="footer-brand">
          <div className="brand-row">
            <img src={logo} alt="Brand Logo" className="footer-logo" />
            
          </div>
          <p className="footer-desc">
            Best information about the company<br />gies here but now lorem ipsum is
          </p>
          <div className="footer-social">
            <a href="#"><img src={twitter} alt="Twitter" /></a>
            <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
            <a href="#"><img src={instagram} alt="Instagram" /></a>
            <a href="#"><img src={youtube} alt="YouTube" /></a>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h4>About</h4>
            <a href="#">About Us</a>
            <a href="#">Find store</a>
            <a href="#">Categories</a>
            <a href="#">Blogs</a>
          </div>
          <div>
            <h4>Partnership</h4>
            <a href="#">About Us</a>
            <a href="#">Find store</a>
            <a href="#">Categories</a>
            <a href="#">Blogs</a>
          </div>
          <div>
            <h4>Information</h4>
            <a href="#">Help Center</a>
            <a href="#">Money Refund</a>
            <a href="#">Shipping</a>
            <a href="#">Contact us</a>
          </div>
          <div>
            <h4>For users</h4>
            <a href="#">Login</a>
            <a href="#">Register</a>
            <a href="#">Settings</a>
            <a href="#">My Orders</a>
          </div>
        </div>
        <div className="footer-apps">
          <h4>Get app</h4>
          <a href="#"><img src={appstore} alt="App Store" className="app-badge" /></a>
          <a href="#"><img src={googleplay} alt="Google Play" className="app-badge" /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2023 Ecommerce.</span>
        <div className="footer-lang">
          <img src="https://flagcdn.com/w20/us.png" alt="English" />
          <span>English</span>
          <span className="arrow">▲</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;