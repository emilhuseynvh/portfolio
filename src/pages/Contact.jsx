import React from 'react'
import ContactInfo from '../Component/Card/ContactInfo'
import './../css/contact.css'
import ContactInput from '../Component/Card/ContactInput'

const Contact = () => {
    return (
        <div className='contact container mx-auto block medium:flex justify-between gap-24'>
            <ContactInfo />
            <div className='contact-input'>
                <ContactInput />
            </div>
        </div>
    )
}

export default Contact