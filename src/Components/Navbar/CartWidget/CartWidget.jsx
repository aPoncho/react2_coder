import React from 'react'
import cart from './cart-icon.png'

export default function CartWidget() {
  return (
    <div>
        <img className='cart-icon' src={cart} alt="cart icon"/>
    </div>
  )
}
