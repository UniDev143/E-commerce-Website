import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <div className="sidebar-title">Category</div>
        <ul>
          <li><button className="sidebar-link-btn">Mobile accessory</button></li>
          <li><button className="sidebar-link-btn">Electronics</button></li>
          <li><button className="sidebar-link-btn">Smartphones</button></li>
          <li><button className="sidebar-link-btn">Modern tech</button></li>
        </ul>
        <a href="#" className="sidebar-link">See all</a>
      </div>
      <div className="sidebar-section">
        <div className="sidebar-title">Brands</div>
        <ul>
          <li><input type="checkbox" /> Samsung</li>
          <li><input type="checkbox" /> Apple</li>
          <li><input type="checkbox" /> Huawei</li>
          <li><input type="checkbox" /> Pocco</li>
          <li><input type="checkbox" /> Lenovo</li>
        </ul>
        <a href="#" className="sidebar-link">See all</a>
      </div>
      <div className="sidebar-section">
        <div className="sidebar-title">Features</div>
        <ul>
          <li><input type="checkbox" /> Metallic</li>
          <li><input type="checkbox" /> Plastic cover</li>
          <li><input type="checkbox" /> 8GB Ram</li>
          <li><input type="checkbox" /> Super power</li>
          <li><input type="checkbox" /> Large Memory</li>
        </ul>
        <a href="#" className="sidebar-link">See all</a>
      </div>
      <div className="sidebar-section">
        <div className="sidebar-title">Price range</div>
        <div className="sidebar-slider">
          <input type="range" min="0" max="99999" />
          <input type="range" min="0" max="99999" />
        </div>
        <div className="sidebar-price-inputs">
          <input type="number" placeholder="Min" min="0" />
          <input type="number" placeholder="Max" min="0" />
        </div>
        <button className="sidebar-apply-btn">Apply</button>
      </div>
      <div className="sidebar-section">
        <div className="sidebar-title">Condition</div>
        <ul>
          <li><input type="radio" name="condition" defaultChecked /> Any</li>
          <li><input type="radio" name="condition" /> Refurbished</li>
          <li><input type="radio" name="condition" /> Brand new</li>
          <li><input type="radio" name="condition" /> Old items</li>
        </ul>
      </div>
      <div className="sidebar-section">
        <div className="sidebar-title">Ratings</div>
        <ul>
          <li><input type="checkbox" /> <span className="stars">★★★★★</span></li>
          <li><input type="checkbox" /> <span className="stars">★★★★☆</span></li>
          <li><input type="checkbox" /> <span className="stars">★★★☆☆</span></li>
          <li><input type="checkbox" /> <span className="stars">★★☆☆☆</span></li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;