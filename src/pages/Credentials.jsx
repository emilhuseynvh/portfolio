import React from 'react'
import CredentialsCard from '../Component/Card/CredentialsCard'
import './../css/credential.css'

const Credentials = () => {
    return (
        <div className='container mx-auto'>
            <div className='w-[370px] sticky top-[15%]'>
                <CredentialsCard />
            </div>
        </div>
    )
}

export default Credentials