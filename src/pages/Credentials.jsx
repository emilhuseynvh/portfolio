import React, { useEffect } from 'react'
import CredentialsCard from '../Component/Card/CredentialsCard'
import './../css/credential.css'
import CredentialsExperience from '../Component/Card/CredentialsExperience'
import CredentialsEducation from '../Component/Card/CredentialsEducation'
import Aos from 'aos'
import SEO from '../Component/SEO'

const Credentials = () => {
    useEffect(() => {
        Aos.init({
            duration: 1500,
            easing: 'ease',
            once: true,
        });
    }, []);
    return (
        <div className='container mx-auto flex-col md:flex-row flex gap-20'>
            <SEO
                title="Credentials - Emil Huseynov"
                description="View my professional credentials, certifications, and technical qualifications in web development and software engineering."
                keywords="Developer Credentials, Certifications, Professional Qualifications, Technical Skills, Web Development Certificates, Software Engineering Credentials, Emil Huseynov Certifications"
            />
            <div className='w-full md:w-[370px] md:h-[500px] relative md:sticky medium:top-4'>
                <CredentialsCard />
            </div>
            <div className=''>
                <div data-aos="zoom-in" className='pb-[110px]'>
                    <h4 className='mb-[37px] text-white text-[18px] '>ABOUT ME</h4>
                    <p className='text-base opacity-80 text-white '>As a Software Developer, I specialize in creating and maintaining high-quality software applications. My expertise spans across various programming languages, frameworks, and tools, enabling me to build robust and scalable solutions tailored to meet specific business needs. I am proficient in both front-end and back-end development, ensuring seamless integration and performance. My approach to development is grounded in problem-solving, continuous learning, and a keen eye for detail, which allows me to deliver efficient and innovative software solutions that drive user satisfaction and business growth.</p>
                </div>
                <div>
                    <CredentialsExperience />
                    <CredentialsEducation />
                </div>
            </div>
        </div>
    )
}

export default Credentials