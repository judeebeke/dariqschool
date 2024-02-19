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
      className={`w-full h-full ${props.styles} opacity-20 dark:opacity-40 -z-10 absolute top-0 left-0`}
    ></div>
  )
}

export default Overlay
