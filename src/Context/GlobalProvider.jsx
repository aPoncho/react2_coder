import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import '../services/index'

export const GlobalContext = createContext();



///  [CREAR STATE DE PRODUCTS!!!]


const GlobalProvider = ({children}) => {
  
//State del carrito
const [cartList, setCartList] = useState([ ])

//funcion, recibe un item y lo agrega al carrito(cartList)
const addToCart = (item, qty) => {
  item.qty = qty
  // console.log(item, cartList)
  const itemInList = cartList.find(element => element.id === item.id)
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
  
//Product context ¡RECORDAR HACER SU PROPIO CONTEXT DESPUES!

// useEffect (()=>{ 
//   const db = getFirestore()
  
//   const collProductos = collection(db, 'productos');
  
//   getDocs(collProductos).then((snapshot) => {
    
//     if (snapshot.size === 0) {
//       console.log('Sin resultados')
//     } 
    
//     setProducts (snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() })))
//   });
// }, [])

// async function getProducts(db) {
//   const products = collection(db, 'productos');
//   const productsSnapshot = await getDocs(products);
//   const productsList = productsSnapshot.docs.map(doc => doc.data());
//   console.log(productsList)
//   return productsList;
// }
  
  return (
    <GlobalContext.Provider value={{ cartList, addToCart, removeItem, resetCart }}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider