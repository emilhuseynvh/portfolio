import React, { useEffect } from 'react'
import { experince } from '../../data/experience'
import Aos from 'aos';
console.log(experince);


const CredentialsExperience = () => {
    useEffect(() => {
        Aos.init({
            duration: 1500,
            easing: 'ease',
            once: true,
        });
    }, []);
    return (
        <div>
            <h4 className='mb-[37px] text-white text-[18px]'>EXPERIENCE</h4>
            {experince.map((item, i) => {
                return (
                    <div key={i} data-aos="zoom-in" className='pb-[110px]'>
                        <p className='text-[#BCBCBC] opacity-60 text-base font-medium mb-[8px]'>{item.year}</p>
                        <h4 className='text-lg text-[#5B78F6]'>{item.name}</h4>
                        <h6 className='text-sm text-[#BCBCBC] font-normal opacity-60 mb-[8px]'>{item.company}</h6>
                        <p className='text-base text-white opacity-80 '>{item.desc}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default CredentialsExperience