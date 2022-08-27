import React from 'react'
import ItemCount from '../ItemCount/ItemCount.jsx'
import './Item.css'
import {Link} from 'react-router-dom';

export default function Item({id, name, price, stock}) {
  return (
    <div className="card-container">
        <h1>{name}</h1>
        <span>Id: {id}</span>
        <span>Valor: {price}</span>
        <span>Stock: {stock}</span>
        <Link to={`/item/${id}`}>Ver mas</Link>
        <ItemCount stock={stock} initial={1}/>
    </div>
  )
}
