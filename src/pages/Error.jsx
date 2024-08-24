import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Error = () => {
    
    const navigate = useNavigate()

    return (
        <div className='container mx-auto'>
            <Link to='/' className='text-[#BCBcBC] mb-6 uppercase text-sm'>Home - 404 Error</Link>
            <h1 className='text-[56px] text-white mb-[30px] font-semibold mt-[2px] '>ERROR PAGE</h1>
            <h1 className='text-[2.5rem] text-[#9f9f9f] text-center font-medium '>404</h1>
            <h1 className='text-[2rem] mb-2 font-medium text-[#9f9f9f] text-center'>SORRY PAGE WAS NOT FOUND</h1>
            <div className='flex justify-center my-6'>
                <button onClick={() => navigate('/')} className='rounded-[30px] text-white bg-dark py-3 px-[30px] font-medium'>GO TO HOME PAGE</button>
            </div>
        </div>
    )
}

export default Error