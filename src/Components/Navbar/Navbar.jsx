import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [ setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopHovered, setIsShopHovered] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" className="bi bi-shop-window" viewBox="0 0 16 16">
          <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5m2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5"/>
        </svg>
        <p>SHOPPER</p>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 2.5A.5.5 0 0 1 .5 2h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5zm0 5A.5.5 0 0 1 .5 7h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5zm0 5A.5.5 0 0 1 .5 12h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5z" />
            </svg>
          )}
      </div>

      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <li
          onClick={() => setMenu("shop")}
          onMouseEnter={() => setIsShopHovered(true)}
          onMouseLeave={() => setIsShopHovered(false)}
          style={{
            color: isShopHovered ? "#515151" : "#8a8a8a",
            cursor: "pointer",
            listStyle: "none",
          }}>
        </li>
        <Link to="/shop" style={{ color: isShopHovered ? "#515151" : "#8a8a8a", textDecoration: "none", fontSize: "16px" }}>
            Shop 
          </Link>
        <li onClick={() => setMenu("help")}>
          Help 
        </li>
        <li onClick={() => setMenu("contact")}>
          Contact Us 
        </li>
        <li>
        <Link to="/cart" style={{ color: isShopHovered ? "#515151" : "#8a8a8a", textDecoration: "none" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg>
            <span className="nav-cart-count">{getTotalCartItems()}</span>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <button>Get Started</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
