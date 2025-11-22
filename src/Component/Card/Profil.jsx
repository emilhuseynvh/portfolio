import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

function Profil() {
    useEffect(() => {
        Aos.init({
            duration: 1500,
            easing: 'ease',
            once: true,
        });
    }, []);

    return (
        <div data-aos="zoom-in" className='card w-full py-10 px-[30px]  medium:py-[50px] medium:px-[46px] block base:flex'>
            <img className='bg-img' src="assets/img/card-bg.png" alt="Backgorund Image" />
            <div className='img-box w-48 h-48 base:w-56 base:h-46 rounded-tl-[30px] mb-8  rounded-br-[30px] flex-none mx-auto base:mx-0'>
                <img className='rounded-br-[30px] rounded-tl-[30px]' src="assets/img/profile8.png" alt="Profile" />
            </div>
            <div className='pb-[30px]'>
                <h5 className='text-[#BCBCBC] opacity-70 mb-1 text-base font-medium relative z-[2]'>Web Developer</h5>
                <h1 className='text-4xl text-white_ relative z-[2]'>Emil Huseynov.</h1>
                <p className='text-[#9f9f9f] text-sm relative z-[2] mt-4'>I am web developer based in Azerbaijan</p>
            </div>
            <div  className='card-icon'>
                <img src="assets/img/icon.svg" alt="" />
            </div>
        </div>
    );
}

export default Profil;
