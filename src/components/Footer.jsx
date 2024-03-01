import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.jpg'
const Footer = () => {
    const [getCurrentYear, setGetCurrentYear] = useState("2024");

  useEffect(() => {
    let currentYear = new Date();
    setGetCurrentYear(currentYear.getFullYear());
  }, [])
  
  return (
    <section className='flex flex-col gap-y-4 justify-between items-center relative px-12 mt-9 w-[100vw] h-auto'>
      <div className='flex w-[100vw] h-auto bg-white dark:bg-tertiary'>
        <img
          src={Logo}
          className='w-[10%] h-auto object-cover hidden md:block'
          alt='School Logo'
        />
        <div className='flex justify-center flex-col items-center w-full md:w-[90%] bg-primary dark:bg-black'>
          <ul className='grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-3 md:gap-x-24 py-5 md:py-0 md:pt-5 list-none'>
            <li className='text-sm text-white hover:text-black transition-all ease-in-out duration-500'>
              <a>HOME</a>
            </li>
            <li className='text-sm text-white hover:text-black transition-all ease-in-out duration-500'>
              <a>OTHER PAGE</a>
            </li>
            <li className='text-sm text-white hover:text-black transition-all ease-in-out duration-500'>
              <a>QUICK LINKS</a>
            </li>
            <li className='text-sm text-white hover:text-black transition-all ease-in-out duration-500'>
              <a>OTHER PAGE</a>
            </li>
            <li className='text-sm text-white hover:text-black transition-all ease-in-out duration-500'>
              <a>OTHER PAGE</a>
            </li>
            <li className='text-sm text-white hover:text-black transition-all ease-in-out duration-500'>
              <a>OTHER PAGE</a>
            </li>
          </ul>
          <small className='text-xs my-5 text-center text-white'>
            All rights reserved &copy; {getCurrentYear} <br /> Tradesmark of Dariq International
            School
          </small>
        </div>
      </div>
    </section>
  )
}

export default Footer
