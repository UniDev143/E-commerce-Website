import './SecondPage.css';
import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import Mobilecard from "../Mobilecard/Mobilecard";
import ipadImg from "../../assets/MainPart3/ipad.png";
import phoneImg from "../../assets/MainPart3/phone.png";
import laptopImg from "../../assets/MainPart3/laptop.png";
import watchImg from "../../assets/MainPart3/watch.png";
import cameraImg from "../../assets/MainPart3/camera.png";

const mobileData = [
  {
    image: ipadImg,
    name: "iPad Air 2022, 64GB",
    price: "599.00",
    oldPrice: "649.00",
    rating: "8.0",
    orders: 120,
    shipping: "Free Shipping",
    description: "Lightweight and powerful tablet. Lorem ipsum dolor sit amet.",
  },
  {
    image: phoneImg,
    name: "Galaxy S24 Ultra, 256GB",
    price: "999.00",
    oldPrice: "1099.00",
    rating: "9.2",
    orders: 210,
    shipping: "Free Shipping",
    description: "Flagship smartphone with pro camera. Lorem ipsum dolor sit amet.",
  },
  {
    image: laptopImg,
    name: "Dell XPS 13, 16GB RAM",
    price: "1199.00",
    oldPrice: "1299.00",
    rating: "8.7",
    orders: 85,
    shipping: "Free Shipping",
    description: "Ultra-portable laptop for work and play. Lorem ipsum dolor sit amet.",
  },
  {
    image: watchImg,
    name: "Apple Watch Series 9",
    price: "399.00",
    oldPrice: "449.00",
    rating: "8.5",
    orders: 150,
    shipping: "Free Shipping",
    description: "Smartwatch with health tracking. Lorem ipsum dolor sit amet.",
  },
  {
    image: cameraImg,
    name: "Canon EOS M50 Mark II",
    price: "649.00",
    oldPrice: "699.00",
    rating: "8.9",
    orders: 60,
    shipping: "Free Shipping",
    description: "Mirrorless camera for creators. Lorem ipsum dolor sit amet.",
  },
];

function SecondPage() {
  const [view, setView] = useState('grid'); // 'grid' or 'list'

  return (
    <div className="secondpage-wrapper">
      
      <div className="secondpage-main">
        <Sidebar />
        <div className="secondpage-content">
          <h1 className="secondpage-title">Welcome to the Second Page</h1>
          <div className="secondpage-toolbar">
            <span className="toolbar-items-count">
              <strong>12,911</strong> items in <strong>Mobile accessory</strong>
            </span>
            <label className="toolbar-verified">
              <input type="checkbox" defaultChecked />
              Verified only
            </label>
            <select className="toolbar-sort">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
            <div className="toolbar-view-group">
              <button
                className={`toolbar-view-btn${view === 'grid' ? ' active' : ''}`}
                title="Grid view"
                onClick={() => setView('grid')}
              >
                <svg width="18" height="18" viewBox="0 0 18 18"><rect x="2" y="2" width="5" height="5" fill="#888"/><rect x="11" y="2" width="5" height="5" fill="#888"/><rect x="2" y="11" width="5" height="5" fill="#888"/><rect x="11" y="11" width="5" height="5" fill="#888"/></svg>
              </button>
              <button
                className={`toolbar-view-btn${view === 'list' ? ' active' : ''}`}
                title="List view"
                onClick={() => setView('list')}
              >
                <svg width="18" height="18" viewBox="0 0 18 18"><rect x="2" y="3" width="14" height="2" fill="#888"/><rect x="2" y="8" width="14" height="2" fill="#888"/><rect x="2" y="13" width="14" height="2" fill="#888"/></svg>
              </button>
            </div>
          </div>
          <div className={`secondpage-cards ${view}`}>
            {mobileData.map((item, idx) => (
              <Mobilecard
                key={idx}
                image={item.image}
                name={item.name}
                price={item.price}
                oldPrice={item.oldPrice}
                rating={item.rating}
                orders={item.orders}
                shipping={item.shipping}
                description={item.description}
                onDetails={() => alert(`Viewing details for ${item.name}`)}
              />
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default SecondPage;