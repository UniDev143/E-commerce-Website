import React from 'react';
import './Supply.css';

// Import flag images from your assets (update paths as needed)
import ae from '../../assets/supply/ae.png';
import au from '../../assets/supply/au.png';
import us from '../../assets/supply/us.png';
import ru from '../../assets/supply/ru.png';
import it from '../../assets/supply/it.png';
import dk from '../../assets/supply/dk.png';
import fr from '../../assets/supply/fr.png';
import cn from '../../assets/supply/cn.png';
import gb from '../../assets/supply/gb.png';

const regions = [
  { flag: ae, country: 'Arabic Emirates', url: 'shopname.ae' },
  { flag: au, country: 'Australia', url: 'shopname.au' },
  { flag: us, country: 'United States', url: 'shopname.ae' },
  { flag: ru, country: 'Russia', url: 'shopname.ru' },
  { flag: it, country: 'Italy', url: 'shopname.it' },
  { flag: dk, country: 'Denmark', url: 'denmark.com.dk' },
  { flag: fr, country: 'France', url: 'shopname.com.fr' },
  { flag: ae, country: 'Arabic Emirates', url: 'shopname.ae' },
  { flag: cn, country: 'China', url: 'shopname.ae' },
  { flag: gb, country: 'Great Britain', url: 'shopname.co.uk' },
];

function Supply() {
  return (
    <div className="supply-section">
      <h2 className="supply-title">Suppliers by region</h2>
      <div className="supply-grid">
        {regions.map((region, idx) => (
          <div className="supply-item" key={idx}>
            <img src={region.flag} alt={region.country} className="supply-flag" />
            <div>
              <div className="supply-country">{region.country}</div>
              <div className="supply-url">{region.url}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Supply;

