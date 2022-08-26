import React from 'react'
import ItemCount from '../ItemCount/ItemCount.jsx'
import './Item.css'

export default function Item({id, name, price, stock}) {
  return (
    <div className="card-container">
        <h1>{name}</h1>
        <span>Id: {id}</span>
        <span>Valor: {price}</span>
        <span>Stock: {stock}</span>
        <ItemCount stock={stock} initial={1}/>
    </div>
  )
}
