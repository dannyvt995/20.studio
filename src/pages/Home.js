import React, { useEffect, useRef } from 'react'
import '.././styles/Home.css'
import img01 from '../asset/img.png'
import { AiOutlineArrowRight } from 'react-icons/ai';
import Partners from '../components/Partners';
import Services from '../components/Services';
import GalleryinPage from '../components/GalleryinPage';
import Contact from '../components/Contact';
export default function Home() {
  return (
    <>
      <section data-scroll-section>
        <div className='warpper-content hero-section'>
          <div className='img-hero-sec'>
          </div>
          <div className='content'>
            <div className='title'>
              <span>WHERE DREAMS</span>
              <span>COME TRUE</span>
            </div>
            <div className='name'>
              <h2>20STUDIO</h2>
            </div>
            <div className='more'>
              <p>We believe our industry is blinded by numbers. While buying decisions are based on emotion.</p>
              <a>About us <AiOutlineArrowRight /></a>
            </div>
          </div>
        </div>
        <div className='welcome-section'>
          <img src={img01} alt='' />
        </div>
        <Partners />
        <Services />
        <GalleryinPage />
        <Contact />
      </section>
    </>
  )
}
