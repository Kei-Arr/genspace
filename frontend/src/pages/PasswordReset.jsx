import React from 'react'
import passwordBg from '../assets/images/passwordBg.png'
import '../css/global.css'
import { Link } from 'react-router-dom'
import ForgotPasswordBox from '../components/ForgotPasswordBox'

const PasswordReset = () => {
  return (
    <div 
      style={{ backgroundImage: `url(${passwordBg})` }} 
      className='bg-cover bg-center w-screen h-screen flex align-items-center justify-content-center text-center'
    >
      <ForgotPasswordBox 
        title="Password Reset" 
        subtitle={'Your password has been successfully reset. Click Continue to return to login page.'}
        button={'Continue'}
      >
      </ForgotPasswordBox>
    </div>
  )
}

export default PasswordReset
