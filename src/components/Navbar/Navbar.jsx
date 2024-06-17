import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../Assets/logo.png";
import {Link } from "react-router-dom";
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { useRef } from 'react';
import nav_dropdown from '../Assets/nav_dropdown.png'
import profile_pic from '../Assets/profile_pic.png'

const Navbar = () => {
    const [menu,setMenu]=useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();
    const dropdown_toggle = (e)=>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
    
  return (
    <div className='navbar'>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt=''/>
        <div className='nav-logo'>
            <Link to='/'><img onClick={()=>{setMenu("shop")}} src={logo} alt='logo'/></Link>
            <p>LIFESTYLE</p>
        </div>
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none"}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:"none"}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:"none"}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none"}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            { localStorage.getItem('auth-token') 
                ? <button className='log-out-btn' onClick={()=> {localStorage.removeItem('auth-token'); window.location.replace("/")}}>Logout</button>
                :<Link to='/login'><button>login</button></Link>
            }
            <div className='nav-login-cart'>
                <Link to="/cart">  
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                    </svg>
                    <p>Bag</p>
                </Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    </div>
  )
}
export default Navbar;