import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'

export default function ItemDetail({item}) {
  const {id, price, name, img, stock} = item;

  const [itemQty, setItemQty] = useState(0)

  function onAdd(count) {
    setItemQty(count) //por alguna razon no lo toma
    console.log(`Items agregados: ${count}`)
    console.log(itemQty) //debo solucionar
    
  }

  return (
    <div>
        <h1>{name}</h1>
        <p>Stock: {stock}</p>
        <h2>Valor: ${price}</h2>
        {itemQty ? 
        <Link to='/cart'><button>Finalizar Compra</button></Link> :
        <ItemCount stock={stock} initial={1} onAdd={onAdd}/>}
    </div>
  )
}
