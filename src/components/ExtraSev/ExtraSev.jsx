import React from 'react';
import './ExtraSev.css';

// Use your actual images from the extra_service folder
import img1 from '../../assets/extra_service/0c52058c7fecb736fb193ed3a0a046668cf87a58.png';
import img2 from '../../assets/extra_service/1d9d9dbe3e097f229ff7711c3aefb5b0673a2278.png';
import img3 from '../../assets/extra_service/4b08c60c3829236b56ad902eb0d7bc9954d83888.png';
import img4 from '../../assets/extra_service/b564a957ce3a966c5d76f6c21ddcaeba336dd251.png';

import { FaSearch, FaRegClone, FaPaperPlane, FaShieldAlt } from 'react-icons/fa';

const services = [
  {
    img: img1,
    icon: <FaSearch />,
    title: 'Source from Industry Hubs',
  },
  {
    img: img2,
    icon: <FaRegClone />,
    title: 'Customize Your Products',
  },
  {
    img: img3,
    icon: <FaPaperPlane />,
    title: 'Fast, reliable shipping by ocean or air',
  },
  {
    img: img4,
    icon: <FaShieldAlt />,
    title: 'Product monitoring and inspection',
  },
];

function ExtraSev() {
  return (
    <div className="extraserv-section">
      <h2 className="extraserv-title">Our extra services</h2>
      <div className="extraserv-grid">
        {services.map((service, idx) => (
          <div className="extraserv-card" key={idx}>
            <div className="extraserv-img-wrap">
              <img src={service.img} alt={service.title} />
              <span className="extraserv-icon">{service.icon}</span>
            </div>
            <div className="extraserv-card-title">{service.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExtraSev;