import React from 'react'
import './Item.css'
import {Link} from 'react-router-dom';

export default function Item({id, name, price, stock}) {
  return (
    <div className="card-container">
        <h2>{name}</h2>
        <span>Id: {id}</span>
        <span>Valor: {price}</span>
        <span>Stock: {stock}</span>
        <Link className='detail-link' to={`/item/${id}`}>Ver mas</Link>
    </div>
  )
}
