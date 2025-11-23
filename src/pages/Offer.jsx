import React, { useEffect } from 'react'
import { CiCamera } from "react-icons/ci";
import { PiPencilCircle } from "react-icons/pi";
import { IoIosColorFilter } from "react-icons/io";
import { MdDeveloperMode } from "react-icons/md";
import { offer } from '../data/offer';
import AboutBox from '../Component/Card/AboutBox';
import WorkTogether from '../Component/Card/WorkTogether';
import Credentials from '../Component/Card/Credentials';
import Aos from 'aos';
import { Link } from 'react-router-dom';


const Offer = () => {
  useEffect(() => {
    Aos.init({
        duration: 1500,
        easing: 'ease',
        once: true,
    });
}, []);
  return (
    <div className=' container mx-auto  h-full gap-4'>
      <div className='m:flex gap-4'>
        <div data-aos="zoom-in" className='pt-[91px] card px-[75px] pb-[90px] m:mb-0 mb-12'>
          <ul className=' flex flex-col gap-36'>
            <img className='bg-img' src="assets/img/card-bg.png" alt="Backgorund Image" />
           {offer?.map(item => {
            return  <li key={item.id} className='text-base font-normal flex items-center gap-[50px] text-white '><img className='md:w-10 md:h-10 w-8 h-8' src={item.icon} alt={item.title} /> {item.short_title}</li>
           })}
          </ul>
        </div>
        <div className='w-full'>
          <h1 data-aos="fade-up" className='text-white m:my-0 my-12 text-[38px] md:text-[50px] lg:text-[74px] font-semibold mt-[2px] text-center'>MY OFFERING</h1>
          <div className='card py-[27px] px-[30px]'>
            <img className='bg-img' src="assets/img/card-bg.png" alt="Backgorund Image" />
            <div data-aos="zoom-in" className='xl:flex xl:flex-wrap gap-4'>
              {offer.map((item) => {
                return <div key={item.id} className='card w-full xl:mb-0 mb-4 xl:w-[48%] pt-6 pr-[47px] pb-[59px] pl-[30px]'>
                  <h1 className='text-[#BCBCBC] text-[15px] font-medium opacity-[.56] mb-2'>{item.title}</h1>
                  <p className='text-white opacity-80 text-sm '>{item.desc}</p>
                </div>
              })}
            </div>

          </div>
        </div>
      </div>
      {/*  T H I R D   L I N E  */}
      <div className='w-full block lg:flex gap-4'>
        <div className='w-full lg:w-3/4 block m:flex gap-4'>
          <div data-aos="zoom-in" className='w-full m:w-1/2 lg:w-1/3 mt-0 lg:mt-4'>
            <AboutBox />
          </div>
          <div className='md:my-0 my-4'>
            <Link to='/contact' data-aos="zoom-in" className='w-full m:w-1/2 lg:w-2/3 mt-4'>
            <WorkTogether />
          </Link>
          </div>
        </div>
        <Link to='/credential' data-aos="zoom-in" className="w-full lg:w-1/4 mt-4">
          <Credentials />
        </Link>
      </div>
    </div>
  )
}

export default Offer