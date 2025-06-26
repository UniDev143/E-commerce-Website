import React from "react";
import "./Mobilecard.css";

const Mobilecard = ({
  image,
  name,
  price,
  oldPrice,
  rating,
  orders,
  shipping,
  description,
  onDetails,
}) => {
  return (
    <div className="mobilecard">
      <img src={image} alt={name} className="mobilecard-img" />
      <div className="mobilecard-content">
        <div className="mobilecard-header">
          <div className="mobilecard-title">{name}</div>
          <button className="mobilecard-fav" aria-label="Add to wishlist">
            <svg width="20" height="20" fill="none" stroke="#888" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M12 21s-6.5-5.5-9-9.5C-1.5 6.5 3.5 2 7.5 5.5c2.5 2.2 4.5 2.2 7 0C20.5 2 25.5 6.5 21 11.5c-2.5 4-9 9.5-9 9.5z"/>
            </svg>
          </button>
        </div>
        <div className="mobilecard-price">
          <span className="mobilecard-price-current">${price}</span>
          <span className="mobilecard-price-old">${oldPrice}</span>
        </div>
        <div className="mobilecard-meta">
          <span className="mobilecard-stars">
            <span style={{ color: "#FFA500" }}>★</span>
            <span style={{ color: "#FFA500" }}>★</span>
            <span style={{ color: "#FFA500" }}>★</span>
            <span style={{ color: "#FFA500" }}>★</span>
            <span style={{ color: "#FFA500" }}>★</span>
          </span>
          <span className="mobilecard-rating">{rating}</span>
          <span className="mobilecard-orders">{orders} orders</span>
          <span className="mobilecard-shipping">{shipping}</span>
        </div>
        <div className="mobilecard-desc">{description}</div>
        <button className="mobilecard-details" onClick={onDetails}>
          View details
        </button>
      </div>
    </div>
  );
};

export default Mobilecard;