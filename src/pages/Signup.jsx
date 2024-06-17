import React,{useState} from 'react'
import './css/Signup.css'
import { Link } from 'react-router-dom';
import axios from "axios";

const Signup = () => {

  const [formData,setFormData] = useState({
    username: "",
    email: "",
    password:"",
    repassword: "",
  });

  const signup = async ()=>{
    if(formData.password!==formData.repassword){
      alert("Password MisMatch");
      return;
    }
    if(formData.username.length>0 && formData.email.length>0 && formData.password.length>0 && formData.repassword.length>0){
      console.log("signup function executed",formData);
      try{
        const response = await axios.post("https://lifestyle-server-n4sv.onrender.com/signup",formData,{
          headers:{
            Accept: 'application/form-data',
            'Content-Type':'application/json',
          }
        });
        if(response.data.status){
          localStorage.setItem('auth-token',response.data.token);
          window.location.replace("/");
        }
        else{
          alert(response.data.errors);
        }
      }catch(e){
        console.log(e.message);
      }
    }
    else{
      alert("enter All fields");
    }
  }
  const formHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }
  return (
    <div className='Signup'>
        <div className='Signup-container'>
          <h1>Signup</h1>
          <div className='Signup-fields'>
            <input type='text' required placeholder='User Name' name='username' onChange={(e)=>{formHandler(e)}} value={formData.username}/>
            <input type='email' required placeholder='Email Address' name='email' onChange={(e)=>{formHandler(e)}} value={formData.email}/>
            <input type='password' required placeholder='Enter password' name='password' onChange={(e)=>{formHandler(e)}} value={formData.password}/>
            <input type='password' required placeholder='Enter password again' name='repassword'onChange={(e)=>{formHandler(e)}} value={formData.repassword}/>
          </div>
          <div className='Signup-agree'>
            <input type='checkbox' name='' id=''/>
            <p>By Selecting I agree the terms of use & privacy policy</p>
          </div>
          <button onClick={()=>{signup()}}>Continue</button>
          <p className='Signup-Signup'>Already have an account?<Link to='/login'><span>Login</span></Link></p>
        </div>
    </div>
  )
}
export default Signup;