import React, { useEffect, useState, useRef } from 'react';
import './MainPart2.css';

// Import images from assets/MainPart2
import watch from '../../assets/MainPart2/Watch.png';
import laptop from '../../assets/MainPart2/Laptop.png';
import gopro from '../../assets/MainPart2/Camera.png';
import headphones from '../../assets/MainPart2/Headphones.png';
import canon from '../../assets/MainPart2/Mobile.png';

// Helper function
function getTimeLeft(targetDate) {
  const now = new Date();
  const diff = Math.max(0, targetDate - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

function MainPart2() {
  // Set your target date/time here (e.g., 4 days, 13 hours, 34 min, 56 sec from now)
  const targetRef = useRef(null);
  if (!targetRef.current) {
    const target = new Date();
    target.setDate(target.getDate() + 4);
    target.setHours(target.getHours() + 13);
    target.setMinutes(target.getMinutes() + 34);
    target.setSeconds(target.getSeconds() + 56);
    targetRef.current = target;
  }

  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetRef.current));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetRef.current));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mainpart2-container">
      <div className="mainpart2-left">
        <div className="mainpart2-title">Deals and offers</div>
        <div className="mainpart2-subtitle">Hygiene equipments</div>
        <div className="mainpart2-timer">
          <div><span>{String(timeLeft.days).padStart(2, '0')}</span><small>Days</small></div>
          <div><span>{String(timeLeft.hours).padStart(2, '0')}</span><small>Hour</small></div>
          <div><span>{String(timeLeft.minutes).padStart(2, '0')}</span><small>Min</small></div>
          <div><span>{String(timeLeft.seconds).padStart(2, '0')}</span><small>Sec</small></div>
        </div>
      </div>
      <div className="mainpart2-products">
        <div className="mainpart2-product">
          <img src={watch} alt="Smart watches" />
          <div className="mainpart2-product-name">Smart watches</div>
          <div className="mainpart2-product-offer">-25%</div>
        </div>
        <div className="mainpart2-product">
          <img src={laptop} alt="Laptops" />
          <div className="mainpart2-product-name">Laptops</div>
          <div className="mainpart2-product-offer">-15%</div>
        </div>
        <div className="mainpart2-product">
          <img src={gopro} alt="GoPro cameras" />
          <div className="mainpart2-product-name">GoPro cameras</div>
          <div className="mainpart2-product-offer">-40%</div>
        </div>
        <div className="mainpart2-product">
          <img src={headphones} alt="Headphones" />
          <div className="mainpart2-product-name">Headphones</div>
          <div className="mainpart2-product-offer">-25%</div>
        </div>
        <div className="mainpart2-product">
          <img src={canon} alt="Canon camerras" />
          <div className="mainpart2-product-name">Canon camerras</div>
          <div className="mainpart2-product-offer">-25%</div>
        </div>
      </div>
    </div>
  );
}

export default MainPart2;