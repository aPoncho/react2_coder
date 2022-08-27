import React from 'react'

export default function ItemDetail({item}) {

  return (
    <div>
        <h1>{item.name}</h1>
        <p>Stock: {item.stock}</p>
        <h2>Valor: ${item.price}</h2>
    </div>
  )
}
