import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'

export default function ItemDetailContainer() {

  const {id} = useParams();
  const [item, setItem] = useState({})
  
  useEffect(() => {

    let products = [{id: "001", name: "Booster pack Pokemon", price: 3500, stock: 10},{id: "002", name: "Deck Pokemon", price: 12000, stock: 24}]
    
    new Promise((resolve) => {
      
      setTimeout(()=> {
        resolve(products.find((element)=> element.id == id))
      }, 2000)

    }).then((data)=>{

      setItem(data);
      
    })
      
  }, [id])
  
  
  return (
    <div>
      <ItemDetail item={item}/>
    </div>
  )
}
