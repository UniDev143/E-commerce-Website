import React from "react";
import "./ProductPage.css";

const ProductPage = () => {
  return (
    <div className="product-page-container">
      <div className="product-main-section">
        <div className="product-images">
          <img
            src="https://placehold.co/220x220"
            alt="Main Product"
            className="main-product-img"
          />
          <div className="product-thumbnails">
            {[1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                src={`https://placehold.co/48x48?text=${i}`}
                alt={`Thumbnail ${i}`}
                className="product-thumb"
              />
            ))}
          </div>
        </div>
        <div className="product-info">
          <div className="product-stock">✔ In stock</div>
          <h2 className="product-title">
            Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
          </h2>
          <div className="product-rating">
            <span>9.3</span> · <span>32 reviews</span> · <span>154 sold</span>
          </div>
          <div className="product-prices">
            <span className="old-price">$98.00</span>
            <span className="current-price">$90.00</span>
            <span className="discount-price">$78.00</span>
          </div>
          <table className="product-attributes">
            <tbody>
              <tr>
                <td>Type:</td>
                <td>Classic shoes</td>
              </tr>
              <tr>
                <td>Material:</td>
                <td>Plastic material</td>
              </tr>
              <tr>
                <td>Design:</td>
                <td>Modern nice</td>
              </tr>
              <tr>
                <td>Customization:</td>
                <td>Customized logo and design custom packages</td>
              </tr>
              <tr>
                <td>Protection:</td>
                <td>Refund Policy</td>
              </tr>
              <tr>
                <td>Warranty:</td>
                <td>2 years full warranty</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="seller-card">
          <div className="seller-initial">R</div>
          <div className="seller-info">
            <div className="seller-name">Supplier</div>
            <div className="seller-company">Guangji Trading LLC</div>
            <div className="seller-location">Germany, Berlin</div>
            <div className="seller-badges">
              <span>Verified Seller</span>
              <span>Worldwide shipping</span>
            </div>
            <button className="seller-btn">Send inquiry</button>
            <button className="seller-profile-btn">Seller's profile</button>
          </div>
        </div>
      </div>
      <div className="product-tabs-section">
        <div className="tabs">
          <button className="tab active">Description</button>
          <button className="tab">Reviews</button>
          <button className="tab">Shipping</button>
          <button className="tab">About seller</button>
        </div>
        <div className="tab-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </p>
          <table className="product-specs">
            <tbody>
              <tr>
                <td>Model</td>
                <td>#878687</td>
              </tr>
              <tr>
                <td>Style</td>
                <td>Classic style</td>
              </tr>
              <tr>
                <td>Certificate</td>
                <td>ISO-89862112</td>
              </tr>
              <tr>
                <td>Size</td>
                <td>34mm x 450mm x 19mm</td>
              </tr>
              <tr>
                <td>Memory</td>
                <td>36GB RAM</td>
              </tr>
            </tbody>
          </table>
          <ul className="product-features">
            <li>Some great feature name here</li>
            <li>Lorem ipsum dolor sit amet, consectetur</li>
            <li>Duis aute irure dolor in reprehenderit</li>
            <li>Some great feature name here</li>
          </ul>
        </div>
        <div className="product-sidebar">
          <div className="sidebar-title">You may like</div>
          <ul className="sidebar-products">
            {[1, 2, 3, 4, 5].map((i) => (
              <li key={i} className="sidebar-product">
                <img
                  src="https://via.placeholder.com/48x48"
                  alt="Related"
                  className="sidebar-product-img"
                />
                <div>
                  <div className="sidebar-product-title">
                    Product {i} Name
                  </div>
                  <div className="sidebar-product-price">$700 - $950</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="related-products-section">
        <div className="related-title">Related products</div>
        <div className="related-products-list">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i} className="related-product-card">
              <img
                src="https://via.placeholder.com/80x80"
                alt="Related"
                className="related-product-img"
              />
              <div className="related-product-name">Xiaomi Redmi 8 Original</div>
              <div className="related-product-price">$32.50–$40.00</div>
            </div>
          ))}
        </div>
      </div>
      <div className="discount-banner">
        <div>
          <strong>Super discount on more than 100 USD</strong>
          <span>Have you finally just write dummy info</span>
        </div>
        <button className="shop-now-btn">Shop now</button>
      </div>
    </div>
  );
};

export default ProductPage;