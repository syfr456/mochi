import React from 'react';
import './index.css';
import mochiLogo from '../asset/img/mochi.png';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
  return (
    <header>
      <div className="navbar">
        <div className="logo">
        <img
              alt="logo"
              src={mochiLogo}
              width="30"
              height="30"
              className=" img"
            />
          Mochi</div>
        <nav>
        
          <ul>
            <li>Categories</li>
            <li>Deals</li>
            <li>What's New</li>
            <li>Delivery</li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search Product" />
        </div>
        <div className="account-cart">
          <span>Account</span>
          <span>Cart</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
