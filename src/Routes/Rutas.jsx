import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from '..pages/Home.jsx';
export default function Rutas() {
  return (
    <BrowserRouter>
    <Navbar/>
        <Route path="/" element={<Home/>}/>
    </BrowserRouter>
  )
}

