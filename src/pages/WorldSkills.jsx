import { useEffect } from 'react'
import Aos from 'aos'
import { destination, worldskills } from '../data/worldskills'
import SEO from '../Component/SEO'

const WorldSkills = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
    })
  }, [])

  return (
    <div className='min-h-screen'>
      <SEO
        title="WorldSkills - Emil Huseynov"
        description="WorldSkills Azerbaijan 2025 champion and TurkicSkills 2024 bronze medalist in Web Technologies. See my competitive programming achievements."
        keywords="WorldSkills, WorldSkills Azerbaijan, TurkicSkills, Web Technologies Competition, Gold Medal, Bronze Medal, Competitive Programming, WorldSkills Champion, Emil Huseynov Achievements"
      />
      {/* HERO SECTION */}
      <div className='container mx-auto px-4 pt-20 pb-32'>
        <div data-aos="fade-up" className='max-w-4xl mx-auto'>
          <div className='inline-block mb-6 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full'>
            <span className='text-[#9f9f9f] text-sm font-medium tracking-wider uppercase'>Achievements</span>
          </div>
          <h1 className='text-white text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-none'>
            WorldSkills<br />
            <span className='text-[#6f6f6f]'>Journey</span>
          </h1>
          <p className='text-[#BCBCBC] text-xl md:text-2xl max-w-2xl leading-relaxed'>
            National champion and international medalist in Web Technologies competency
          </p>
        </div>
      </div>

      {/* ACHIEVEMENTS SECTION */}
      <div className='container mx-auto px-4 pb-32'>
        <div className='max-w-6xl mx-auto space-y-12'>
          {worldskills.map((achievement, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className='group relative'
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                {/* Image Section */}
                <div className='w-full lg:w-2/5'>
                  <div className='relative aspect-[16/14] rounded-2xl overflow-hidden border border-white/[0.08] group-hover:border-white/[0.15] transition-all duration-500'>
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className='w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500'
                    />
                    {/* Overlay Badge */}
                    <div className='absolute top-4 right-4 w-14 h-14 bg-black/80 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-3xl shadow-2xl'>
                      {achievement.badge}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className='w-full lg:w-3/5'>
                  <div className='bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 md:p-10 hover:border-white/[0.15] transition-all duration-500'>
                    {/* Title & Position */}
                    <div className='mb-6'>
                      <h2 className='text-white text-3xl md:text-4xl font-bold mb-3 tracking-tight'>
                        {achievement.title}
                      </h2>
                      <div className='inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full'>
                        <span className='text-white text-sm font-semibold tracking-wide'>
                          {achievement.position}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className='text-[#BCBCBC] text-lg leading-relaxed mb-6'>
                      {achievement.description}
                    </p>

                    {/* Details */}
                    <div className='flex flex-wrap gap-4 text-sm text-[#9f9f9f]'>
                      {achievement.details.split(' | ').map((detail, idx) => (
                        <div key={idx} className='flex items-center gap-2'>
                          <div className='w-1 h-1 rounded-full bg-[#9f9f9f]'></div>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STATS SECTION */}
      <div className='container mx-auto px-4 pb-32'>
        <div data-aos="fade-up" className='max-w-5xl mx-auto'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'>
            {[
              { value: '2', label: 'Competitions' },
              { value: '1st', label: 'National' },
              { value: '3rd', label: 'International' },
              { value: '13+', label: 'Modules' }
            ].map((stat, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className='bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 md:p-8 text-center hover:border-white/[0.15] transition-all duration-300'
              >
                <div className='text-white text-4xl md:text-5xl font-bold mb-2'>{stat.value}</div>
                <div className='text-[#9f9f9f] text-sm uppercase tracking-wider'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TIMELINE SECTION */}
      <div className='container mx-auto px-4 pb-32'>
        <div data-aos="fade-up" className='max-w-3xl mx-auto'>
          <h2 className='text-white text-4xl md:text-5xl font-bold mb-16 tracking-tight'>
            Timeline
          </h2>

          <div className='relative'>
            {/* Timeline Line */}
            <div className='absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent'></div>

            <div className='space-y-12'>
              {destination.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className='relative pl-12 group'
                >
                  {/* Timeline Dot */}
                  <div className='absolute left-0 top-1 w-2.5 h-2.5 rounded-full bg-white border-4 border-[#0a0a0a] group-hover:scale-150 transition-transform duration-300'></div>

                  {/* Content */}
                  <div className='bg-gradient-to-br from-white/[0.02] to-transparent border border-white/[0.06] rounded-xl p-6 hover:border-white/[0.12] transition-all duration-300'>
                    <p className='text-[#9f9f9f] text-xs font-semibold uppercase tracking-widest mb-2'>
                      {item.date}
                    </p>
                    <h3 className='text-white text-xl md:text-2xl font-bold mb-2'>
                      {item.title}
                    </h3>
                    <p className='text-[#BCBCBC] text-base leading-relaxed'>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorldSkills
