import Aos from 'aos';
import React, { useEffect } from 'react'
import { FaDribbble } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

const AboutBox = () => {
        useEffect(() => {
            Aos.init({
                duration: 1500,
                easing: 'ease',
                once: true,
            });
        }, []);
  return (
    <div data-aos="zoom-in" className='card p-5 lg:p-6 lg:mt-0 mt-4'>
            <img className='bg-img' src="assets/img/card-bg.png" alt="Backgorund Image" />
            <div className='about-box card mb-4 flex gap-5 items-center justify-center w-full p-[22px]'>
                <div className='profile-icon'><FaDribbble className='text-[32px]' /></div>
                <div className='profile-icon'><CiTwitter  className='text-[32px] font-extrabold' /></div>
            </div>
            <div>
                <h5>BLOG</h5>
                <h2>GFonts</h2>
            </div>
            <div className='card-icon'>
                <img src="assets/img/icon.svg"  />
            </div>
        </div>
  )
}

export default AboutBox