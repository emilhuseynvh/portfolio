import React, { useEffect } from 'react'
import AboutProfile from '../Component/Card/AboutProfile'
import Aos from 'aos';
import AboutInfo from '../Component/Card/AboutInfo';
import Experience from '../Component/Card/Experience';
import Education from '../Component/Card/Education';
import AboutBox from '../Component/Card/AboutBox';
import WorkTogether from '../Component/Card/WorkTogether';
import Credentials from '../Component/Card/Credentials';
import { useNavigate } from 'react-router-dom';
import SEO from '../Component/SEO';

const About = () => {

  const navigate = useNavigate()

  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: 'ease',
      once: true,
    });
  }, []);
  return (
    <div className='container mx-auto'>
      <SEO
        title="About - Emil Huseynov"
        description="Learn more about Emil Huseynov, a Full Stack Developer and WorldSkills champion. Explore my experience, education, and technical expertise."
        keywords="Emil Huseynov, About, Full Stack Developer, WorldSkills Champion, Web Developer Biography, Professional Experience, Education, Technical Skills, Azerbaijan Developer"
      />
      {/*  F I R S T   L I N E   */}
      <div className='lg:flex gap-12'>
        <div className='lg:w-1/3 w-full flex justify-center'>
          <AboutProfile />
        </div>
        <div className='lg:w-2/3 w-full medium:my-0 my-[40px]'>
          <h1 data-aos="zoom-in" className=' medium:text-[74px] font-semibold uppercase text-white mt-[2px] text-[30px] xs:text-[40px] text-center my-[40px] medium:my-0'>Self-summary</h1>
          <AboutInfo />
        </div>
      </div>
      {/*  S E C O N D   L I N E  */}
      <div className='mt-4'>
        <div className='block normal:flex gap-4'>
          <div className='w-full normal:w-1/2'>
            <Experience />
          </div>
          <div className='w-full normal:w-1/2 mt-4 normal:mt-0'>
            <Education />
          </div>
        </div>
      </div>
      {/*  T H I R D   L I N E  */}
      <div className='w-full block lg:flex gap-4'>
        <div className='w-full lg:w-3/4 block medium:flex gap-4'>
          <div className='w-full medium:w-1/2 lg:w-1/3 mt-0 lg:mt-4'>
            <AboutBox />
          </div>
          <div onClick={() => navigate('/contact')} className='w-full medium:w-1/2 lg:w-2/3 mt-4'>
            <WorkTogether />
          </div>
        </div>
        <div onClick={() => navigate('/credential')} className="w-full lg:w-1/4 mt-4">
          <Credentials />
        </div>
      </div>
    </div>
  )
}

export default About