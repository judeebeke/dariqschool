import React from 'react'

const AvatarUI = (props) => {
  return (
    <div className={`${props.styles}`}>
        <img src={props.image} className="w-full object-cover rounded-full border-2 border-secondary" alt='' />
    </div>
  )
}

export default AvatarUI;