import React from 'react';
import './MainPart1.css';
import headphones from '../../assets/MainPart1/Mask group.png'; // Use your actual image path

function MainPart1() {
  return (
    <div className="mainpart1-container">
      <div className="mainpart1-left">
        <ul>
          <li className="active">Automobiles</li>
          <li>Clothes and wear</li>
          <li>Home interiors</li>
          <li>Computer and tech</li>
          <li>Tools, equipments</li>
          <li>Sports and outdoor</li>
          <li>Animal and pets</li>
          <li>Machinery tools</li>
          <li>More category</li>
        </ul>
      </div>
      <div className="mainpart1-center">
          <div className="mainpart1-banner-text">
            <span>Latest trending</span>
            <h2>Electronic items</h2>
            <button>Learn more</button>
          </div>
         
      </div>
      <div className="mainpart1-right">
        <div className="mainpart1-user-card">
          <div className="mainpart1-avatar" />
          <div>
            <div className="mainpart1-user-hi">Hi, user</div>
            <div className="mainpart1-user-desc">let’s get stated</div>
          </div>
          <button className="mainpart1-join-btn">Join now</button>
          <button className="mainpart1-login-btn">Log in</button>
        </div>
        <div className="mainpart1-offer orange">Get US $10 off with a new supplier</div>
        <div className="mainpart1-offer blue">Send quotes with supplier preferences</div>
      </div>
    </div>
  );
}

export default MainPart1;