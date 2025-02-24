import React from 'react'
import passwordBg from '../assets/images/passwordBg.png'
import '../css/global.css'
import { Link } from 'react-router-dom'
import ForgotPasswordBox from '../components/ForgotPasswordBox'


const SetNewPassword = () => {
  return (
    <div 
      style={{ backgroundImage: `url(${passwordBg})` }} 
      className='bg-cover bg-center w-screen h-screen flex align-items-center justify-content-center text-center'
    >
      <ForgotPasswordBox 
        title="Set new password" 
        subtitle={'Your new password must be different to previously used passwords'}
        button={'Reset Password'}
      >
        <div>
          <input type='password' className='border-b p-2 border-gray-300 w-full' placeholder='Password'/>
          <input type='password' className='border-b p-2 border-gray-300 w-full mt-2' placeholder='Confirm Password'/>
        </div>
      </ForgotPasswordBox>
    </div>
  )
}

export default SetNewPassword
