import React, { memo } from "react";
import { useEffect } from "react";
import { createContext,useState } from "react";
import axios from "axios";

export const ShopContext = createContext(null); 
const getDefaultCart = ()=>{
    let cart = {};  
    for(let i=0;i<300+1;i++){
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props)=>{
    const [all_product,setAll_product] = useState([]);
    const [cartItems,setCartItems] = useState(getDefaultCart());
    console.log(all_product);
    useEffect(()=>{
        async function collectData(){
        const auth_token = localStorage.getItem('auth-token');
        const response = await axios("http://localhost:4000/allproducts");
        setAll_product(response.data);
        if(auth_token){
            const resp = await axios.post("http://localhost:4000/getcart",{},{
                headers:{
                    'Accept':"application/form-data",
                    'auth-token': auth_token,
                    "Content-Type":"application/json",
                }
            });
            setCartItems(resp.data);
        }
    }collectData()},[]);

    

    const addToCart = async (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        if(localStorage.getItem('auth-token')){
            const resp = await axios.post("http://localhost:4000/addcart",{
                "itemId":itemId,
            },{
                headers:{
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                }
            });
            console.log(resp.data);
        }
    }
    const removefromCart = async (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            const resp = await axios.post("http://localhost:4000/removefromcart",{
                "itemId":itemId,
            },{
                headers:{
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                }
            });
            console.log(resp.data);
        }
    }
    
    const getTotalAmount = ()=>{
        let totalAmount = 0;
        for(let item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(item));
                totalAmount+=itemInfo.new_price*cartItems[item];
            }
        }
        return totalAmount;
    }
    const getTotalCartItems = ()=>{
        let totalItems = 0;
        for(let item in cartItems){
            if(cartItems[item]>0){
                totalItems+=cartItems[item];
            }
        }
        return totalItems;
    }
    var contextValue = {getTotalCartItems,getTotalAmount,all_product,cartItems,addToCart,removefromCart};
    
    return(
        <ShopContext.Provider value = {contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default memo(ShopContextProvider);