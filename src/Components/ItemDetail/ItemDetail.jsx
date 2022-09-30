import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { GlobalContext } from '../../Context/GlobalProvider';
import { useContext } from 'react';
import './ItemDetail.css'

export default function ItemDetail({item, count}) {
  
  const {addToCart, cartList} = useContext(GlobalContext)

  const {id, price, name, img, stock} = item;

  function onAdd(count) {
    addToCart(item, count)   
  }

  return (
    <div className='item-detail-container'>
      
      <div>
        <img src={img} className='item-detail-img' />
      </div>
      
      <div>
        <h1>{name}</h1>
        <p>Stock: {stock}</p>
        <h2>Valor: ${price}</h2> 
        <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
        <Link to='/cart'><button disabled={cartList.length === 0}>Ir al carrito</button></Link>
      </div>
    </div>
  )
}
