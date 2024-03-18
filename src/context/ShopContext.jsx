import React from "react";
import { createContext,useState } from "react";
import all_product from '../components/Assets/all_product';

export const ShopContext = createContext(null); 
const getDefaultCart = ()=>{
    let cart = {};  
    for(let i=0;i<all_product.length+1;i++){
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props)=>{
    const [cartItems,setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItems);
    }
    const removefromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
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
    const contextValue = {getTotalCartItems,getTotalAmount,all_product,cartItems,addToCart,removefromCart};
    return(
        <ShopContext.Provider value = {contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;