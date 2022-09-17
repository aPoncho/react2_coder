import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const GlobalContext = createContext();

const GlobalProvider = ({children}) => {

  //objeto para probar el context
const prueba = {prueba1: 1, prueba2: 2, prueba3: 3}
  
//State del carrito
const [cartList, setCartList] = useState([ ])

//funcion, recibe un item y lo agrega al carrito(cartList)
const addToCart = (item, qty) => {
  item.qty = qty
  // console.log(item, cartList)
  const itemInList = cartList.find(element => element.id === element.id)
  if (itemInList) {
    const updatedQty = itemInList.qty + item.qty
    const index = cartList.indexOf(itemInList)
    cartList[index].qty = updatedQty
  } else {
    setCartList([...cartList, item])
  }
}


const removeItem = (index) => {
  const i = index
  const filteredCart = cartList.slice(0, i).concat(cartList.slice(i+1, cartList.length))
  setCartList(filteredCart)

}

const resetCart = () => {
  setCartList([])
}
  
//const isInCart = (itemId) => { return cartList.some((element)=> element.id == itemId) }
  
  return (
    <GlobalContext.Provider value={{prueba, cartList, addToCart, removeItem, resetCart}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider