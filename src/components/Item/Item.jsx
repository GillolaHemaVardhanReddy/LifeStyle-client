import React from 'react'
import {Link} from 'react-router-dom'
import './Item.css';
const Item = (props) => {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}>
          <img onClick={window.scrollTo({top: 0, behavior: 'smooth' })} src={props.image} alt=''/>
          <p style={{color:'black'}}>{props.name}</p>
          <div className='item-prices'>
              <div className='item-price-new'>
                  Rs. {props.new_price}
              </div>
              <div className='item-price-old'>
                  Rs. {props.old_price}
              </div>
          </div>
        </Link>
    </div>
  )
}
export default Item;