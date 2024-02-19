import React from 'react'
import alumni_image from "../assets/alumni_image.jpeg"

const Alumni = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-y-4 justify-between lg:items-center relative py-16 px-12 mt-9 w-[100vw] h-auto">
    <div className='w-full flex flex-col justify-start items-start'>
        <p className='text-3xl md:text-5xl font-extrabold text-black dark:text-white'>We Have Students Who Excel The World State, Proud!</p>
        <p className="text-base text-black dark:text-white font-semibold pt-3">Our Alumni Students are making waves around the world. There are changing the world through their hardwork and dedication. We are proud of their acheivement.</p>
    <button className="btn border-none w-40 bg-primary p-3 mt-14 text-white rounded-xl h-auto text-base font-semi-bold outline-1 outline-secondary hover:bg-secondary transition-all ease-in-out duration-500">Get Started</button>
    </div>
     <div className='flex justify-center lg:justify-end relative w-full h-auto mt-14 lg:mt-0'>
        <div className="w-5/6 lg:w-4/6 h-auto md:h-[80vh] z-10 mr-1 md:mr-5">
      <img src={alumni_image} loading="lazy" className='w-full h-full object-cover rounded-es-[5rem] rounded-se-[5rem]' alt="Miss Halima Tajanni, Alumni of Dariq School" />
        </div>
        <div className='w-5/6 lg:w-4/6 h-full md:h-[80vh] mx-auto absolute ml-10 mt-6 top-1/2 -translate-y-1/2 bg-primary rounded-es-[5rem] rounded-se-[5rem] z-0'></div>
      </div>
</section>
  )
}

export default Alumni
