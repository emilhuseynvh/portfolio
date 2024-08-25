import React from 'react'
import ContactInfo from '../Component/Card/ContactInfo'
import './../css/contact.css'
import ContactInput from '../Component/Card/ContactInput'
import { Toaster } from 'react-hot-toast'

const Contact = () => {
    return (
        <>
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