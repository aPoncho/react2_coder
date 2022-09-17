import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Components/Cart/Cart'
import ItemDetailContainer from '../Components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../Components/ItemListContainer/ItemListContainer'
import CheckoutPage from '../Pages/CheckoutPage'
import Home from '../Pages/Home'

export default function Rutas() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/item/:id'  element={<ItemDetailContainer/>}/>
        <Route path='/category/:categoryid' element={<ItemListContainer greeting='Hola, bienvenido'/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<CheckoutPage/>}/>
      </Routes>
    </>  
  )
}

