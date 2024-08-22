import Aos from 'aos';
import React, { useEffect } from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CredentialsCard = () => {
    useEffect(() => {
        Aos.init({
            duration: 1500,
            easing: 'ease',
            once: true,
        });
    }, []);
    return (
        <div data-aos="zoom-in" className='card pt-6 px-6 pb-[34px]'>
            <div className='img-box rounded-[30px] mb-10'>
                <img className='rounded-[30px]' src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/me.png" />
            </div>
            <h4 className='text-white font-medium text-[28px] text-center'>Emil Huseynov</h4>
            <p className='text-[#BCBCBC] opacity-50 mb-[34px] text-center'>@emilhuseynvh</p>
            <div className=' gap-[10px] mb-9 flex justify-center'>
                <Link className='credential-social-icon'><FaLinkedinIn /></Link>
                <Link className='credential-social-icon' ><FaInstagram /></Link>
                <Link className='credential-social-icon'><FaGithub /></Link>
                <Link className='credential-social-icon'><FaWhatsapp /></Link>
            </div>
            <button className='w-full text-white duration-300 py-3 px-10 font-medium text-base rounded-2xl bg-dark hover:text-card_color hover:bg-white relative z-10'>Contact Me</button>
        </div>
    )
}

export default CredentialsCard