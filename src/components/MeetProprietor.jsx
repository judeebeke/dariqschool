import React from 'react'
import Overlay from '../UI/Overlay'

const MeetProprietor = () => {
  return (
    <section className='flex flex-col gap-y-4 justify-between items-center relative py-16 px-12 mt-9 w-[100vw] h-auto'>
      <Overlay styles='bg-tertiary dark:bg-gray-900 -z-10' />
      <h2 className='text-[1rem] font-extrabold text-primary mb-5'>
        MEET THE PROPRIETRESS
      </h2>
      <div className='flex items-center justify-center flex-col md:flex-row gap-y-5 md:gap-x-10'>
        <div className='w-[330px] lg:w-[500px] h-[500px] max-h-[550px] rounded-full bg-primary dark:bg-slate-500  flex items-center justify-center'>
          Proprietress Image Here
        </div>
        <div className='text-center md:text-start flex flex-col gap-y-3'>
          <strong className='text-xl'>Hajiya Proprietress</strong>
          <p className='text-sm font-medium'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            voluptates reprehenderit sed laboriosam repudiandae fugiat
            accusantium neque facere ipsam consequuntur.
          </p>
        </div>
      </div>
      {/* Will replace with actual image soon */}
    </section>
  )
}

export default MeetProprietor
