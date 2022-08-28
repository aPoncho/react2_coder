import React from 'react';
import './Navbar.css';
import './CartWidget/CartWidget.jsx'
import CartWidget from './CartWidget/CartWidget.jsx';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navBar'>
                <NavLink to="/" className='navlink'>Home</NavLink>
                <NavLink to="/Nosotros" className='navlink'>Nosotros</NavLink>
                <NavLink to="/Productos" className='navlink'>Productos</NavLink>
                <NavLink to="/Login" className='navlink'>Login</NavLink>
                <CartWidget/>
    </div>
  )
}

