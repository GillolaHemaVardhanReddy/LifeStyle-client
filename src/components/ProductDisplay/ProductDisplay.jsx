import React,{memo, useState} from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';


const ProductDisplay = (props) => {
    const {product} = props;
    const [size,setSize] = useState('Z');
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            </div>
            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={product.image} alt=''/>
            </div>
        </div>
        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className='productdisplay-right-stars'>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_dull_icon} alt=''/>
                <p>(122)</p>
            </div>
            <div className='productdisplay-right-prices'>
                <div className='productdisplay-right-price-old'>Rs. {product.old_price}</div>
                <div className='productdisplay-right-price-new'>Rs. {product.new_price}</div>
            </div>
            <div className='productdisplay-right-description'>
            All that is needed to fix this is “min-height” and “min-width” in your CSS. 
            this makes a Div responsive. minimum height will prevent the Divs from overlapping on each other
            </div>
            <div className='productdisplay-right-size'>
                <h1>Select Size</h1>
                <div className='productdisplay-right-sizes'>
                    <div onClick={()=>setSize('S')} className={size==='S'?'selected':'notselected'}>S</div>
                    <div onClick={()=>setSize('M')} className={size==='M'?'selected':'notselected'}>M</div>
                    <div onClick={()=>setSize('L')} className={size==='L'?'selected':'notselected'}>L</div>
                    <div onClick={()=>setSize('XL')} className={size==='XL'?'selected':'notselected'}>XL</div>
                    <div onClick={()=>setSize('XXL')} className={size==='XXL'?'selected':'notselected'}>XXL</div>
                </div>
            </div>
            <button onClick={()=> size==='Z'? alert("please select a size") : addToCart(product.id)}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category: </span>Women, T-shirt, Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags: </span>Modern, Latest</p>
        </div>
        
    </div>
  )
}
export default memo(ProductDisplay);