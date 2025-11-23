import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Aos from 'aos'

const Error = () => {
    const navigate = useNavigate()

    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease',
            once: true,
        })
    }, [])

    return (
        <div className='container mx-auto min-h-[80vh] flex items-center justify-center'>
            <div className='w-full max-w-2xl text-center px-4'>
                {/* 404 Number */}
                <div data-aos="zoom-in" className='mb-8'>
                    <h1 className='text-[120px] md:text-[180px] lg:text-[220px] font-bold text-white_ leading-none mb-4 animate-pulse'>
                        404
                    </h1>
                </div>

                {/* Error Message */}
                <div data-aos="fade-up" data-aos-delay="100" className='mb-8'>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4'>
                        Page Not Found
                    </h2>
                    <p className='text-[#BCBCBC] text-base md:text-lg max-w-md mx-auto'>
                        The page you are looking for doesn't exist or has been moved.
                    </p>
                </div>

                {/* Buttons */}
                <div data-aos="fade-up" data-aos-delay="200" className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                    <button
                        onClick={() => navigate('/')}
                        className='bg-white_ text-dark hover:bg-dark hover:text-white_ duration-300 text-base font-semibold py-3 px-8 rounded-2xl w-full sm:w-auto'
                    >
                        Go to Home
                    </button>
                    <button
                        onClick={() => navigate(-1)}
                        className='bg-dark text-white_ hover:bg-white_ hover:text-dark duration-300 text-base font-semibold py-3 px-8 rounded-2xl w-full sm:w-auto border border-[#3a3a3a] hover:border-white_'
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Error