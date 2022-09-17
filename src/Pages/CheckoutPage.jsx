import React from 'react'
import Cart from '../Components/Cart/Cart'
import Checkout from '../Components/Checkout/Checkout'
import './CheckoutPage.css'

export default function CheckoutPage() {
  return (
    <div className='checkout-page'>
        <Cart/>
        <Checkout/>
    </div>
  )
}
