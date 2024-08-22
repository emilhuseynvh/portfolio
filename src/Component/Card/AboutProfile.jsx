import React, { useEffect } from 'react'
import './../../css/about.css'
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
            <div className='profile'>
                <img className='rounded-[30px] relative z-[2] 'src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/me2.png" alt="Profile" />
            </div>
        </div>
    )
}

export default AboutProfile