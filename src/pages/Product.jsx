import React from 'react'
import {useEffect,useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import BreadCrum from '../components/Breadcrum/Breadcrum.jsx';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay.jsx';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox.jsx';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts.jsx';

const Product = () => {
  const {productId} = useParams();
  const [product,setProduct] = useState({});
  useEffect(()=>{
      async function fetchData(){
      const resp = await axios.get(`http://localhost:4000/product/${productId}`);
      setProduct(resp.data[0]);
      console.log("fetched when clicked:",resp.data[0]);
  } fetchData()},[productId]);
  return (
    <div>
      <BreadCrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}
export default Product;