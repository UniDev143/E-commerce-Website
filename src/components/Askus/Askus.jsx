import React, { useState } from 'react';
import './Askus.css';
import banner from '../../assets/AskusBanner.png';


function Askus() {
  const [item, setItem] = useState('');
  const [details, setDetails] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('Pcs');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Inquiry submitted!');
    setItem('');
    setDetails('');
    setQuantity('');
    setUnit('Pcs');
  };

  return (
    <div
      className="askus-banner"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(64,148,247,0.92) 0%, rgba(64,148,247,0.7) 60%, rgba(64,148,247,0.3) 100%), url(${banner})`
      }}
    >
      <div className="askus-left">
        <h2>An easy way to send<br />requests to all suppliers</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
      </div>
      <div className="askus-form-card">
        <div className="askus-form-title">Send quote to suppliers</div>
        <form onSubmit={handleSubmit}>
          <label>
            What item you need?
            <input
              type="text"
              placeholder="Enter item name"
              value={item}
              onChange={e => setItem(e.target.value)}
              required
            />
          </label>
          <label>
            <textarea
              placeholder="Type more details"
              rows={3}
              value={details}
              onChange={e => setDetails(e.target.value)}
            ></textarea>
          </label>
          <div className="askus-form-row">
            <input
              type="number"
              placeholder="Quantity"
              min="1"
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
              required
            />
            <select value={unit} onChange={e => setUnit(e.target.value)}>
              <option>Pcs</option>
              <option>Kg</option>
              <option>Liters</option>
            </select>
          </div>
          <button type="submit">Send inquiry</button>
        </form>
      </div>
    </div>
  );
}

export default Askus;