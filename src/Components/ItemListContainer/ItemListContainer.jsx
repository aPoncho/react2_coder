import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList.jsx'


export default function ItemListContainer(props) {

    const [items, setItems] = useState([]);
    const {categoryid} = useParams();

    useEffect(() => {
      
        let products = [{id: "001", category: "Pokemon", name: "Booster pack Pokemon", price: 3500, stock: 10},{id: "002", category: "Pokemon", name: "Deck Pokemon", price: 12000, stock: 24},{id: "003", category: "Vanguard", name: "Deck Vanguard", price: 8000, stock: 19}]
    
        new Promise((resolve) => {

            let productsFiltered = [];

            setTimeout(() => {
                productsFiltered = categoryid ? products.filter((element)=> element.category == categoryid) : products
               resolve(productsFiltered); 
            }, 2000)
            
        }).then((data)=>{
            setItems(data)
        })

    }, [categoryid])
    
    
    return (
        <div>
            <h1>{props.greeting}</h1>
            {items.length ?
                <ItemList items={items}/>: 
                <></>}
        </div>
  )
}
