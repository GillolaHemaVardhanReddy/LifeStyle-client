import React from 'react'
import './ProfileDetails.css'

const ProfileDetails = (props) => {
  return (
    <>
        <div className='profile'>
        <div className='profile-left'>
          <img src={props.profile_pic} alt=""/>
          <button className='profile-edit'>Edit</button>
          <div className='detail-box'>
            <div className='details'>
              <p>Name:</p>
              <p>Hema vardhan reddy</p>
            </div>
            <div className='details'>
              <p>Address:</p>
              <p>IIIT basar rgukt campus Pin: 509381</p>
            </div>
            <div className='details'>
              <p>mobile number:</p>
              <p>9390633050</p>
            </div>
          </div>
          { localStorage.getItem('auth-token') && <button className='log-out-btn' onClick={()=> {localStorage.removeItem('auth-token'); window.location.replace("/")}}>Logout</button>}
        </div>
        <div className='profile-right'>
        </div>
      </div>
    </>
  )
}

export default ProfileDetails