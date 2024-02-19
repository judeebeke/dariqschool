import React from 'react'
import logo from '../assets/logo_nobg.png'

const DesktopNav = () => {
  return (
    <nav className='w-[100vw] px-12 pt-9 flex justify-between items-center text-black'>
      <a href='/' className='flex justify-center items-center gap-x-3 text-xl cursor-pointer pr-3 outline-1 outline-secondary'>
        <img
          src={logo}
          className='w-16 h-auto'
          alt='Dariq International School Logo'
        />
        <h6 className='dark:text-white'><span className='text-primary'>Dariq</span> Int'l School</h6>
      </a>
      <ul className='flex justify-center items-center gap-x-10 p-2 text-primary'>
        <li>
          <a href='/' className='hover:text-white hover:bg-secondary p-2 transition-all ease-linear duration-300 rounded-md outline-1 outline-secondary'>Home</a>
        </li>
        <li>
          <a href='/' className='hover:text-white hover:bg-secondary p-2 transition-all ease-linear duration-300 rounded-md outline-1 outline-secondary'>About Us</a>
        </li>
        <li>
          <a href='/' className='hover:text-white hover:bg-secondary p-2 transition-all ease-linear duration-300 rounded-md outline-1 outline-secondary'>Pricing</a>
        </li>
        <li>
          <a href='/' className='hover:text-white hover:bg-secondary p-2 transition-all ease-linear duration-300 rounded-md outline-1 outline-secondary'>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default DesktopNav
