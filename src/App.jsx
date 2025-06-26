import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPart1 from './components/MainPart1/MainPart1';
import MainPart2 from './components/MainPart2/MainPart2';
import MainPart3 from './components/MainPart3/MainPart3';
import Askus from './components/Askus/Askus';
import Card from './components/Card/Card';
import ExtraSev from './components/ExtraSev/ExtraSev';
import SecondPage from './components/SecondPage/SecondPage';
import Supply from './components/supply/supply';
import './App.css';

import jacketImg from './assets/MainPart3/coffemachine.png';
import coatImg from './assets/MainPart3/cattle.png';
import walletImg from './assets/MainPart3/headphones.png';
import backpackImg from './assets/MainPart3/headphones.png';
import jeansImg from './assets/MainPart3/home.jpg';
import headsetImg from './assets/MainPart3/ipad.png';
import smartwatchImg from './assets/MainPart3/laptop.png';
import blueWalletImg from './assets/MainPart3/lamp.png';
import potImg from './assets/MainPart3/Juicer.png';
import kettleImg from './assets/MainPart3/phone.png';
import Cart from './components/Mycart/Cart/Cart';
import ProductPage from './components/ProductPage/ProductPage';

const recommendedItems = [
  {
    image: jacketImg,
    price: '10.30',
    name: 'Jeans shorts for men blue color',
  },
  {
    image: coatImg,
    price: '12.50',
    name: 'Brown winter coat medium size',
  },
  {
    image: walletImg,
    price: '34.00',
    name: 'Jeans bag for travel for men',
  },
  {
    image: backpackImg,
    price: '99.00',
    name: 'Leather wallet',
  },
  {
    image: jeansImg,
    price: '9.99',
    name: 'Canon camera black, 100x zoom',
  },
  {
    image: headsetImg,
    price: '8.99',
    name: 'Headset for gaming with mic',
  },
  {
    image: smartwatchImg,
    price: '10.30',
    name: 'Smartwatch silver color modern',
  },
  {
    image: blueWalletImg,
    price: '10.30',
    name: 'Blue wallet for men leather metafrial',
  },
  {
    image: potImg,
    price: '10.30',
    name: 'Blue wallet for men leather metafrial',
  },
  {
    image: kettleImg,
    price: '80.95',
    name: 'Jeans bag for travel for men',
  },
];

function HomePage() {
  return (
    <div className="main-content">
      <MainPart1 />
      <MainPart2 />
      <MainPart3 />
      <Askus />
      <div className="recommended-section">
        <div className="recommended-header">
          <h2>Recommended Items</h2>
        </div>
        <div className="recommended-grid">
          {recommendedItems.map((item, idx) => (
            <Card
              key={idx}
              image={item.image}
              price={item.price}
              name={item.name}
            />
          ))}
        </div>
      </div>
      <div className="extra-services-section">
        <ExtraSev />
      </div>
      <Supply />
    </div>
  );
}

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/secondpage" element={<SecondPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productpage" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;