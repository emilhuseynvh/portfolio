import React, { useEffect } from 'react'
import Aos from 'aos';

const AboutProfile = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: 'ease',
      once: true,
    });
  }, []);
    return (
        <div data-aos="zoom-in" className='card p-4 sm:p-6  base:h-[365px] base:w-[370px]'>
            <div className='profile p-5'>
                <img className='rounded-[30px] relative z-[2] 'src="assets/img/profile8.png" alt="Profile" />
            </div>
        </div>
    )
}

export default AboutProfile