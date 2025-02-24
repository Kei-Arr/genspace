import React from 'react'
import logo from '../assets/logo/Logo1.png'
import google from '../assets/images/google.png'
import { Link } from 'react-router-dom'
import '../css/global.css'


const Login = () => {
  return (
    <div className='grid grid-cols-[1fr_700px] w-screen h-screen bg-white p-3'>
        {/* logo */}
        <div className='flex align-items-center justify-content-center'>
          <img src={logo} className='w-3xl'/>
        </div>

        {/* login page */}
        <div className='bg-[#EDF6F9] rounded-lg flex flex-col align-items-center justify-content-center gap-5 px-35 relative'>
          <h1 className='!font-semibold !text-[#006D77]'>Welcome Back!</h1>
          {/* input */}
          <div className='w-full flex flex-col gap-2'>
            <input type='text' className='border-b p-2 border-gray-300 w-full' placeholder='Email'/>
            <input type='text' className='border-b p-2 border-gray-300 w-full mt-3' placeholder='Password'/>
            {/* remember and forgot password */}
            <div className='flex justify-content-between align-items-center text-sm'>
                {/* remember password */}
                <div className='flex align-items-center gap-1'>
                  <input type='checkbox' className=''/>
                  <p className=''>Remember for 30 days</p>
                </div>
                {/* forgot pass */}
                <Link to='/forgot-password'>
                  <p className='text-[#808080]'>Forgot password?</p>
                </Link>
            </div>
          </div>
          {/* buttons */}
          <div className='w-full'>
            <button  className='bg-[#006D77] w-full text-white font-semibold !rounded-[100px] h-[50px] hover:bg-[#008B97] transition duration-200 ease-in-out'>Log In</button>
            <hr/>
            <button className='flex justify-content-center align-items-center border-2 border-[#5C5C5C] bg-white w-full font-semibold !rounded-[100px] gap-2 h-[50px]'>
              <img src={google} className='w-[30px] h-[30px]'/>
              <p className='text-[#5C5C5C]'>Log In with Google</p>
            </button>
          </div>
          <p className='text-sm text-[#808080] absolute bottom-15'>Don't have an account? 
            <Link to='/signup'>
              <span className='font-semibold text-[#006D77] cursor-pointer'> Sign Up</span>
            </Link>
          </p>
        </div>
    </div>
  )
}

export default Login
