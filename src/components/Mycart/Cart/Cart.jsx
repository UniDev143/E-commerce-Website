import React, { useState } from "react";
import Item from "../Item/Item";
import "./Cart.css";

const initialCart = [
  {
    id: 1,
    img: "/src/assets/MainPart3/bed.png",
    title: "T-shirts with multiple colors, for men and lady",
    price: 78.99,
    qty: 9,
    size: "medium",
    color: "blue",
    material: "Plastic",
    seller: "Artel Market",
  },
  {
    id: 2,
    img: "/src/assets/MainPart3/laptop.png",
    title: "T-shirts with multiple colors, for men and lady",
    price: 38.0,
    qty: 3,
    size: "medium",
    color: "blue",
    material: "Plastic",
    seller: "Best Factory LLC",
  },
  {
    id: 3,
    img: "/src/assets/MainPart3/sofa.png",
    title: "T-shirts with multiple colors, for men and lady",
    price: 170.5,
    qty: 1,
    size: "medium",
    color: "blue",
    material: "Plastic",
    seller: "Artel Market",
  },
];

const initialSaved = [
  {
    id: 4,
    img: "/src/assets/MainPart3/phone.png",
    title: "GoPro HERO6 4K Action Camera - Black",
    price: 99.5,
  },
  {
    id: 5,
    img: "/src/assets/MainPart3/ipad.png",
    title: "GoPro HERO6 4K Action Camera - Black",
    price: 99.5,
  },
  {
    id: 6,
    img: "/src/assets/MainPart3/watch.png",
    title: "GoPro HERO6 4K Action Camera - Black",
    price: 99.5,
  },
  {
    id: 7,
    img: "/src/assets/MainPart3/laptop.png",
    title: "GoPro HERO6 4K Action Camera - Black",
    price: 99.5,
  },
];

export default function Cart() {
  const [cart, setCart] = useState(initialCart);
  const [saved, setSaved] = useState(initialSaved);
  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(false);

  // Calculate summary
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = appliedCoupon ? 80 : 0;
  const tax = 14;
  const total = subtotal - discount + tax;

  // Handlers
  const handleRemove = (id) => setCart(cart.filter((item) => item.id !== id));
  const handleSaveForLater = (id) => {
    const item = cart.find((i) => i.id === id);
    setCart(cart.filter((i) => i.id !== id));
    setSaved([item, ...saved]);
  };
  const handleMoveToCart = (id) => {
    const item = saved.find((i) => i.id === id);
    setSaved(saved.filter((i) => i.id !== id));
    setCart([item, ...cart]);
  };
  const handleQtyChange = (id, qty) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: Number(qty) } : item
      )
    );
  };
  const handleRemoveAll = () => setCart([]);
  const handleApplyCoupon = () => setAppliedCoupon(true);

  return (
    <div className="cart-container">
      <h2>My cart ({cart.length})</h2>
      <div className="cart-main">
        {/* Cart Items */}
        <div className="cart-items-section">
          <div className="cart-items-list">
            {cart.map((item) => (
              <div key={item.id} className="cart-item-row">
                <Item
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  qty={item.qty}
                  size={item.size}
                  color={item.color}
                  material={item.material}
                  seller={item.seller}
                  onRemove={() => handleRemove(item.id)}
                  onSaveForLater={() => handleSaveForLater(item.id)}
                  onQtyChange={(qty) => handleQtyChange(item.id, qty)}
                />
              </div>
            ))}
          </div>
          <div className="cart-actions">
            <button className="back-btn">Back to shop</button>
            <button className="removeall-btn" onClick={handleRemoveAll}>
              Remove all
            </button>
          </div>
          <div className="cart-features">
            <div>
              <span role="img" aria-label="secure">🔒</span>
              <div>Secure payment</div>
              <div className="cart-feature-desc">Have you ever finally just</div>
            </div>
            <div>
              <span role="img" aria-label="support">💬</span>
              <div>Customer support</div>
              <div className="cart-feature-desc">Have you ever finally just</div>
            </div>
            <div>
              <span role="img" aria-label="delivery">🚚</span>
              <div>Free delivery</div>
              <div className="cart-feature-desc">Have you ever finally just</div>
            </div>
          </div>
        </div>
        {/* Cart Summary */}
        <div className="cart-summary-section">
          <div className="cart-coupon">
            <label>Have a coupon?</label>
            <div className="cart-coupon-row">
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Add coupon"
                disabled={appliedCoupon}
              />
              <button
                onClick={handleApplyCoupon}
                disabled={appliedCoupon || !coupon}
              >
                Apply
              </button>
            </div>
          </div>
          <div className="cart-summary">
            <div className="cart-summary-row">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="cart-summary-row">
              <span>Discount:</span>
              <span className="cart-discount">-${discount.toFixed(2)}</span>
            </div>
            <div className="cart-summary-row">
              <span>Tax:</span>
              <span className="cart-tax">+${tax.toFixed(2)}</span>
            </div>
            <div className="cart-summary-row cart-total">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Checkout</button>
            <div className="cart-payment-icons">
              <img src="/src/assets/Footer/market-button.png" alt="Visa" />
              <img src="/src/assets/Footer/market-button A.png" alt="Mastercard" />
              {/* Add more icons as needed */}
            </div>
          </div>
        </div>
      </div>
      {/* Saved for later */}
      <div className="cart-saved-section">
        <h3>Saved for later</h3>
        <div className="cart-saved-list">
          {saved.map((item) => (
            <div key={item.id} className="cart-saved-card">
              <img src={item.img} alt={item.title} className="cart-saved-img" />
              <div className="cart-saved-price">${item.price.toFixed(2)}</div>
              <div className="cart-saved-title">{item.title}</div>
              <button
                className="move-to-cart-btn"
                onClick={() => handleMoveToCart(item.id)}
              >
                Move to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

