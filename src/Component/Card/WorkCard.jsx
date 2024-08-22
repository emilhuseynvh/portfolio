import React from 'react'


const WorkCard = ({ item }) => {
    const { name, about, desc, img, tools } = item


    return (
        <div className='flex gap-4'>
            <div className='card pt-4 pr-4 pb-[26px] pl-4'>
                <img className='bg-img' src="assets/img/card-bg.png" alt="Backgorund Image" />
                <div className='rounded-[30px] mb-[16px]'>
                    <img className='rounded-[30px] ' src={img[3]} />
                </div>
                <div>
                    <p className='opacity-70 text-[#BCBCBC] mb-[2px] text-sm'>WEB DESIGNING</p>
                    <h3 className='text-[22px] opacity-90 font-medium text-white '>Emki Production</h3>
                </div>
                <div className='card-icon'>
                    <img src="assets/img/icon.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default WorkCard