import React from 'react'
import Profil from '../Component/Card/Profil'
import Slider from '../Component/Card/Slider'
import Credentials from '../Component/Card/Credentials'
import Projects from '../Component/Card/Projects'
import GFont from '../Component/Card/GFont'
import Offer from '../Component/Card/Offer'
import AboutBox from '../Component/Card/AboutBox'
import Number from '../Component/Card/Number'
import WorkTogether from '../Component/Card/WorkTogether'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  return (
    <main>
      <div className="container mx-auto ">
        {/*   F I R S T   L I N E  */}
        <div className='lg:flex block'>
          <div onClick={() => navigate('/about')} className='w-full lg:w-1/2 mr-3'>
            <Profil />
          </div>
          <div className='w-full lg:w-1/2 lg:mt-0 mt-4'>
            <Slider />
            <div  className='lg:flex block gap-4 '>
              <div onClick={() => navigate('/credential')} className='mb-4 lg:mb-0'><Credentials /></div>
              <div><Projects /></div>
            </div>
          </div>
        </div>
        {/*   S E C O N D   L I N E  */}
        <div className='w-full mt-4 block lg:flex gap-4'>
          <div className=' w-full lg:w-1/4'>
            <GFont />
          </div>
          <div className=' w-full lg:w-1/2 mt-4 lg:mt-0'>
            <Offer />
          </div>
          <div className='lg:w-1/4 w-full'>
            <AboutBox />
          </div>
        </div>
        {/*  T H I R D   L I N E  */}
        <div className='w-full block lg:flex gap-4'>
          <div className='w-full lg:w-1/2'>
            <Number />
          </div>
          <div  onClick={() => navigate('/contact')} className='w-full lg:w-1/2 mt-4'>
            <WorkTogether />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home