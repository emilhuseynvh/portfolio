import React, { useEffect } from 'react'
import Aos from 'aos'

const WorldSkillsCard = () => {
    useEffect(() => {
        Aos.init({
            duration: 1500,
            easing: 'ease',
            once: true,
        })
    }, [])

    return (
        <div data-aos="zoom-in" className='card p-6 lg:p-8 h-full flex flex-col justify-between cursor-pointer hover:scale-[1.02] transition-transform duration-300'>
            <div>
                <div className='flex items-center gap-3 mb-4'>
                    <div className='w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg flex items-center justify-center'>
                        <span className='text-2xl font-bold text-dark'>WS</span>
                    </div>
                    <h2 className='text-white text-xl font-semibold'>WorldSkills</h2>
                </div>

                <p className='text-[#BCBCBC] text-sm leading-relaxed mb-4'>
                    WorldSkills və TurkicSkills müsabiqələrində əldə etdiyim nailiyyətlər
                </p>

                <div className='space-y-2'>
                    <div className='flex items-center gap-2'>
                        <div className='w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded flex items-center justify-center text-xs font-bold text-dark'>
                            1
                        </div>
                        <span className='text-white text-sm'>WorldSkills Azerbaijan</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='w-6 h-6 bg-gradient-to-br from-orange-400 to-red-600 rounded flex items-center justify-center text-xs font-bold text-dark'>
                            3
                        </div>
                        <span className='text-white text-sm'>TurkicSkills</span>
                    </div>
                </div>
            </div>

            <div className='mt-6 pt-4 border-t border-[#2a2a2a]'>
                <span className='text-[#9f9f9f] text-xs uppercase tracking-wider'>Ətraflı məlumat üçün klikləyin</span>
            </div>
        </div>
    )
}

export default WorldSkillsCard
