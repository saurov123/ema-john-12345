import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
          
    <nav className='header'>

        <img src={logo} alt="" />

        <div className='menubar'>
              <a href="/home">Home</a>
              <a href="/about">About</a>
              <a href="/inventory">Inventory</a>
              <a href="/contact">Contact</a>
        </div>

    </nav>
    )};
export default Header;