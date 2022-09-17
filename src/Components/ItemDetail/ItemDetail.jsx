import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { GlobalContext } from '../../Context/GlobalProvider';
import { useContext } from 'react';

export default function ItemDetail({item, count}) {
  
  const {addToCart, cartList} = useContext(GlobalContext)

  const {id, price, name, img, stock} = item;

  function onAdd(count) {
    addToCart(item, count)   
  }

  return (
    <div>
        <h1>{name}</h1>
        <p>Stock: {stock}</p>
        <h2>Valor: ${price}</h2> 
        <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
        <Link to='/cart'><button disabled={cartList.length === 0}>Finalizar Compra</button></Link>
    </div>
  )
}
