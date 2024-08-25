import React, { useEffect } from 'react'
import Aos from 'aos';
import { offer } from '../../data/offer';

const Offer = () => {
    useEffect(() => {
        Aos.init({
            duration: 1500,
            easing: 'ease',
            once: true,
        });
    }, []);
    return (
        <div data-aos="zoom-in" className='card p-5 lg:p-6 lg:mt-0'>
            <img className='bg-img' src="assets/img/card-bg.png" alt="Backgorund Image" />
            <div className='flex gap-5 base:gap-[78px] justify-center items-center mb-14 mt-[46px]'>
                {offer?.map(item => {
                   return <img className='md:w-10 md:h-10 w-8 h-8' key={item.id} src={item.icon} alt={item.short_title} />
                })}
            </div>
            <h5>SPECIALIZATION</h5>
            <h2>Services Offering</h2>

            <div className='card-icon'>
                <img src="assets/img/icon.svg" alt="İcon" />
            </div>
        </div>
    )
}

export default Offer