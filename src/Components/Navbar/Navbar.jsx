import React from 'react';
import './Navbar.css';
import './CartWidget/CartWidget.jsx'
import CartWidget from './CartWidget/CartWidget.jsx';

export default function Navbar() {
  return (
    <div className='navBar'>
        <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#Nosotros">Nosotros</a></li>
                <li><a href="#Productos">Productos</a></li>
                <li><a href="#Login">Login</a></li>
                <CartWidget/>
        </ul>
    </div>
  )
}

