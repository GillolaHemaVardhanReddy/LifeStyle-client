import React, { useState,useEffect } from 'react'
import './css/Profile.css'
import profile_pic from '../components/Assets/profile_pic.png'
import axios from 'axios'
import ProfileDetails from '../components/ProfileDetails/ProfileDetails'
const Profile = () => {
  const [userDetails,setUserDetails] = useState();
  useEffect(()=>{
    async function userData(){
    const auth_token = localStorage.getItem('auth-token');
    if(auth_token){
        const response = await axios("http://localhost:4000/profile",{
                headers:{
                'Accept':"application/form-data",
                'auth-token': auth_token,
                "Content-Type":"application/json",
            }
            });
            setUserDetails(response.data);
        }
    }userData()},[]);
  return (
    <>
      <ProfileDetails profile_pic = {profile_pic}/>
    </>
  )
}

export default Profile