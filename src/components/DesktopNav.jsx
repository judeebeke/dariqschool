import React from 'react'
import logo from '../assets/logo_nobg.png'

const DesktopNav = () => {
  return (
    <nav className='w-[100vw] px-12 pt-9 flex justify-between items-center text-black'>
      <a href='/' className='flex justify-center items-center gap-x-3 text-xl cursor-pointer'>
        <img
          src={logo}
          className='w-16 h-auto'
          alt='Dariq International School Logo'
        />
        <span><span className='text-primary'>Dariq</span> Int'l School</span>
      </a>
      <ul className='flex justify-center items-center gap-x-10 p-2 text-primary'>
        <li>
          <a href='/' className='hover:text-white hover:bg-secondary p-2 transition-all ease-linear duration-300 rounded-md'>Home</a>
        </li>
        <li>
          <a href='/' className='hover:text-white hover:bg-secondary p-2 transition-all ease-linear duration-300 rounded-md'>About Us</a>
        </li>
        <li>
          <a href='/' className='hover:text-white hover:bg-secondary p-2 transition-all ease-linear duration-300 rounded-md'>Pricing</a>
        </li>
        <li>
          <a href='/' className='hover:text-white hover:bg-secondary p-2 transition-all ease-linear duration-300 rounded-md'>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default DesktopNav
