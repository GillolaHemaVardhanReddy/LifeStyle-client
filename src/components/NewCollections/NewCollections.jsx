import React from 'react'
import './NewCollections.css'
import Item from '../Item/Item'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios";

const NewCollections = () => {

  const [new_collection,setNew_collection] = useState([]);

  const getdata = async ()=>{
    const respo = await axios("https://lifestyle-server-n4sv.onrender.com/newcollections");
    setNew_collection(respo.data); 
}
  useEffect(()=>{getdata()},[]);

  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr/> 
        <div className='collections'>
            {new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}
export default NewCollections;