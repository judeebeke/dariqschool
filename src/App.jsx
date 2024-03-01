// import { useState } from 'react'

import BackDropLogo from './UI/BackDropLogo'
import Overlay from './UI/Overlay'
import DesktopNav from './components/DesktopNav'
import MobileNav from './components/MobileNav'
import LandingPage from './pages/LandingPage'
import logo from './assets/logo_nobg.png'

function App () {
  return (
    <>
      <BackDropLogo styles='w-36 md:w-52 top-3 md:top-14 left-3 md:left-14' />
      <BackDropLogo styles='w-36 md:w-52 top-3 md:top-14 right-3 md:right-14' />
      <BackDropLogo styles='w-36 md:w-52 bottom-3 md:bottom-14 right-3 md:right-14' />
      <BackDropLogo styles='w-36 md:w-52 bottom-3 md:bottom-14 left-3 md:left-14' />
      <header className='w-[100vw] flex justify-between px-8 pt-6 md:px-12 md:pt-9 items-center text-black'>
        <a
          href='/'
          className='flex justify-center items-center gap-x-3 text-xl cursor-pointer pr-3 outline-1 outline-secondary'
        >
          <img
            src={
              'https://ik.imagekit.io/b8uget7ig/landingimages/logo_nobg.png?updatedAt=1708352083714' ||
              logo
            }
            className='w-16 h-auto'
            alt='Dariq International School Logo'
          />
          <h6 className='dark:text-white'>
            <span className='text-primary'>Dariq</span> Int'l School
          </h6>
        </a>
        <DesktopNav />
        <div className='md:hidden'>
          <MobileNav />
        </div>
      </header>
      <main>
        <LandingPage />
      </main>
    </>
  )
}

export default App

// import React from 'react'
// import { useMediaQuery } from 'react-responsive'

// const Example = () => {
//   const isDesktopOrLaptop = useMediaQuery({
//     query: '(min-width: 1224px)'
//   })
//   const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
//   const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
//   const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
//   const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

//   return (
//     <div>
//       <h1>Device Test!</h1>
//       {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
//       {isBigScreen && <p>You have a huge screen</p>}
//       {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
//       <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
//       {isRetina && <p>You are retina</p>}
//     </div>
//   )
// }
