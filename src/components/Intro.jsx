import Overlay from './../UI/Overlay';

const Intro = () => {
  return(
    <section className='flex flex-col gap-y-4 justify-between lg:items-center relative py-16 px-12 mt-9 w-[100vw] h-auto'>
      <Overlay styles='bg-tertiary dark:bg-gray-900 -z-10' />
      <div className="flex flex-col md:flex-row gap-y-8 md:gap-x-8">
        <div>
            <h4 className='font-700 text-primary text-2xl'>MISSION</h4>
            <p className='font-500 text-black dark:text-white text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam assumenda est corrupti iure doloremque facere, debitis ullam, nobis minus alias inventore?</p>
        </div>
        <div>
            <h4 className='font-700 text-primary text-2xl'>VISSION</h4>
            <p className='font-500 text-black dark:text-white text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam assumenda est corrupti iure doloremque facere, debitis ullam, nobis minus alias inventore?</p>
        </div>
      </div>
    </section>
  )
}

export default Intro;
