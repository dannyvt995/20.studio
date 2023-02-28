import React, { useEffect, useRef } from 'react'
import '.././styles/Home.css'
import img01 from '../asset/img.png'
import { AiOutlineArrowRight } from 'react-icons/ai';
import Partners from '../components/Partners';
import Services from '../components/Services';
import GalleryinPage from '../components/GalleryinPage';
import Contact from '../components/Contact';
import gsap from 'gsap';
import vid1 from '../asset/videos/websites.mp4'

export default function Home() {
  const vidSec = useRef(null)
  useEffect(() => {

    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-gallery",
          scroller: '.container',
          scrub: true,
          pin: true,
          // markers:true,
          start: "top top",
          end: "+=200%"
        }
      });
      tl.from(".line-2", {
        scaleX: 0,
        transformOrigin: "left center",
        ease: "none"
      })
      .from(".img-gsap-fix a", {
        opacity: 0,
        y: 400,
        stagger: 0.7,
        ease: "power2.inOut"
      }, 0);


    /*   let tlvid = gsap.timeline({
        scrollTrigger: {
          trigger: ".welcome-section",
          scroller: '.container',
          scrub: true,
          pin: true,
         // markers:true,
          start: "top center",
          end: "+=100%"
        }
      });
      tlvid.to(vidSec.current, {
        scale: 2,
    
        ease: "none"
      }) */
   
    });
    return () => ctx.revert(); // <-- CLEANUP!
  }, []);

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
          <div ref={vidSec}> 
            <video controls preload="auto" autoPlay muted loop>
              <source src={vid1} type="video/mp4" />
            </video>
          </div>
      
        </div>
        <Partners />
        <Services />
        <GalleryinPage />
        <Contact />
      </section>
    </>
  )
}
