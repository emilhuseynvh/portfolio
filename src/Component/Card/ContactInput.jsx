import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Aos from 'aos';
import emailjs from '@emailjs/browser';

const ContactInput = () => {
    useEffect(() => {
        Aos.init({
            duration: 1500,
            easing: 'ease',
            once: true,
        });
    }, []);

    const form = useRef(null);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, 'Name must be at least 3 characters')
                .max(30, 'Name must be 30 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            subject: Yup.string()
                .required('Required')
                .min(10, 'Subject must be at least 10 characters')
                .max(50, 'Subject must be 50 characters or less'),
            message: Yup.string()
                .required('Required')
                .min(30, 'Message must be at least 30 characters')
                .max(150, 'Message must be 150 characters or less')
        }),
        onSubmit: (values, { resetForm }) => {
            emailjs.sendForm('service_1ju507g', 'template_4tfk8jf', form.current, 'mO58qh-BVVdhvkhay')
                .then(
                    () => {
                        console.log('Success');
                        resetForm();
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    }
                );
        },
    });

    return (
        <div data-aos="zoom-in" className='card pt-[55px] w-full pr-5 pb-[30px] pl-5 sm:pt-10 sm:pb-10 sm:pr-10 sm:pl-10'>
            <img className='bg-img' src="assets/img/card-bg.png" alt="Background Image" />
            <p className='text-[44px] text-white mb-[30px]'>Let’s work <span className='text-[#5B78F6]'>together</span>.</p>
            <form ref={form} onSubmit={formik.handleSubmit}>
                <div className='mb-4 relative z-[2]'>
                    <input
                        name='user_name'
                        placeholder='Name *'
                        className='outline-none'
                        size={40}
                        minLength={3}
                        maxLength={50}
                        type="text"
                        {...formik.getFieldProps('name')}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className='text-red-500 ml-2 mt-1'>{formik.errors.name}</div>
                    ) : null}
                </div>
                <div className='mb-4 relative z-[2]'>
                    <input
                        name='user_email'
                        placeholder='Email *'
                        className='outline-none'
                        type="text"
                        {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className='text-red-500 ml-2 mt-1'>{formik.errors.email}</div>
                    ) : null}
                </div>
                <div className='mb-4 relative z-[2]'>
                    <input
                        placeholder='Your Subject *'
                        className='outline-none'
                        type="text"
                        {...formik.getFieldProps('subject')}
                    />
                    {formik.touched.subject && formik.errors.subject ? (
                        <div className='text-red-500 ml-2 mt-1'>{formik.errors.subject}</div>
                    ) : null}
                </div>
                <div className='mb-4 relative z-[2]'>
                    <textarea
                        name='message'
                        placeholder='Your Message *'
                        aria-invalid='false'
                        aria-required='true'
                        className='outline-none'
                        rows={5}
                        {...formik.getFieldProps('message')}
                    />
                    {formik.touched.message && formik.errors.message ? (
                        <div className='text-red-500 ml-2 mt-1'>{formik.errors.message}</div>
                    ) : null}
                </div>
                <button className='relative z-10' type="submit">SEND MESSAGE</button>
            </form>
            <div className='absolute right-[50px] top-0 opacity-50 z-10'>
                <img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon2.png" alt="Icon" />
            </div>
        </div>
    );
}

export default ContactInput;
