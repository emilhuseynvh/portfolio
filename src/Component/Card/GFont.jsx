import Aos from 'aos';
import React, { useEffect } from 'react'

const GFonf = () => {
        useEffect(() => {
            Aos.init({
                duration: 1500,
                easing: 'ease',
                once: true,
            });
        }, []);
  return (
    <div data-aos="zoom-in" className='card p-5 lg:p-6'>
            <img className='bg-img' src="assets/img/card-bg.png" alt="Backgorund Image" />
            <div className='mb-4 flex justify-center w-full'>
                <img src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/gfonts.png" />
            </div>
            <div>
                <h5>MY SKILLS</h5>
                <h2>Skills</h2>
            </div>
            <div className='card-icon'>
                <img src="assets/img/icon.svg"  />
            </div>
        </div>
  )
}

export default GFonf