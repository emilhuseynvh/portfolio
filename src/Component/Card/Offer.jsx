import React, { useEffect } from 'react'
import { CiCamera } from "react-icons/ci";
import { PiPencilCircle } from "react-icons/pi";
import { IoIosColorFilter } from "react-icons/io";
import { MdDeveloperMode } from "react-icons/md";
import Aos from 'aos';

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
                <CiCamera className='text-white text-5xl font-bold' />
                <PiPencilCircle className='text-white text-5xl font-bold' />
                <IoIosColorFilter className='text-white text-5xl font-bold' />
                <MdDeveloperMode className='text-white text-5xl font-bold' />
            </div>
            <h5>SPECIALIZATION</h5>
            <h2>Services Offering</h2>

            <div className='card-icon'>
                <img src="assets/img/icon.svg" alt="" />
            </div>
        </div>
    )
}

export default Offer