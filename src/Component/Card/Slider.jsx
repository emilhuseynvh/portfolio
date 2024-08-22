import Aos from 'aos';
import React, { useEffect } from 'react'



const Slider = () => {
    useEffect(() => {
        Aos.init({
            duration: 1500,
            easing: 'ease',
            once: true,
        });
    }, []);
    return (
        <div data-aos="zoom-in" className='card w-full px-[25px] py-[17px] mb-6'>
            <img className='bg-img' src="assets/img/card-bg.png" alt="Backgorund Image" />
            <div className='marquee overflow-hidden w-full'>
                <div style={{ animation: 'marquee 8s linear infinite' }} className='w-full text-white_ flex'>
                    <span className='flex  whitespace-nowrap mr-3'>Welcome to my project <img className='mx-3' src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/star1.svg" alt="" /> </span>
                    <span className='flex  whitespace-nowrap mr-3'>Welcome to my project <img className='mx-3' src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/star1.svg" alt="" /></span>
                    <span className='flex  whitespace-nowrap mr-3'>Welcome to my project <img className='mx-3' src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/star1.svg" alt="" /></span>
                    <span className='flex  whitespace-nowrap mr-3'>Welcome to my project <img className='mx-3' src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/star1.svg" alt="" /></span>
                    <span className='flex  whitespace-nowrap mr-3'>Welcome to my project <img className='mx-3' src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/star1.svg" alt="" /></span>
                    <span className='flex  whitespace-nowrap mr-3'>Welcome to my project <img className='mx-3' src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/star1.svg" alt="" /></span>
                </div>
            </div>
        </div>
    )
}

export default Slider