import React from 'react'
import './Popular.css'
import Item from '../Item/Item'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios";

const Popular = () => {
  const [data_product,setData_product]  = useState([]);

  useEffect(()=>{
    async function fetchData(){
    const resp = await axios.get("https://lifestyle-server-n4sv.onrender.com/popularinwomen");
    setData_product(resp.data);
  } fetchData()},[])

  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr/>
        <div className='popular-item'>
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}
export default Popular;