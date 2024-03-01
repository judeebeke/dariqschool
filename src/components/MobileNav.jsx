import React, { useEffect, useState } from 'react'
import Overlay from '../UI/Overlay'
import { RiMenu3Line } from 'react-icons/ri'
import { IoCloseSharp } from 'react-icons/io5'
import { NavigationMenu } from './../localdata';

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

  const handleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  const handleCloseSubMenu = () => {
    const mobileSubMenu = document.getElementById("submenu")
    

      if (isSubMenuOpen === false) {
        setTimeout(() =>  {
          mobileSubMenu.classList.add('hidden')
        }, 500)
      }

  }

  useEffect(() => {
    const mobileMenu = document.getElementById('mobileMenu')

    if (isMenuOpen === false) {
      setTimeout(() =>  {
        mobileMenu.classList.add('hidden')
      },700)
    } else {
      mobileMenu.classList.remove('hidden')
    }
  }, [isMenuOpen])

  useEffect(() => {
    handleCloseSubMenu()
  }, [isSubMenuOpen])


  return (
    <>
      <button
        className='text-xl font-700 text-primary hover:text-white hover:bg-primary p-2 transition-all ease-linear duration-300 rounded-md outline-1 outline-secondary'
        onClick={handleMenu}
      >
        <RiMenu3Line />
      </button>

      {isMenuOpen && (
        <Overlay
          styles='bg-primary dark:bg-white z-30 transition-all ease-linear duration-700'
          onAction={handleMenu}
        />
      )}

      <nav
        id='mobileNav'
        className={`w-5/6 h-full fixed overflow-y-auto pb-10 z-50 rounded-ss-2xl ${
          isMenuOpen ? 'top-0 right-0' : '-top-0 -right-full'
        } transition-all ease-linear duration-700 bg-primary md:hidden`}
      >
        <button
          onClick={handleMenu}
          className='text-2xl absolute top-10 right-4 text-white hover:text-primary hover:bg-white p-2 transition-all ease-linear duration-500 rounded-md outline-1 outline-white'
        >
          <IoCloseSharp />
        </button>
        <ul
          id='mobileMenu'
        className={`menu bg-transparent w-56 rounded-box flex flex-col justify-start font-500 text-lg pt-20 items-center gap-x-10 gap-y-16 py-2 `}
        >
          
         { NavigationMenu.map((item) => {
          if(item.navLink.length < 1) {
           return ( 
           
           <li className='border-b-2 text-white hover:text-black border-b-white dark:border-b-gray-700 w-full ' key={item.id}>
             <details>
            <summary
              id='infoNavSubmenu'
              className='ms-10 pt-1 px-1  transition-all ease-linear duration-300 rounded-md outline-1 outline-white'
              onClick={()=>setIsSubMenuOpen(prev => !prev)}
            >
              {item.navText}
            </summary>
            <ul id="submenu" className={`${isSubMenuOpen ? "block" : ""}`} aria-labelledby='infoNavSubmenu' aria-hidden={isSubMenuOpen}>
              {item.submenu.map(subItem => {
                return (
                  <li  className={`text-white hover:text-black `} key={subItem.id}>
                  <a
                    href={subItem.navLink}
                    className='ms-10 pt-1 px-1 transition-all ease-linear duration-300 rounded-md '
                  >
                    {subItem.navText}
                  </a>
                </li>
                )
              })}
            </ul>
            </details>
          </li>)
          } else {
            return (
              <li className=' border-b-2 text-white hover:text-black border-b-white dark:border-b-gray-700 w-full ' key={item.id}>
              <a
                href={item.navLink}
                className={`ms-10 pt-1 px-1 transition-all ease-linear duration-300 rounded-md outline-1 outline-white active:text-primary active:bg-white`}
              >
                {item.navText}
              </a>
            </li>
            )
          }
         })}
         
        </ul>
      </nav>
    </>
  )
}

export default MobileNav
