import React from 'react'
import passwordBg from '../assets/images/passwordBg.png'
import '../css/global.css'
import { Link } from 'react-router-dom'
import ForgotPasswordBox from '../components/ForgotPasswordBox'


const ForgotPassword = () => {
  return (
    <div 
      style={{ backgroundImage: `url(${passwordBg})` }} 
      className='bg-cover bg-center w-screen h-screen flex align-items-center justify-content-center text-center'
    >
      <ForgotPasswordBox 
        title="Forgot Password" 
        subtitle={"No worries, we'll send you reset instructions"}
        button={'Reset Password'}
      >
        <input type='text' className='border-b p-2 border-gray-300 w-full' placeholder='Email'/>
      </ForgotPasswordBox>
    </div>
  )
}

export default ForgotPassword
