import React from 'react'
import Overlay from '../UI/Overlay'
import { MdOutlineLocationOn, MdOutlineEmail } from "react-icons/md";
const ContactUs = () => {

  return (
    <section className='flex flex-col gap-y-4 justify-between lg:items-center relative py-16 px-12 mt-9 w-[100vw] h-auto'>
      <Overlay styles='bg-white dark:bg-black -z-10' />
      <h2 className='text-[1rem] font-extrabold text-primary'>CONTACT US</h2>
      <div className='flex justify-between flex-col-reverse md:flex-row w-full gap-y-8 gap-x-0 md:gap-x-10 '>
        <div className='md:w-[60%] mt-8 md:mt-0 text-base font-semibold'>
          <span className='flex gap-x-4 mb-2 items-center'>
          <MdOutlineLocationOn />
            <address>No AB3 Ghana Road Malali, Kaduna, Nigeria.</address>
          </span>
          <span className='flex gap-x-4 items-center'>
          <MdOutlineEmail />
            <a href='mailto:dariqschools@gmail.com'>dariqschools@gmail.com</a>
          </span>
          <div id="schoolmap" className="w-full h-72 bg-zinc-700 mt-4">
          <iframe loading='lazy' className="border-0 w-full h-80" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15689.12686495322!2d7.4666346!3d10.5571139!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b2b516bf53b045%3A0xd747c4b22cd27213!2sMalali%20800283%2C%20Kaduna!5e0!3m2!1sen!2sng!4v1685355454447!5m2!1sen!2sng" allowFullScreen></iframe>
        </div>
        </div>
        <form className='form-control gap-y-7 md:w-[40%]'>
          <input
            type='text'
            name='name'
            placeholder='Name'
            aria-placeholder='Enter your fullname'
            required
            aria-required
            className='input input-primary w-full max-w-md md:max-w-lg transition-all ease-in-out duration-300 '
          />
          <input
            type='email'
            name='email'
            placeholder='Email'
            aria-placeholder='Enter your email'
            required
            aria-required
            className='input input-primary w-full max-w-md md:max-w-lg transition-all ease-in-out duration-300'
          />
          <textarea
            rows={5}
            placeholder='Message'
            aria-placeholder='Enter your message here'
            maxLength={250}
            aria-label='Type your message'
            required
            aria-required
            className='textarea textarea-primary transition-all ease-in-out duration-300 w-full'
          ></textarea>
          <button className='btn btn-primary w-full'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default ContactUs
