import Aos from 'aos';
import React, { useEffect } from 'react'

const Education = () => {
    useEffect(() => {
        Aos.init({
            duration: 1500,
            easing: 'ease',
            once: true,
        });
    }, []);
    return (
        <div data-aos="zoom-in" className='card p-6  medium:p-[30px]'>
            <img className='bg-img' src="assets/img/card-bg.png" alt="Backgorund Image" />
            <div>
                <h4 className='text-white text-base mb-[23px] font-medium'>EDUCATION</h4>
                <ul>
                    <li>
                        <p className='text-[#BCBCBC] opacity-60 font-medium mb-3 text-base'>2024-2025</p>
                        <h3 className='text-[18px] opacity-90 mb-[7px] text-white '>Full Stack Development</h3>
                        <p className='text-[#BCBCBC] opacity-60 font-normal text-sm '>Div Academy</p>
                    </li>
                    <li className='mt-8'>
                        <p className='text-[#BCBCBC] opacity-60 font-medium mb-3 text-base'>2022-2026</p>
                        <h3 className='text-[18px] opacity-90 mb-[7px] text-white '>Computer Sciences</h3>
                        <p className='text-[#BCBCBC] opacity-60 font-normal text-sm '>Baku Engineering University</p>
                    </li>
                </ul>
            </div>
            <div className='card-icon'>
                <img src="assets/img/icon.svg" />
            </div>
        </div>
    )
}

export default Education