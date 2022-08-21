import React from 'react'
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList.jsx'


export default function ItemListContainer(props) {

    const [items, setItems] = useState([]);

    useEffect(() => {
      
        let products = [{id: "001", name: "Booster pack Pokemon", price: 3500, stock: 10},{id: "002", name: "Deck Pokemon", price: 12000, stock: 24}]
    
        new Promise((resolve) => {

            setTimeout(() => {
               resolve(products); 
            }, 2000)
            
        }).then((data)=>{
            setItems(data)
        })

    }, [])
    
    
    return (
        <div>
            <h1>{props.greeting}</h1>
            {items.length ?
                <ItemList items={items}/>: 
                <></>}
        </div>
  )
}
