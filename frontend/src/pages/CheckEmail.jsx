import React from 'react'
import passwordBg from '../assets/images/passwordBg.png'
import '../css/global.css'
import { Link } from 'react-router-dom'
import ForgotPasswordBox from '../components/ForgotPasswordBox'


const CheckEmail = () => {
  return (
    <div 
      style={{ backgroundImage: `url(${passwordBg})` }} 
      className='bg-cover bg-center w-screen h-screen flex align-items-center justify-content-center text-center'
    >
     <ForgotPasswordBox 
        title="Check your email" 
        subtitle={'We sent a password reset link to EmailOfUser@GenSpace.com'}
        button={'Open email app'}
      >
        
      </ForgotPasswordBox>
    </div>
  )
}

export default CheckEmail
