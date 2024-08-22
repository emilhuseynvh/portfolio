import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Footer() {

  const location = useLocation()

  return (
    <div className='flex flex-col items-center pt-32 pb-[78px]'>
      <img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/logo.svg" alt="Logo" />
      <ul className='flex mt-[33px] mb-[37px] gap-11'>
        <Link to='/' className={`cursor-pointer duration-300 ${location.pathname === '/' ? 'text-white_' : 'text-[#9f9f9f] hover:text-white_'}`}>Home</Link>
        <Link to='/about' className={`cursor-pointer duration-300 ${location.pathname === '/about' ? 'text-white_' : 'text-[#9f9f9f] hover:text-white_'}`}>About</Link>
        <Link to='/work' className='text-[#9f9f9f] hover:text-white_ cursor-pointer duration-300'>Works</Link>
        <Link to='/contact' className='text-[#9f9f9f] hover:text-white_ cursor-pointer duration-300'>Contact</Link>
      </ul>
      <p className='text-[#727272] text-sm font-medium'>&copy; All rights reserved by <span className='text-[#5B78F6]'>Emil Huseynov</span></p>
    </div >
  )
}

export default Footer