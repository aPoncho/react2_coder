import React from 'react'
import Item from '../Item/Item.jsx'
import './item-list.css'

export default function ItemList({items}) {
  return (
    <div className='item-list'>
        {items.map((item, index)=>
            <Item key={index} id={item.id} name={item.name} price={item.price} stock={item.stock}/>
            )}
    </div>
  )
}

