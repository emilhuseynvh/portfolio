import Aos from 'aos';
import React, { useEffect } from 'react'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

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
                <Link target='_blank' to='https://github.com/emilhuseynvh' className='profile-icon'><FaGithub className='text-[32px]' /></Link>
                <Link target='_blank' to='https://www.linkedin.com/in/emilhsynvh' className='profile-icon'><FaLinkedinIn  className='text-[32px] font-extrabold' /></Link>
            </div>
            <div>
                <h5>BLOG</h5>
                <h2>Social</h2>
            </div>
            <div className='card-icon'>
                <img src="assets/img/icon.svg"  />
            </div>
        </div>
  )
}

export default AboutBox