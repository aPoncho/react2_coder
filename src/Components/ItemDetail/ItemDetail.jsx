import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

export default function ItemDetail({item}) {

  return (
    <div>
        <h1>{item.name}</h1>
        <p>Stock: {item.stock}</p>
        <h2>Valor: ${item.price}</h2>
        <ItemCount stock={item.stock} initial={1}/>
    </div>
  )
}
