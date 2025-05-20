import React, { useContext, useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.webp';
import cart_icon from '../../assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  // Close mobile menu on navigation click
  const handleNavClick = (menuName) => {
    setMenu(menuName);
    setMobileMenuOpen(false);
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" height='50px' />
        <p>shopify</p>
        {/* Hamburger for mobile */}
        <button className="hamburger" onClick={toggleMobileMenu} aria-label="Toggle menu">
          <span className={mobileMenuOpen ? "bar bar1 open" : "bar bar1"}></span>
          <span className={mobileMenuOpen ? "bar bar2 open" : "bar bar2"}></span>
          <span className={mobileMenuOpen ? "bar bar3 open" : "bar bar3"}></span>
        </button>
      </div>

      <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <li onClick={() => handleNavClick("home")}>
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/"> Home</Link>
          {menu === "home" ? <hr /> : null}
        </li>
        <li onClick={() => handleNavClick("mens")}>
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/mens"> Mens</Link>
          {menu === "mens" ? <hr /> : null}
        </li>
        <li onClick={() => handleNavClick("women")}>
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/women"> Women</Link>
          {menu === "women" ? <hr /> : null}
        </li>
        <li onClick={() => handleNavClick("kids")}>
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/kids"> Kids</Link>
          {menu === "kids" ? <hr /> : null}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link style={{ textDecoration: "none", color: "#626262" }} to="/login">
          <button>Login</button>
        </Link>
        <Link style={{ textDecoration: "none", color: "#626262" }} to="/cart">
          <img src={cart_icon} alt="cart" height='40px' />
        </Link>

        <div className="nav-cart-count">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
