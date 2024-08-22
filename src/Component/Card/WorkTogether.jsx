import Aos from 'aos';
import React, { useEffect } from 'react'

const WorkTogether = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: 'ease',
      once: true,
    });
  }, []);
  return (
    <div data-aos="zoom-in" className='card pt-[83px] pb-[30px] lg:px-6 px-5 relative'>
      <img className='bg-img' src="assets/img/card-bg.png" alt="Backgorund Image" />
      <div className=' absolute left-[30px] top-0 opacity-50 z-10'>
        <img className='' src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon2.png" alt="" />
      </div>
      <div>
          <h1 className='text-[30px] base:text-[44px] text-white font-medium'>Let's <br /> work <span className='text-[#5B78F6]'>together.</span></h1>
      </div>
      <div className='card-icon'>
        <img src="assets/img/icon.svg" alt="" />
      </div>
    </div>
  )
}

export default WorkTogether