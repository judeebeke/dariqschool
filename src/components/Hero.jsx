import React from 'react'
import heroImage from '../assets/hero_image.jpg';
import AvatarUI from '../UI/AvatarUI';
import image_one from '../assets/i_one.png';
import image_two from '../assets/i_two.png';
import image_four from '../assets/i_four.png';
import image_three from '../assets/i_five.png';
import Overlay from '../UI/Overlay';

const Hero = () => {
  return (
    <div className='py-14 px-12 w-[100vw]'>
      <Overlay styles='bg-white dark:bg-black -z-10' />
        <section className='w-full flex items-center flex-col lg:flex-row '>
          <div className='w-full flex gap-y-3 flex-col'>
          <p className='text-[1rem] font-extrabold text-primary'><strong>We Are Number One</strong></p>
          <h1 className='text-3xl md:text-5xl font-extrabold text-black dark:text-white'>Come Join Us And Achieve Your Dreams Here In <span className="text-primary">Dariq</span> School</h1>
          <p className="text-black dark:text-white text-sm font-semibold text-justify">Our Curriculum is designed to ignite curiosity, foster creativity and prepare students for a dynamic world where knowledge of both traditional academics and modern technology is key.</p>
          <button className="btn border-none outline-1 outline-secondary bg-primary p-3 mt-5 text-white rounded-xl max-w-40 h-auto text-base font-semi-bold hover:bg-secondary transition-all ease-in-out duration-500">Learn More</button>
          <div className='flex justify-start items-center'>
          <AvatarUI image={image_one} styles="w-7 h-7" />
          <AvatarUI image={image_two} styles="w-7 h-7 -ml-4" />
          <AvatarUI image={image_four} styles="w-7 h-7 -ml-4" />
          <AvatarUI image={image_three} styles="w-7 h-7 -ml-4" />
          <p className='text-secondary ml-5 font-semibold'>500+</p>
          </div>
          </div>
          <div className='flex justify-center lg:justify-end relative w-full h-auto mt-14 lg:mt-0'>
            <div className="w-5/6 lg:w-4/6 h-auto md:h-[80vh] z-10 mr-1 md:mr-5">
          <img src={heroImage} className='w-full h-full object-cover rounded-es-[5rem] rounded-se-[5rem]' />
            </div>
            <div className='w-5/6 lg:w-4/6 h-full md:h-[80vh] mx-auto absolute ml-10 mt-6 top-1/2 -translate-y-1/2 bg-primary rounded-es-[5rem] rounded-se-[5rem] z-0'></div>
          </div>
        </section>
    </div>
  )
}

export default Hero
