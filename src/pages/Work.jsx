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
    <div  className='container mx-auto flex gap-4 w-full'>
      <div className=' w-1/3  flex flex-col gap-4'>
        {project.map((item, i) => <WorkCard key={i} item={item} />)}
      </div>
      <div className='w-2/3'>
        <div className='w-full flex justify-center'>
          <h1 data-aos="fade-up" className='mb-4 text-white text-[74px] font-medium'>ALL PROJECTS</h1>
        </div>
      </div>
    </div>
  )
}

export default Work