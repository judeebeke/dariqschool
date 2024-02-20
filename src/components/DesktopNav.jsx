import React from 'react'

const DesktopNav = () => {
  return (
    <nav className='hidden md:flex justify-end items-center text-black'>
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
