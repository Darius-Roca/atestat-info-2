import React from 'react'
import { IoMdPlanet } from "react-icons/io";
import GlareHover from './GlareHover';
import { Link } from 'react-router-dom';

export default function Footer() {

const scrollToTop = () => {
        window.scrollTo(0,0)
      }

  return (
    <div className='bg-black p-10 border-t-2 border-gray-500 text-center rounded-xl mt-5 mb-5'>
        <div className='flex flex-row items-center align-center justify-between gap-6'>
            <div className='font-bold text-2xl'>
                Astronomie și astrofizică
            </div>
            <div style={{ height: '50px', position: 'relative' }}>
                <Link to="/" onClick={scrollToTop}>
                <GlareHover
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={800}
                    playOnce={false}
                    height='50px'
                    width='50px'
                >
                    <IoMdPlanet className='size-10' />
                </GlareHover>
                </Link>
            </div>
            <div>
                Atestat realizat de Roca Darius
            </div>
        </div>
    </div>
  )
}
