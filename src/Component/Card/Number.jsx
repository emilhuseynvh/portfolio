import Aos from 'aos';
import React, { useEffect } from 'react'

const Number = () => {
    useEffect(() => {
        Aos.init({
            duration: 1500,
            easing: 'ease',
            once: true,
        });
    }, []);
    return (
        <div data-aos="zoom-in" className='card p-6 lg:p-8 mt-4 block sm:flex'>
            <div className='number-element mb-4 sm:mb-0'>
                <h1 className='text-white text-center mb-[13px] text-[34px] relative z-[2] font-medium'>01</h1>
                <p className='text-xs text-[#BCBCBC] opacity-50'>YEARS <br /> EXPERIENCE</p>
            </div>
            <div className='number-element mb-4 sm:mb-0'>
                <h1 className='text-white text-center mb-[13px] text-[34px] relative z-[2] font-medium'>01</h1>
                <p className='text-xs text-[#BCBCBC] opacity-50'>YEARS <br /> EXPERIENCE</p>
            </div>
            <div className='number-element mb-4 sm:mb-0'>
                <h1 className='text-white text-center mb-[13px] text-[34px] relative z-[2] font-medium'>16</h1>
                <p className='text-xs text-[#BCBCBC] opacity-50'>TOTAL <br /> PROJECTS</p>
            </div>
        </div>
    )
}

export default Number