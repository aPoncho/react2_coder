import React from 'react'
import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../../Context/GlobalProvider.jsx';
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { collection, doc, getDoc, getFirestore, query, where } from 'firebase/firestore';


export default function ItemDetailContainer(props) {

  const {id} = useParams();
  const [item, setItem] = useState({})
  
  useEffect(()=> {

    const db = getFirestore();
    
    const qItem = doc(db, 'productos', id);
    getDoc(qItem).then((snapshot) => {
      if (snapshot.exists()) {
        setItem({id: snapshot.id, ...snapshot.data()});
      }
    });

  },[])
  
  return (
    <div>
      <ItemDetail item={item}/>
    </div>
  )
}
