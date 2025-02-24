import React from 'react';
import signup from '../assets/images/signup.jpeg';
import google from '../assets/images/google.png'
import { Link } from 'react-router-dom';
import '../css/global.css'

const Signup = () => {
  return (
    <div className='w-screen h-screen grid grid-cols-[700px_1fr] bg-white p-3 gap-2'>
      {/* form */}
      <div className='bg-[#EDF6F9] rounded-lg flex flex-col justify-content-center align-items-center w-full h-full gap-5 px-40'>
        <h1 className='!font-semibold !text-[#006D77]'>Create an account</h1>
        {/* fname, lname, email, contact no */}
        <div className='flex flex-column gap-4 w-full'>
          <input type='text' className='border-b pb-2 border-gray-300 w-full' placeholder='First Name'/>
          <input type='text' className='border-b pb-2 border-gray-300 w-full' placeholder='Last Name'/>
          <input type='text' className='border-b pb-2 border-gray-300 w-full' placeholder='Email'/>
          <input type='text' className='border-b pb-2 border-gray-300 w-full' placeholder='Contact Number'/>
          <input type='password' className='border-b pb-2 border-gray-300 w-full' placeholder='Password'/>
          <input type='password' className='border-b pb-2 border-gray-300 w-full' placeholder='Confirm Password'/>
        </div>
        {/* buttons */}
        <div className='w-full'>
          <button  className='bg-[#006D77] w-full text-white font-semibold !rounded-[100px] h-[50px] hover:bg-[#008B97] transition duration-200 ease-in-out'>Log In</button>
          <hr/>
          <button className='flex justify-content-center align-items-center border-2 border-[#5C5C5C] bg-white w-full font-semibold !rounded-[100px] gap-2 h-[50px]'>
            <img src={google} className='w-[30px] h-[30px]'/>
            <p className='text-[#5C5C5C]'>Sign Up with Google</p>
          </button>
        </div>
        <p className='text-sm text-[#808080] absolute bottom-15'>Already have an account?
          <Link to='/'>
            <span className='font-semibold text-[#006D77] cursor-pointer'> Sign In</span>
          </Link> 
        </p>
      </div>
      {/* image */}
      <div className="relative rounded-lg overflow-hidden" >
        <div className='absolute bg-opacity-50 bg-white w-full h-full'></div>
        <img src={signup} className='object-cover w-full h-full '/>
      </div>
    </div>
  )
}

export default Signup
