import React from 'react'
import './Checkout.css'

export default function Checkout() {
  return (
    <div>
        <form action="" className="checkout-form">
            <input type="text" name="Nombre" id="" placeholder='Nombre'/>
            <input type="text" name="Apellido" id="" placeholder='Apellido'/>
            <input type="text" name="Email" id="" placeholder='Email'/>
            <input type="text" name="Telefono" id="" placeholder='Telefono' />
        </form>
        <button type="submit">Terminar la compra</button>
        <button>Volver a comprar</button>
    </div>
  )
}
