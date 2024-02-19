import React from 'react'
import { createPortal } from 'react-dom'

import logo from "../assets/logo_nobg.png"

const BackDropLogo = (props) => {
  return (
    createPortal(<div className={`${props.styles} z-0 fixed filter blur-md`}>
        <img src={logo} className="w-full object-cover" />
    </div>, document.getElementById("backdropOverlay"))
  )
}

export default BackDropLogo