import React, { useState } from 'react'
import Overlay from '../UI/Overlay'
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenu = () => {
    // const mobileNav = document.getElementById('mobileNav');

    // console.log(mobileNav)

    // // mobileNav.classList.add('slide-in');
    // mobileNav.classList.remove('slide-out');

    setIsMenuOpen(prev => !prev)
    // if(!isMenuOpen === true) {
    //   setTimeout(() => {
    //   }, 500)
    // }
  }

  return (
    <>
      <button className="text-xl font-700 text-primary hover:text-white hover:bg-primary p-2 transition-all ease-linear duration-300 rounded-md outline-1 outline-secondary" onClick={handleMenu}><RiMenu3Line /></button>

        {isMenuOpen && <Overlay styles="bg-primary z-30 transition-all ease-linear duration-700" onAction={handleMenu} />}

     <nav id="mobileNav" className={`w-5/6 h-[100vh] fixed z-40 rounded-ss-2xl ${isMenuOpen ? "top-0 right-0" : "-top-0 -right-full"} transition-all ease-linear duration-700 bg-primary md:hidden`}>
     <button onClick={handleMenu} className='text-2xl absolute top-10 right-4 text-white hover:text-primary hover:bg-white p-2 transition-all ease-linear duration-500 rounded-md outline-1 outline-white'><IoCloseSharp /></button>
        <ul
          className="flex flex-col justify-start font-500 text-lg pt-10 items-center gap-x-10 gap-y-16 py-2 text-white"
        >
          <li className='px-10 border-b-2 border-b-white pt-12 w-full'>
            <a href="/" className='pt-1 px-1 transition-all ease-linear duration-300 rounded-md outline-1 outline-white'>Home</a>
          </li>
          <li className='px-10 border-b-2 border-b-white w-full'>
            <a href="/" className='pt-1 px-1 transition-all ease-linear duration-300 rounded-md outline-1 outline-white'>About Us</a>
          </li>
          <li className='px-10 border-b-2 border-b-white w-full'>
            <a href="/" className='pt-1 px-1 transition-all ease-linear duration-300 rounded-md outline-1 outline-white'>Pricing</a>
          </li>
          <li className='px-10 border-b-2 border-b-white w-full'>
            <a href="/" className='pt-1 px-1 transition-all ease-linear duration-300 rounded-md outline-1 outline-white'>Contact</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default MobileNav
