import React from 'react'
import { education } from '../../data/education';


const CredentialsEducation = () => {
    return (
        <div>
            <h4 className='mb-[37px] text-white text-[18px]'>EDUCATION</h4>
            {education.map((item, i) => {
                return (
                    <div className='pb-[110px]'>
                        <p className='text-[#BCBCBC] opacity-60 text-base font-medium mb-[8px]'>{item.year}</p>
                        <h4 className='text-lg text-[#5B78F6]'>{item.name}</h4>
                        <h6 className='text-sm text-[#BCBCBC] font-normal opacity-60 mb-[8px]'>{item.company}</h6>
                        <p className='text-base text-white opacity-80 '>{item.desc}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default CredentialsEducation