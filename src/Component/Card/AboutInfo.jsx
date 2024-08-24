import Aos from 'aos';
import React, { useEffect } from 'react'

const AboutInfo = () => {
    useEffect(() => {
        Aos.init({
            duration: 1500,
            easing: 'ease',
            once: true,
        });
    }, []);
    return (
        <div data-aos="zoom-in" className='card'>
            <img className='bg-img' src="assets/img/card-bg.png" alt="Backgorund Image" />
            <div className=' absolute left-[30px] top-0 opacity-50 z-10'>
                <img className='' src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon2.png" alt="" />
            </div>
            <div className='pt-[80px] base:pt-[115px] pr-[80px] pb-[30px] pl-[30px]'>
                <h1 className='text-white text-[26px] font-medium base:text-4xl'>Emil Huseynov</h1>
                <p className='text-white opacity-80 text-base '>
                As a Software Developer, I build and maintain software applications with expertise in front-end and back-end development. I focus on problem-solving and delivering solutions that enhance user satisfaction and support business growth.</p>
            </div>
            <div className='card-icon'>
                <img src="assets/img/icon.svg" />
            </div>
        </div>
    )
}

export default AboutInfo