import React from 'react'
import ContactInfo from '../Component/Card/ContactInfo'
import './../css/contact.css'
import ContactInput from '../Component/Card/ContactInput'
import { Toaster } from 'react-hot-toast'
import SEO from '../Component/SEO'

const Contact = () => {
    return (
        <>
            <SEO
                title="Contact - Emil Huseynov"
                description="Get in touch with Emil Huseynov. Let's discuss your next project or collaboration opportunity."
                keywords="Contact Emil Huseynov, Hire Developer, Web Developer Contact, Freelance Developer, Project Inquiry, Collaboration, Get In Touch, Email Emil Huseynov"
            />
            <Toaster position="top-center" reverseOrder={false} />
            <div className='contact container mx-auto block medium:flex justify-between gap-24'>
                <ContactInfo />
                <div className='contact-input'>
                    <ContactInput />
                </div>
            </div>
        </>
    )
}

export default Contact