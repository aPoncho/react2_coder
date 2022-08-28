import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ItemDetailContainer from '../Components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../Components/ItemListContainer/ItemListContainer'
import Home from '../Pages/Home'

export default function Rutas() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/item/:id'  element={<ItemDetailContainer/>}/>
        <Route path='/category/:categoryid' element={<ItemListContainer greeting='Hola, bienvenido'/>}/>
      </Routes>
    </>  
  )
}

