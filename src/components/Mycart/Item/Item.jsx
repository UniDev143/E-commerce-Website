import React from "react";
import "./Item.css";

const Item = ({
  image,
  title,
  price,
  size,
  color,
  material,
  seller,
  quantity,
  onRemove,
  onSaveForLater,
  onQuantityChange,
}) => {
  return (
    <div className="cart-item-card">
      <div className="cart-item-left">
        <img src={image} alt={title} className="cart-item-img" />
        <div className="cart-item-info">
          <div className="cart-item-title">{title}</div>
          <div className="cart-item-details">
            <span>Size: {size}</span>
            <span>, Color: {color}</span>
            <span>, &nbsp;Material: {material}</span>
          </div>
          <div className="cart-item-seller">Seller: {seller}</div>
          <div className="cart-item-actions">
            <button className="cart-item-remove" onClick={onRemove}>
              Remove
            </button>
            <button className="cart-item-save" onClick={onSaveForLater}>
              Save for later
            </button>
          </div>
        </div>
      </div>
      <div className="cart-item-right">
        <div className="cart-item-price">${price}</div>
        <div className="cart-item-qty">
          <label htmlFor={`qty-input-${title}`}>Qty:</label>
          <div className="qty-controls">
            <button
              className="qty-btn"
              onClick={() => onQuantityChange && onQuantityChange(quantity - 1)}
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span
              className="qty-value"
              id={`qty-input-${title}`}
              aria-live="polite"
              aria-atomic="true"
            >
              {quantity}
            </span>
            <button
              className="qty-btn"
              onClick={() => onQuantityChange && onQuantityChange(quantity + 1)}
              disabled={quantity >= 20}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;