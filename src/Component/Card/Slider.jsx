import Aos from 'aos';
import { useEffect } from 'react'



const Slider = () => {
    useEffect(() => {
        Aos.init({
            duration: 1500,
            easing: 'ease',
            once: true,
        });
    }, []);
    const marqueeText = (
        <>
            <span className='flex whitespace-nowrap'>Welcome to my portfolio <img className='mx-3' src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/star1.svg" alt="" /></span>
            <span className='flex whitespace-nowrap'>Welcome to my portfolio <img className='mx-3' src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/star1.svg" alt="" /></span>
            <span className='flex whitespace-nowrap'>Welcome to my portfolio <img className='mx-3' src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/star1.svg" alt="" /></span>
        </>
    )

    return (
        <div data-aos="zoom-in" className='card w-full px-[25px] py-[17px] mb-6'>
            <img className='bg-img' src="assets/img/card-bg.png" alt="Backgorund Image" />
            <div className='marquee overflow-hidden w-full'>
                <div style={{ animation: 'marquee 10s linear infinite' }} className='text-white_ flex gap-3'>
                    {marqueeText}
                    {marqueeText}
                </div>
            </div>
        </div>
    )
}

export default Slider