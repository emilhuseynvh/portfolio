import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [show, setShow] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  const navigate = useNavigate()

  const handleWorldSkillsClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  }

  return (
    <>
      <header className='text-white'>
        <div className="container mx-auto flex justify-between py-3 items-center md:relative fixed z-50 bg-card_color">
          <p onClick={() => navigate('/')} className='text-[23px] font-space cursor-pointer'>Code by Emil</p>
          <ul className='gap-[49px] hidden md:flex items-center text-base'>
            <Link to='/' className={`cursor-pointer duration-300 ${location.pathname === '/' ? 'text-white_' : 'text-[#9f9f9f] hover:text-white_'}`}>Home</Link>
            <Link to='/about' className={`cursor-pointer duration-300 ${location.pathname === '/about' ? 'text-white_' : 'text-[#9f9f9f] hover:text-white_'}`}>About</Link>
            <Link to='/work' className={`cursor-pointer duration-300 ${location.pathname === '/work' ? 'text-white_' : 'text-[#9f9f9f] hover:text-white_'}`}>Works</Link>
            <span onClick={handleWorldSkillsClick} className='cursor-pointer duration-300 text-[#9f9f9f] hover:text-white_'>WorldSkills</span>
            <Link to='/contact' className={`text-[#9f9f9f] hover:text-white_ cursor-pointer duration-300 ${location.pathname === '/contact' ? 'text-white_' : 'text-[#9f9f9f] hover:text-white_'} `}>Contact</Link>
          </ul>
          <a href='assets/pdf/Emil Huseynov.pdf' download className='bg-dark text-white_ hover:text-dark hover:bg-white duration-300 hidden md:block text-base font-medium py-3 px-[33px] rounded-2xl'> Download my CV </a>
          <div onClick={() => setShow(!show)} className="flex md:hidden flex-col gap-[6px] cursor-pointer" >
            <img className={`select-none transition-transform duration-300 ${!show ? "rotate-45 translate-y-[6px]" : "rotate-0"}`} src='assets/img/rectangle.svg' alt="" />
            <img className={`select-none transition-transform duration-300 ${!show ? 'opacity-0' : "opacity-100"}`} src='assets/img/rectangle.svg' alt="" />
            <img className={`select-none transition-transform duration-300 ${!show ? "-rotate-45 -translate-y-[10px]" : "rotate-0"}`} src='assets/img/rectangle.svg' alt="" />
          </div>
        </div>
      </header>

      <div className='w-full h-[67px] md:hidden'>

      </div>
      {/* HAMBURGER MENU */}
      <div className={` ${show ? '-translate-x-full' : 'translate-x-0'} w-full pt-20 base:w-[400px] bg-[#0F0F0F] text-base flex flex-col top-0 duration-300 pl-5 fixed left-0 h-full z-40`}>
        <Link onClick={() => setShow(true)} to='/' className={`pb-5 cursor-pointer ${location.pathname === '/' ? 'text-white_' : 'text-[#9f9f9f] hover:text-white_'}`}>Home</Link>
        <Link onClick={() => setShow(true)} to='/about' className={`pb-5 cursor-pointer ${location.pathname === '/about' ? 'text-white_' : 'text-[#9f9f9f] hover:text-white_'}`}>About</Link>
        <Link onClick={() => setShow(true)} to='/work' className='pb-5 cursor-pointer text-[#9f9f9f] hover:text-white_'>Works</Link>
        <span onClick={(e) => { setShow(true); handleWorldSkillsClick(e); }} className='pb-5 cursor-pointer text-[#9f9f9f] hover:text-white_'>WorldSkills</span>
        <Link onClick={() => setShow(true)} to='/contact' className='pb-5 cursor-pointer text-[#9f9f9f] hover:text-white_'>Contact</Link>
      </div>

      {/* COMING SOON MODAL */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className='fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] px-4'
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className='card p-8 md:p-12 max-w-md w-full text-center relative animate-[fadeIn_0.3s_ease-in-out]'
          >
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className='absolute top-4 right-4 text-[#9f9f9f] hover:text-white_ text-4xl transition-colors duration-300 w-10 h-10 flex items-center justify-center hover:bg-[#2a2a2a] rounded-lg cursor-pointer z-10'
              aria-label="Close modal"
            >
              ×
            </button>
            <div className='text-6xl mb-6'>🚧</div>
            <h2 className='text-white text-3xl font-bold mb-4'>Coming Soon</h2>
            <p className='text-[#BCBCBC] text-lg mb-2'>WorldSkills page is under development</p>
            <p className='text-[#9f9f9f] text-sm'>Check back soon for updates!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
