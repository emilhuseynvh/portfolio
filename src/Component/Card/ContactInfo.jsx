import { useEffect } from 'react'
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Aos from 'aos';
import { Link } from 'react-router-dom';

const ContactInfo = () => {
    useEffect(() => {
        Aos.init({
            duration: 1500,
            easing: 'ease',
            once: true,
        });
    }, []);
    return (
        <div className='w-full xxs:w-[292px]'>
            <p data-aos="fade-up" className='text-base mb-[29px] text-white'>CONTACT INFO</p>
            <ul className='mb-[55px]'>
                <li data-aos="zoom-in" className='flex gap-6'>
                    <div className='contact-icon'>
                        <CiMail />
                    </div>
                    <div>
                        <p className='text-[#BCBCBC] text-sm opacity-50 mb-0 '>MAIL US</p>
                        <h5 className='text-white text-base opacity-80 mb-0 font-medium '>emilhuseynvh@gmail.com</h5>
                        <h5 className='text-white text-base opacity-80  font-medium '>ehuseynov23@std.beu.edu.az</h5>
                    </div>
                </li>
                <li data-aos="zoom-in" className='flex mt-[70px] gap-6'>
                    <div className='contact-icon'>
                        <FiPhone />
                    </div>
                    <div>
                        <p className='text-[#BCBCBC] text-sm opacity-50 mb-0 '>CONTACT US</p>
                        <h5 className='text-white text-base opacity-80 mb-0 font-medium '>+994 (50) 406 24 35</h5>
                    </div>
                </li>
                <li data-aos="zoom-in" className='flex mt-[70px] gap-6'>
                    <div className='contact-icon'>
                        <IoLocationOutline />
                    </div>
                    <div>
                        <div>
                            <p className='text-[#BCBCBC] text-sm opacity-50 mb-0 '>LOCATION</p>
                            <h5 className='text-white text-base opacity-80 mb-0 font-medium '>Azerbaijan, Baku, Surakhany</h5>
                        </div>
                    </div>
                </li>
            </ul>

            <p data-aos="fade-up" className='text-base mb-[29px] text-white'>SOCIAL INFO</p>
            <div className='flex gap-5'>
                <Link target='_blank' to='https://github.com/emilhuseynvh' data-aos="zoom-in" className='social-icon'><FaGithub /></Link>
                <Link target='_blank' to='https://www.linkedin.com/in/emilhuseynvh' data-aos="zoom-in" className='social-icon'><FaLinkedinIn /></Link>
                <Link target='_blank' to='https://www.instagram.com/emilhuseynvh?igsh=Z3JzeXRzcHFxeGVz' data-aos="zoom-in" className='social-icon'><FaInstagram /></Link>
            </div>
        </div>
    )
}

export default ContactInfo