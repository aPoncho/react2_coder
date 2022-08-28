import React from 'react'
import './Item.css'
import {Link} from 'react-router-dom';

export default function Item({id, name, price, stock, img}) {
  return (
    <div className="card-container">
        <img src={img} alt="" srcset=""/>
        <h2>{name}</h2>
        <span>Id: #{id}</span>
        <span>
          <h3>Valor: {price}</h3>
        </span>
        <span>Stock: {stock}</span>
        <Link className='detail-link' to={`/item/${id}`}>Ver mas</Link>
    </div>
  )
}
