import React from 'react'
import CredentialsCard from '../Component/Card/CredentialsCard'
import './../css/credential.css'
import CredentialsExperience from '../Component/Card/CredentialsExperience'
import CredentialsEducation from '../Component/Card/CredentialsEducation'

const Credentials = () => {
    return (
        <div className='container mx-auto flex gap-20'>
            <div className='w-[370px] h-[500px] sticky top-4'>
                <CredentialsCard />
            </div>
            <div>
                <div className='pb-[110px]'>
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