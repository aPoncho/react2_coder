import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList.jsx'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

export default function ItemListContainer(props) {

    const [items, setItems] = useState([]);
    const { categoryid } = useParams();

    useEffect (()=>{ 
        const db = getFirestore()
        

        const collProductos = categoryid ? query(collection(db, 'productos'), where('category', '==', categoryid)) : collection(db, 'productos');
        
        getDocs(collProductos).then((snapshot) => {
          
          if (snapshot.size === 0) {
            console.log('Sin resultados')
          } 
          
          setItems (snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() })))
        });
      }, [])

      /*
const q = query(collection(db, 'productos'), where('category', '==', categoryid));
getDocs(q).then((snapshot) => {
    if (snapshot.size === 0) {
         console.log('Sin Resultados')
    }
    setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
})
*/

//    useEffect(() => {
      
//         const products = [{id: "001", category: "Pokemon", name: "Booster pack Pokemon", price: 3500, stock: 10},{id: "002", category: "Pokemon", name: "Deck Pokemon", price: 12000, stock: 24},{id: "003", category: "Vanguard", name: "Deck Vanguard", price: 8000, stock: 19}]
//         console.log(products)
    
//         new Promise((resolve) => {

//             let productsFiltered = [];
//             productsFiltered = categoryid ? products.filter((element)=> {
//                 console.log('25 :', element.category, categoryid)
//                 return element.category === categoryid}) : products
//             resolve(productsFiltered); 
            
//         }).then((data)=>{
//             setItems(data)  
//         })

//     }, [categoryid])


    
    return (
        <div>
            <h1>{props.greeting}</h1>
            {items.length ?
                <ItemList items={items}/>: 
                <></>}
        </div>
  )
}
