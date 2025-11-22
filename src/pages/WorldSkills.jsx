import { useEffect } from 'react'
import Aos from 'aos'
import { useNavigate } from 'react-router-dom'
import WorkTogether from '../Component/Card/WorkTogether'

const WorldSkills = () => {
  const navigate = useNavigate()

  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: 'ease',
      once: true,
    })
  }, [])

  const achievements = [
    {
      title: "WorldSkills Azerbaijan 2024",
      position: "1-ci yer",
      badge: "🥇",
      description: "WorldSkills Azerbaijan müsabiqəsində Web Technologies kompetensiyası üzrə birinci yeri tutaraq ölkə səviyyəsində ən yaxşı nəticə göstərdim.",
      image: "worldskills-azerbaijan.jpg",
      details: "Web Technologies | 3 günlük müsabiqə | 50+ iştirakçı"
    },
    {
      title: "TurkicSkills 2024",
      position: "3-cü yer",
      badge: "🥉",
      description: "Türk dövlətləri arasında keçirilən TurkicSkills müsabiqəsində üçüncü yeri tutaraq beynəlxalq səviyyədə uğur qazandım.",
      image: "turkicskills.jpg",
      details: "Qazaxıstan | 7 ölkə | Beynəlxalq müsabiqə"
    }
  ]

  return (
    <div className='container mx-auto pb-8'>
      {/* HERO */}
      <div data-aos="fade-up" className='text-center my-12'>
        <h1 className='text-white text-[50px] md:text-[70px] lg:text-[90px] font-bold uppercase'>
          WorldSkills
        </h1>
        <p className='text-[#BCBCBC] text-lg mt-4'>
          Azərbaycanda və beynəlxalq arenada əldə etdiyim uğurlar
        </p>
      </div>

      {/* ACHIEVEMENTS */}
      <div className='space-y-16 mb-16'>
        {achievements.map((achievement, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8`}
          >
            {/* Image */}
            <div className='w-full lg:w-1/2'>
              <div className='aspect-[16/10] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-3xl flex items-center justify-center relative overflow-hidden border border-[#3a3a3a]'>
                <div className='text-center'>
                  <div className='text-8xl mb-4'>{achievement.badge}</div>
                  <p className='text-[#9f9f9f] text-sm'>Şəkil: {achievement.image}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className='w-full lg:w-1/2 flex flex-col justify-center'>
              <h2 className='text-white text-3xl md:text-4xl font-bold mb-3'>
                {achievement.title}
              </h2>
              <p className='text-white_ text-xl font-semibold mb-4'>
                {achievement.position}
              </p>
              <p className='text-[#BCBCBC] text-lg leading-relaxed mb-4'>
                {achievement.description}
              </p>
              <p className='text-[#9f9f9f] text-sm'>
                {achievement.details}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* GALLERY */}
      <div data-aos="fade-up" className='mb-16'>
        <h2 className='text-white text-4xl md:text-5xl font-bold text-center mb-12'>
          Foto Qalereya
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[
            "Müsabiqə zamanı",
            "Mükafat mərasimi",
            "Qızıl medal ilə",
            "TurkicSkills Arena",
            "Beynəlxalq komanda",
            "Bürünc medal"
          ].map((title, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 50}
              className='aspect-[4/3] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl flex items-center justify-center border border-[#3a3a3a] hover:border-[#4a4a4a] transition-all duration-300 cursor-pointer group'
            >
              <div className='text-center'>
                <div className='text-5xl mb-3 group-hover:scale-110 transition-transform duration-300'>📸</div>
                <p className='text-[#BCBCBC] font-medium'>{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TIMELINE */}
      <div data-aos="fade-up" className='mb-16'>
        <h2 className='text-white text-4xl md:text-5xl font-bold text-center mb-12'>
          Mənim Səyahətim
        </h2>

        <div className='max-w-3xl mx-auto space-y-8'>
          {[
            { date: 'Yanvar 2024', title: 'Hazırlığa başladım', desc: 'Web Technologies üzrə intensiv məşqlər' },
            { date: 'Mart 2024', title: 'Regional mərhələ', desc: 'Regional səviyyədə birinci yer' },
            { date: 'May 2024', title: 'WorldSkills Azerbaijan', desc: 'Milli müsabiqədə qızıl medal' },
            { date: 'Sentyabr 2024', title: 'TurkicSkills', desc: 'Beynəlxalq arenada bürünc medal' }
          ].map((item, index) => (
            <div key={index} data-aos="fade-right" data-aos-delay={index * 100} className='flex gap-6'>
              <div className='flex flex-col items-center'>
                <div className='w-4 h-4 rounded-full bg-white_'></div>
                {index < 3 && <div className='w-0.5 flex-1 bg-gradient-to-b from-white_/50 to-transparent mt-2'></div>}
              </div>
              <div className='flex-1 pb-6'>
                <p className='text-[#9f9f9f] text-sm font-semibold mb-1'>{item.date}</p>
                <h3 className='text-white text-xl font-bold mb-2'>{item.title}</h3>
                <p className='text-[#BCBCBC]'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorldSkills
