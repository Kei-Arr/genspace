import React, { Children } from 'react'
import { Link } from 'react-router-dom'

const ForgotPasswordBox = ({title, subtitle, button, children}) => {
  return (
    <div className='bg-white/80 p-18 rounded-3xl flex flex-column gap-3 max-w-lg'>
        <div>
          <h1 className='!font-semibold eina'>{title}</h1>
          <p className='text-[#808080] text-xl mt-2'>{subtitle}</p>
        </div>

        {children}
        
        <div className='flex flex-column align-items-center gap-2 mt-2'>
          <button  className='bg-[#006D77] w-full text-white font-semibold !rounded-[100px] h-[50px] hover:bg-[#008B97] transition duration-200 ease-in-out'>{button}</button>
          {title=='Check your email'
          ?<p className='text-[#808080] text-sm mt-1'>Didn't receive the email? 
            <span className='text-[#006D77] font-semibold'> Click to resend</span>
          </p>
          :''}
          {title!='Password Reset'?
          <Link to='/'>
            <button className='text-[#808080] flex align-items-center gap-2 '>
              <i class="fa-solid fa-caret-left text-sm"></i>
              <p className='text-sm'>Back to Login</p>
            </button>
          </Link>:''}
        </div>
    </div>
  )
}

export default ForgotPasswordBox
