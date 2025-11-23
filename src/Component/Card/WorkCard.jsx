import Aos from 'aos';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const WorkCard = ({ item }) => {
    const { name, img, is_private } = item
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        Aos.init({
            duration: 1500,
            easing: 'ease',
            once: true,
        });
    }, []);

    const handleClick = (e) => {
        if (is_private) {
            e.preventDefault()
            setShowModal(true)
        }
    }

    const CardContent = () => (
        <div className='card pt-4 pr-4 w-full pb-[26px] pl-4'>
            <img className='bg-img' src="assets/img/card-bg.png" alt="Backgorund Image" />
            <div className='rounded-[30px] mb-[16px]'>
                <img className='rounded-[30px] xxs:h-[300px] w-full h-auto sm:h-auto object-cover lg:w-[350px] lg:h-[290px]' src={img} />
            </div>
            <div>
                <div className='flex items-center gap-4 mb-[2px]'>
                    <p className='opacity-70 text-[#BCBCBC] text-sm font-space'>WEB DESIGNING</p>
                </div>
                <h3 className='text-[22px] opacity-90 font-medium text-white capitalize'>{name}</h3>
            </div>
            <div className='card-icon'>
                <img src="assets/img/icon.svg" alt="" />
            </div>
        </div>
    )

    return (
        <>
            {is_private ? (
                <div onClick={handleClick} data-aos="zoom-in" className='flex gap-4 w-full cursor-pointer'>
                    <CardContent />
                </div>
            ) : (
                <Link target='_blank' to={item.link} data-aos="zoom-in" className='flex gap-4 w-full'>
                    <CardContent />
                </Link>
            )}

            {/* Private Project Modal */}
            {showModal && (
                <div
                    onClick={() => setShowModal(false)}
                    className='fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] px-4'
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className='card p-8 md:p-12 max-w-md w-full text-center relative'
                    >
                        <button
                            type="button"
                            onClick={() => setShowModal(false)}
                            className='absolute top-4 right-4 text-[#9f9f9f] hover:text-white_ text-4xl transition-colors duration-300 w-10 h-10 flex items-center justify-center hover:bg-[#2a2a2a] rounded-lg cursor-pointer z-10'
                            aria-label="Close modal"
                        >
                            ×
                        </button>
                        <div className='text-6xl mb-6'>🔒</div>
                        <h2 className='text-white text-3xl font-bold mb-4'>Private Project</h2>
                        <p className='text-[#BCBCBC] text-lg mb-2'>This is a private CRM system</p>
                        <p className='text-[#9f9f9f] text-sm'>This project is not publicly accessible</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default WorkCard