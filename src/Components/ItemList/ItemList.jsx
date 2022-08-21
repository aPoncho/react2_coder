import React from 'react'
import Item from '../Item/Item.jsx'

export default function ItemList({items}) {
  return (
    <div>
        {items.map((item, index)=>
            <Item key={index} id={item.id} name={item.name} price={item.price} stock={item.stock}/>
            )}
    </div>
  )
}

