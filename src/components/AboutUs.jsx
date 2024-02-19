import React, { useState } from 'react'
import AboutImage from '../assets/about_image.jpg'
import Overlay from '../UI/Overlay'

const AboutUs = () => {
  const [showAccordion, setShowAccordion] = useState(false)

  const handleShowAccordion = () => {
    setShowAccordion(prev => !prev)
  }

  return (
    <section className='flex flex-col-reverse lg:flex-row gap-y-4 justify-between lg:items-center relative py-16 px-12 mt-9 w-[100vw] h-auto'>
      <Overlay styles='bg-tertiary' />
      <div className='flex justify-center lg:justify-start relative w-full h-auto mt-14 lg:mt-0'>
        <div className='w-5/6 lg:w-4/6 h-auto md:h-[80vh] z-10 mr-1 md:mr-5'>
          <img
            src={AboutImage}
            className='w-full h-full object-cover rounded-es-[5rem] rounded-se-[5rem]'
          />
        </div>
        <div className='w-5/6 lg:w-4/6 h-full md:h-[80vh] mx-auto absolute ml-6 mt-6 top-1/2 -translate-y-1/2 bg-primary rounded-es-[5rem] rounded-se-[5rem] z-0'></div>
      </div>
      <div className='w-full flex flex-col lg:justify-end items-start lg:items-end'>
        <h2 className='text-[1rem] font-extrabold text-primary'>About Us</h2>
        <p className='text-3xl md:text-3xl font-extrabold text-black'>
          We Offer The Best Services
        </p>
        <button
          className='btn w-80 flex justify-center items-center gap-x-3 border-b-4  border-gray-400 bg-white p-3 mt-5 text-primary rounded-xl h-auto text-base font-semi-bold hover:bg-white hover:border-primary transition-all ease-in-out duration-500'
          onClick={handleShowAccordion}
        >
          <i>Icon</i>Premium Services Provided{' '}
          <i>{showAccordion ? 'O' : 'C'}</i>
        </button>
      </div>
    </section>
  )
}

export default AboutUs
