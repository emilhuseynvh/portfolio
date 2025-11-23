import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ContactPopup = () => {
  const [showPopup, setShowPopup] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const popupShown = sessionStorage.getItem('contactPopupShown')

    if (!popupShown) {
      const timer = setTimeout(() => {
        setShowPopup(true)
        setTimeout(() => setIsVisible(true), 50)
        sessionStorage.setItem('contactPopupShown', 'true')
      }, 10000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => setShowPopup(false), 300)
  }

  const handleContactClick = (e) => {
    e.stopPropagation();
    setIsVisible(false);
    navigate('/contact');
  }

  if (!showPopup) return null

  return (
    <div
      onClick={handleClose}
      className={`fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] px-4 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`card p-8 md:p-12 max-w-lg w-full text-center relative transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        <button
          type="button"
          onClick={handleClose}
          className='absolute top-4 right-4 text-[#9f9f9f] hover:text-white_ text-4xl transition-colors duration-300 w-10 h-10 flex items-center justify-center hover:bg-[#2a2a2a] rounded-lg cursor-pointer z-10'
          aria-label="Close popup"
        >
          ×
        </button>

        <div className='mb-6'>
          <div className='text-6xl mb-4'>💼</div>
          <h2 className='text-white text-3xl md:text-4xl font-bold mb-4'>
            Let's Work Together!
          </h2>
          <p className='text-[#BCBCBC] text-lg mb-6'>
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <button
          onClick={handleContactClick}
          className='bg-white_ text-dark relative z-50 hover:bg-dark hover:text-white_ duration-300 text-lg font-semibold py-4 px-8 rounded-2xl w-full md:w-auto'
        >
          Get In Touch
        </button>
      </div>
    </div>
  )
}

export default ContactPopup
