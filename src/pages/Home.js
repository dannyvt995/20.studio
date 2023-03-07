import React, { useEffect, useRef, useState } from 'react'
import '.././styles/Home.css'
import img01 from '../asset/img.png'
import { AiOutlineArrowRight } from 'react-icons/ai';
import Partners from '../components/Partners';
import Services from '../components/Services';
import ServicesinPage from '../components/ServicesinPage';
import GalleryinPage from '../components/GalleryinPage';
import Contact from '../components/Contact';
import gsap from 'gsap';
import vid1 from '../asset/videos/websites.mp4'
import useLocoScroll from '.././hooks/useLocoScroll';
import usePageTransition from '.././hooks/usePageTransition';
import IntroVid from '../components/IntroVid';
import '.././styles/HomeNew.css'


export default function Home() {
  useLocoScroll(true)
  const vidSec = useRef(null)
  const { redirectPage } = usePageTransition();



  useEffect(() => {

    let ctx = gsap.context(() => {
      /*   let tl = gsap.timeline({
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
        }, 0); */


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




  useEffect(() => {
    const container = document.querySelector(".services-section-inpage");
    const section = document.querySelector(".services-section-inpage .item");
    const process = document.querySelector(".services-section-inpage span");
    const item = document.querySelectorAll(".services-section-inpage .item a")
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".services-section-inpage",
          scroller: '.container',
          scrub: true,
          pin: true,
          // markers:true,
          start: "-=50% top",
          end: "+=400%"
        }
      });
      tl.set(section, {
        x: (window.innerWidth - 128) / 3
      }, "actionChild")
        .fromTo(".services-section-inpage .item a:nth-child(1)", {
          yPercent: 120,
          scale: 2.5
        }, {
          yPercent: 0,
          scale: 1
        }, "actionChild")

        .from(".services-section-inpage .item a:nth-child(2)", {
          yPercent: 120
        })
        .from(".services-section-inpage .item a:nth-child(3)", {
          yPercent: 150
        }, "<")
        .to(section, {
          x: 0
        })
    })
    return () => ctx.revert(); // <-- CLEANUP!

  }, [])


  useEffect(() => {

    let ctxintro = gsap.context(() => {
      let tlintro = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-intro-vid",
          scroller: '.container',
      
         pin:true,
    
          start: "top top",
          end:"+=50%",
          endTrigger: ".services-section-inpage"
        }
      })
        tlintro.fromTo(".section-intro-vid .vid", {
          yPercent:0,
      },{
        yPercent: 50
      })
     

    })
    return () => ctxintro.revert(); // <-- CLEANUP!

  }, [])

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
              <a value='/sampledev' onClick={(event) => redirectPage(event)} >About us <AiOutlineArrowRight /></a>
            </div>
          </div>
        </div>
       {/*  <div className='section-hero'>
            <div className='img-bg'>
              <img src={img01} alt="" />
            </div>
            <div className='title'>
              <h2>20STUDIO</h2>
            </div>
        </div> */}
        <div className='section-intro-vid'>
          <div className='vid'>
            <span>differences</span>
          </div>

        </div>
        <div className='services-section-inpage'>
          <div className='title'>
            <h2>Services</h2>
            <a>Explore our services</a>
          </div>
          <span></span>
          <div className='item'>
            <a></a>
            <a></a>
            <a></a>
          </div>
        </div>

        {/* <GalleryinPage /> */}
        {/*   <div className='welcome-section'>
          <div ref={vidSec}> 
            <video controls preload="auto" autoPlay muted loop>
              <source src={vid1} type="video/mp4" />
            </video>
          </div>
      
        </div> */}
        {/*   <Partners/> */}
        <Contact />
      </section>
    </>
  )
}
