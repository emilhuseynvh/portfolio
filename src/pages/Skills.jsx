import React, { useEffect } from 'react'
import { skills } from '../data/skills'
import Aos from 'aos';

const Skills = () => {
    useEffect(() => {
        Aos.init({
            duration: 1500,
            easing: 'ease',
            once: true,
        });
    }, []);
    return (
        <div className='container mx-auto flex flex-wrap gap-8 justify-center'>
            {skills.map((item, i) => {
                return (<div data-aos="zoom-in" key={i} className="card w-[44.5%] md:w-[30%] p-6">
                    <img className='bg-img' src="assets/img/card-bg.png" alt="Backgorund Image" />
                    <div className='w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mx-auto mb-4'>
                        <img className='w-full h-auto' src={item.logo} alt={item.name} />
                    </div>
                    <p className='text-center text-white text-base'>{item.name}</p>
                </div>)
            })}
        </div>
    )
}

export default Skills