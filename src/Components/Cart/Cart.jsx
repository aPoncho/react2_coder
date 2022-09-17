import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalProvider'
import { Link } from 'react-router-dom';

export default function Cart() {

const {cartList, resetCart, removeItem} = useContext(GlobalContext)


  return (
    <div>
      {cartList.length ? 
        <div>
          <h1>Carrito</h1>
          <ul>
            {cartList.map((item, index) => 
              <div key={index}>
                <li>producto: {item.name} cantidad: {item.qty} precio: {item.qty * item.price}</li>
                <button onClick={()=>removeItem(index)}>Quitar item</button>
              </div>
              )
            }
          </ul>
          <button onClick={resetCart}>Vaciar carrito</button>
          <Link to='/checkout'><button>Terminar compra</button></Link>         
        </div>
        : <h1>Carrito Vacio</h1>}
    </div>
  )
}
