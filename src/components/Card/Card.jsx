import React from 'react';
import './Card.css';

function Card({ image, price, name, description }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-card-img" />
      <div className="product-card-info">
        <div className="product-card-price">${price}</div>
        <div className="product-card-name">{name}</div>
        {description && <div className="product-card-desc">{description}</div>}
      </div>
    </div>
  );
}
export default Card;