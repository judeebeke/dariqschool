import React from 'react'
// import { createPortal } from 'react-dom'

// const Overlay = (props) => {
//   return (
//     createPortal((<div className={`w-full h-full {props.styles} opacity-90 p-10 -z-10 absolute top-0 left-0`}></div>), document.getElementById("backdropOverlay"))
//   )
// }

const Overlay = props => {
  return (
    <div
      className={`w-full h-full ${props.styles} opacity-25 dark:opacity-90 absolute top-0 left-0 transition-all ease-linear duration-500`}
      onClick={()=>{props.onAction()}}
    ></div>
  )
}

export default Overlay
