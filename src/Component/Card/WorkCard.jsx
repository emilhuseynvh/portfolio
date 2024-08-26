import Aos from 'aos';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';


const WorkCard = ({ item }) => {
    const { name, about, desc, img, tools } = item


    useEffect(() => {
        Aos.init({
            duration: 1500,
            easing: 'ease',
            once: true,
        });
    }, []);

    return (
        <Link to={item.link} data-aos="zoom-in" className='flex gap-4 w-full'>
            <div className='card pt-4 pr-4 w-full pb-[26px] pl-4'>
                <img className='bg-img' src="assets/img/card-bg.png" alt="Backgorund Image" />
                <div className='rounded-[30px] mb-[16px]'>
                    <img className='rounded-[30px] xxs:h-[300px] w-full h-auto  sm:h-auto  object-cover lg:w-[350px] lg:h-[290px]' src={img} />
                </div>
                <div>
                    <p className='opacity-70 text-[#BCBCBC] mb-[2px] text-sm font-space'>WEB DESIGNING</p>
                    <h3 className='text-[22px] opacity-90 font-medium text-white capitalize'>{name}</h3>
                </div>
                <div className='card-icon'>
                    <img src="assets/img/icon.svg" alt="" />
                </div>
            </div>
        </Link>
    )
}

export default WorkCard