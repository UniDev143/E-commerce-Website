import React from 'react';
import './MainPart3.css';

// Use your updated image imports here
import softChair from '../../assets/MainPart3/bed.png';
import sofaChair from '../../assets/MainPart3/camera.png';
import kitchenDishes from '../../assets/MainPart3/cattle.png';
import smartWatches from '../../assets/MainPart3/coffemachine.png';
import kitchenMixer from '../../assets/MainPart3/headphones.png';
import blenders from '../../assets/MainPart3/headphones.png';
import homeAppliance from '../../assets/MainPart3/home.jpg';
import coffeeMaker from '../../assets/MainPart3/ipad.png';

import watches2 from '../../assets/MainPart3/Juicer.png';
import cameras from '../../assets/MainPart3/lamp.png';
import headphones2 from '../../assets/MainPart3/laptop.png';
import gamingSet from '../../assets/MainPart3/phone.png';
import laptops from '../../assets/MainPart3/plant.png';
import smartphones from '../../assets/MainPart3/pot.png';
import electricKettle from '../../assets/MainPart3/sofa.png';

import bgHome from '../../assets/MainPart3/banner.png';
import bgGadgets from '../../assets/MainPart3/banner.jpg';

function MainPart3() {
  const handleItemClick = (itemName) => {
    alert(`You clicked on ${itemName}`);
  };

  return (
    <div className="mainpart3-wrapper">
      {/* Home and outdoor section */}
      <div className="mainpart3-section">
        <div className="mainpart3-section-left" style={{ backgroundImage: `url(${bgHome})` }}>
          <div>
            <h3>Home and outdoor</h3>
            <button>Source now</button>
          </div>
        </div>
        <div className="mainpart3-section-right">
          <div className="mainpart3-grid">
            <div className="mainpart3-item" onClick={() => handleItemClick('Soft chairs')} tabIndex={0}>
              <img src={softChair} alt="Soft chairs" />
              <div>Soft chairs<br /><span>From USD 19</span></div>
            </div>
            <div className="mainpart3-item" onClick={() => handleItemClick('Sofa & chair')} tabIndex={0}>
              <img src={sofaChair} alt="Sofa & chair" />
              <div>Sofa & chair<br /><span>From USD 19</span></div>
            </div>
            <div className="mainpart3-item" onClick={() => handleItemClick('Kitchen dishes')} tabIndex={0}>
              <img src={kitchenDishes} alt="Kitchen dishes" />
              <div>Kitchen dishes<br /><span>From USD 19</span></div>
            </div>
            <div className="mainpart3-item" onClick={() => handleItemClick('Smart watches')} tabIndex={0}>
              <img src={smartWatches} alt="Smart watches" />
              <div>Smart watches<br /><span>From USD 19</span></div>
            </div>
            <div className="mainpart3-item" onClick={() => handleItemClick('Kitchen mixer')} tabIndex={0}>
              <img src={kitchenMixer} alt="Kitchen mixer" />
              <div>Kitchen mixer<br /><span>From USD 100</span></div>
            </div>
            <div className="mainpart3-item" onClick={() => handleItemClick('Blenders')} tabIndex={0}>
              <img src={blenders} alt="Blenders" />
              <div>Blenders<br /><span>From USD 39</span></div>
            </div>
            <div className="mainpart3-item" onClick={() => handleItemClick('Home appliance')} tabIndex={0}>
              <img src={homeAppliance} alt="Home appliance" />
              <div>Home appliance<br /><span>From USD 10</span></div>
            </div>
            <div className="mainpart3-item" onClick={() => handleItemClick('Coffee maker')} tabIndex={0}>
              <img src={coffeeMaker} alt="Coffee maker" />
              <div>Coffee maker<br /><span>From USD 10</span></div>
            </div>
          </div>
        </div>
      </div>
      {/* Consumer electronics and gadgets section */}
      <div className="mainpart3-section">
        <div className="mainpart3-section-left" style={{ backgroundImage: `url(${bgGadgets})` }}>
          <div>
            <h3>Consumer electronics and gadgets</h3>
            <button>Source now</button>
          </div>
        </div>
        <div className="mainpart3-section-right">
          <div className="mainpart3-grid">
            <div className="mainpart3-item" onClick={() => handleItemClick('Smart watches 2')} tabIndex={0}>
              <img src={watches2} alt="Smart watches" />
              <div>Smart watches<br /><span>From USD 19</span></div>
            </div>
            <div className="mainpart3-item" onClick={() => handleItemClick('Cameras')} tabIndex={0}>
              <img src={cameras} alt="Cameras" />
              <div>Cameras<br /><span>From USD 89</span></div>
            </div>
            <div className="mainpart3-item" onClick={() => handleItemClick('Headphones')} tabIndex={0}>
              <img src={headphones2} alt="Headphones" />
              <div>Headphones<br /><span>From USD 10</span></div>
            </div>
            <div className="mainpart3-item" onClick={() => handleItemClick('Smart watches')} tabIndex={0}>
              <img src={smartWatches} alt="Smart watches" />
              <div>Smart watches<br /><span>From USD 90</span></div>
            </div>
            <div className="mainpart3-item" onClick={() => handleItemClick('Gaming set')} tabIndex={0}>
              <img src={gamingSet} alt="Gaming set" />
              <div>Gaming set<br /><span>From USD 35</span></div>
            </div>
            <div className="mainpart3-item" onClick={() => handleItemClick('Laptops & PC')} tabIndex={0}>
              <img src={laptops} alt="Laptops & PC" />
              <div>Laptops & PC<br /><span>From USD 340</span></div>
            </div>
            <div className="mainpart3-item" onClick={() => handleItemClick('Smartphones')} tabIndex={0}>
              <img src={smartphones} alt="Smartphones" />
              <div>Smartphones<br /><span>From USD 19</span></div>
            </div>
            <div className="mainpart3-item" onClick={() => handleItemClick('Electric kettle')} tabIndex={0}>
              <img src={electricKettle} alt="Electric kettle" />
              <div>Electric kettle<br /><span>From USD 240</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPart3;