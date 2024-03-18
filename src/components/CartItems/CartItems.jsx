import React from 'react'
import './CartItems.css'
import { useContext } from 'react'
import {ShopContext} from '../../context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
  const {getTotalAmount,all_product,cartItems,removefromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
      {all_product.map((e,i)=>{
        if(cartItems[e.id]>0){
          return <div key={i}>
              <div className='cartitems-format cartitems-format-main'>
                <img src={e.image} alt='' className='carticon-product-icon'/>
                <p>{e.name}</p> {/*product name*/}
                <p>Rs. {e.new_price}</p> {/*product new price*/}
                <button className='cartitems-quantity'>{cartItems[e.id]}</button> {/*product quantities selected*/}
                <p>Rs. {e.new_price*cartItems[e.id]}</p> {/*total value of individual product*/}
                <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removefromCart(e.id)}} alt=''/> {/*remove icon*/}
              </div>
              <hr/>
          </div>
        }
        else{
          return ""
        }
      })}
      <div className='cartitems-down'>
        <div className='cartitems-total'>
          <h1>Cart Totals</h1>
          <div>
            <div className='cartitems-total-item'>
              <p>Subtotal</p>
              <p>Rs. {getTotalAmount()}</p>
            </div>
            <hr/>
            <div className='cartitems-total-item'>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr/>
            <div className='cartitems-total-item'>
              <h3>Total</h3>
              <h3>Rs. {getTotalAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cartitems-promocode'>
          <p>If you have any promo code, Enter it here</p>
          <div className='cartitems-promobox'>
            <input type='text' placeholder='Promo code'/>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CartItems;