import React, { useState } from 'react'
import './ItemCount.css'

export default function ItemCount({stock, initial, onAdd}) {

    const [count, setCount] = useState(initial)
    const addCount = ()=>{
        if(count < stock)
        setCount(count + 1)
    }

    const subsCount = ()=>{
        if(count > initial)
        setCount(count-1)
    }

  return (
    <div className='item-counter-container'>
        <div className='item-counter'>
        <button onClick={addCount}>+</button>
        <span>{count}</span>
        <button onClick={subsCount}>-</button>
        </div>
        <div>
            <button className='btn-add-cart' onClick={()=> {onAdd(count)}}>Agregar al carrito</button>
        </div>
    </div>
  )
}
