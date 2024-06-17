import React from 'react'
import './css/Login.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";

const Login = () => {
  const [formData,setFormData] = useState({
    email: "",
    password:"",
  });
  const login = async ()=>{
    console.log("login function executed",formData);
    const response = await axios.post("https://lifestyle-server-n4sv.onrender.com/login",formData,{
      headers:{
        Accept: 'application/form-data',
        'Content-Type':'application/json'
      }
    });
    if(response.data.success){
      localStorage.setItem('auth-token',response.data.token);
      window.location.replace("/");
    }
    else{
      alert(response.data.errors);
    }
  }

  const formHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }
  return (
    <div className='login'>
      <div className='login-container'>
        <h1>Login</h1>
        <div className='login-fields'>
          <input type='email' placeholder='Email Address' name='email' onChange={(e)=>{formHandler(e)}} value={formData.email}/>
          <input type='password' placeholder='password'onChange={(e)=>{formHandler(e)}} name='password'value={formData.password}/>
        </div>
        <div className='login-agree'>
          <input type='checkbox' name='' id=''/>
          <p>By continuing I agree the terms of use & privacy policy</p>
        </div>
        <button onClick={()=>{login()}}>Continue</button>
        <p className='login-login'>Don't have an account?<Link to='/signup'><span>Signup</span></Link></p>
      </div>
    </div>
  )
}
export default Login;