import React, { useEffect } from 'react'
import WorkCard from '../Component/Card/WorkCard'
import { project } from '../data/project';
import Aos from 'aos';


const Work = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: 'ease',
      once: true,
    });
  }, []);
  return (
    <>
      <div className='container lg:flex mx-auto hidden gap-4 w-full'>
        <div className=' w-1/3  flex flex-col gap-4'>
          {project.map((item, i) => i < 2 && <WorkCard key={i} item={item} />)}
        </div>
        <div className='w-2/3'>
          <div className='w-full flex flex-col justify-center'>
            <h1 data-aos="fade-up" className='mb-4 text-white text-[74px] font-medium text-center'>ALL PROJECTS</h1>
            <div className='w-full flex gap-4'>
              {project.map((item, i) => i >= 2 && i < 4 && <WorkCard key={i} item={item} />)}
            </div>
            <div className='w-full flex gap-4 mt-4'>
              {project.map((item, i) => i >= 4 && <WorkCard key={i} item={item} />)}
            </div>
          </div>
        </div>
      </div>

      <div className="container flex gap-4 flex-col lg:hidden">
        <h1 data-aos="fade-up" className='mb-4 text-white text-[40px] sm:text-[50px] font-medium text-center'>ALL PROJECTS</h1>
        <div className=' w-full  flex flex-col gap-4'>
          {project.map((item, i) =>  <WorkCard key={i} item={item} />)}
        </div>
      </div>
    </>
  )
}

export default Work