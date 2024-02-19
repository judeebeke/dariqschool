// import { useState } from 'react'

import BackDropLogo from "./UI/BackDropLogo"
import Overlay from "./UI/Overlay"
import DesktopNav from "./components/DesktopNav"
import MobileNav from "./components/MobileNav"
import LandingPage from "./pages/LandingPage"

function App() {

  return (
    <>
      <BackDropLogo styles="w-48 md:w-52 top-3 md:top-14 left-3 md:left-14" />
    <BackDropLogo styles="w-48 md:w-52 top-3 md:top-14 right-3 md:right-14" />
    <BackDropLogo styles="w-48 md:w-52 bottom-3 md:bottom-14 right-3 md:right-14" />
    <BackDropLogo styles="w-48 md:w-52 bottom-3 md:bottom-14 left-3 md:left-14" />
    <header>
      <DesktopNav />
      <MobileNav />
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