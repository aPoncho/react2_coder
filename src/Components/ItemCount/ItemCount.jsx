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
    <>
        <h1>{count}</h1>
        <button onClick={addCount}>+</button>
        <button onClick={subsCount}>-</button>
        <div>
            <button onClick={()=> {onAdd(count)}}>Agregar al carrito</button>
        </div>
    </>
  )
}
