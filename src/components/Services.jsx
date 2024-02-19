import React from 'react'
import ictLab from '../assets/ict_lab.jpg'
import Overlay from '../UI/Overlay'

const Services = () => {
  return (
    <section className='flex flex-col gap-y-4 justify-between lg:items-center relative py-16 px-12 mt-9 w-[100vw] h-auto'>
      <Overlay styles='bg-tertiary' />
      <h2 className='text-[1rem] font-extrabold text-primary'>LEARNING</h2>
      <p className='text-3xl md:text-3xl mb-3 font-extrabold text-black dark:text-white'>
        We Offer Subjects That Supports All Disciplines
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 md:gap-x-16'>
        <div className='flex flex-col justify-start items-start px-5 gap-y-2 rounded-lg min-w-52 bg-white border-b-4 border-b-gray-400 hover:border-primary transition-all ease-in-out duration-500'>
          <img src={ictLab} className='w-full h-3/5 rounded-lg object-cover' alt='ICT LAb' />
          <h6 className='text-base font-bold text-black'>
            Information Technology
          </h6>
          <p className='text-sm text-gray-500'>
            Our fully equipped ICT Lab functions to teach our students and grow
            their curiosity in this information and communication age.
          </p>
        </div>
        <div className='flex flex-col justify-start items-start px-5 gap-y-2 rounded-lg min-w-48 bg-white border-b-4 border-b-gray-400 hover:border-primary transition-all ease-in-out duration-500'>
          <img src={ictLab} className='w-full h-3/5 rounded-lg object-cover' alt='ICT LAb' />
          <h6 className='text-base font-bold text-black'>
            Information Technology
          </h6>
          <p  className='text-sm text-gray-500'>
            Our fully equipped ICT Lab functions to teach our students and grow
            their curiosity in this information and communication age.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start px-5 gap-y-2 rounded-lg min-w-48 bg-white shadow-md border-b-4 border-b-gray-400 hover:border-primary transition-all ease-in-out duration-500">
                <img src={ictLab} className="w-full h-3/5 rounded-lg object-cover" loading="lazy" alt="ICT LAb" />
                <h6 className='text-base font-bold text-black'>Information Technology</h6>
                <p className='text-sm text-gray-500'>Our fully equipped ICT Lab functions to teach our students and grow their curiosity in this information and communication age.</p>
            </div>
            {/* Make the border to change when its on focus on Mobile Devices */}
      </div>
    </section>
  )
}

export default Services
