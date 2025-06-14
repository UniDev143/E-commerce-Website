import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/Header/logo-colored.png';

// Import flag images from assets/Header
import flagDE from '../../assets/Header/German.png';
import flagUS from '../../assets/Header/America.png';
import flagFR from '../../assets/Header/franceh.png';
import flagIN from '../../assets/Header/india.png';
import flagPK from '../../assets/Header/Pakistan.png';


function Header() {
  const [currency, setCurrency] = useState('USD');
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  const [country, setCountry] = useState({ code: 'DE', flag: flagDE, name: 'Germany' });
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);

  const [activeMenu, setActiveMenu] = useState('All category');

  const countries = [
    { code: 'DE', flag: flagDE, name: 'Germany' },
    { code: 'US', flag: flagUS, name: 'USA' },
    { code: 'FR', flag: flagFR, name: 'France' },
    { code: 'IN', flag: flagIN, name: 'India' },
    { code: 'PK', flag: flagPK, name: 'Pakistan' },
    
  ];

  const navItems = [
    { label: 'All category', icon: <span className="menu-icon">&#9776;</span> },
    { label: 'Hot offers' },
    { label: 'Gift boxes' },
    { label: 'Projects' },
    { label: 'Menu item' },
    { label: 'Help', icon: <span>&#9662;</span> },
  ];

  const handleCurrencyChange = (value) => {
    setCurrency(value);
    setCurrencyDropdownOpen(false);
  };

  const handleCountryChange = (country) => {
    setCountry(country);
    setCountryDropdownOpen(false);
  };

  // Example click handlers (replace with your own logic)
  const handleProfileClick = () => alert('Profile clicked!');
  const handleMessageClick = () => alert('Message clicked!');
  const handleOrdersClick = () => alert('Orders clicked!');
  const handleCartClick = () => alert('My cart clicked!');

  return (
    <header className="main-header">
      <div className="header-top">
        <div className="brand">
          <img src={logo} alt="Brand Logo" className="brand-logo" />
          
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <select className="category-select">
            <option value="all">All category</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
            <option value="toys">Toys</option>
          </select>
          <button>Search</button>
        </div>
        <div className="header-icons">
          <div className="icon-item" onClick={handleProfileClick}>
            <span className="icon user"></span>
            <span>Profile</span>
          </div>
          <div className="icon-item" onClick={handleMessageClick}>
            <span className="icon message"></span>
            <span>Message</span>
          </div>
          <div className="icon-item" onClick={handleOrdersClick}>
            <span className="icon heart"></span>
            <span>Orders</span>
          </div>
          <div className="icon-item" onClick={handleCartClick}>
            <span className="icon cart"></span>
            <span>My cart</span>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <nav className="nav-menu">
          {navItems.map((item, idx) => (
            <span
              key={item.label}
              className={`nav-link${activeMenu === item.label ? ' active' : ''}`}
              onClick={() => setActiveMenu(item.label)}
            >
              {item.icon} {item.label}
            </span>
          ))}
        </nav>
        <div className="header-options">
          <div
            className="currency-dropdown"
            onMouseEnter={() => setCurrencyDropdownOpen(true)}
            onMouseLeave={() => setCurrencyDropdownOpen(false)}
          >
            <span className="currency-selected">
              {currency} &#9662;
            </span>
            {currencyDropdownOpen && (
              <ul className="currency-list">
                <li onClick={() => handleCurrencyChange('USD')}>USD</li>
                <li onClick={() => handleCurrencyChange('EUR')}>Euro (EUR)</li>
                <li onClick={() => handleCurrencyChange('SAR')}>Riyal (SAR)</li>
                <li onClick={() => handleCurrencyChange('PKR')}>PKR</li>
                <li onClick={() => handleCurrencyChange('INR')}>INR</li>
              </ul>
            )}
          </div>
          <div
            className="country-dropdown"
            onMouseEnter={() => setCountryDropdownOpen(true)}
            onMouseLeave={() => setCountryDropdownOpen(false)}
          >
            <span className="country-selected">
              Ship to <img src={country.flag} alt={country.name} className="flag-img" /> &#9662;
            </span>
            {countryDropdownOpen && (
              <ul className="country-list">
                {countries.map((c) => (
                  <li key={c.code} onClick={() => handleCountryChange(c)}>
                    <img src={c.flag} alt={c.name} className="flag-img" />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;