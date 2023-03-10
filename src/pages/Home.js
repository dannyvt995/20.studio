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

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const images = {
  image1: require('.././asset/gallery/3.png'),
  image2: require('.././asset/gallery/5.png'),
  image3: require('.././asset/gallery/8.png'),
  image4: require('.././asset/gallery/b.png'),
  image5: require('.././asset/gallery/7.jpg')
};

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
    const listImgProfolio = gsap.utils.toArray(".portfolio-section .img a");
    console.log(listImgProfolio)
    let ctx = gsap.context(() => {
    /*   let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".services-section-inpage",
          scroller: '.container',
          scrub: true,
          pin: true,
          // markers:true,
          start: "top top",
          end: "+=600%"
        }
      });
      tl.set(".services-section-inpage .item", {
        x: (window.innerWidth - 256) / 3 + 64
      }, "actionChild")
        .fromTo(".services-section-inpage .item a:nth-child(1)", {
          yPercent: 120,
  
          scale: 2
        }, {
          yPercent: 0,
      
          scale: 1,
        }, "actionChild")

        .from(".services-section-inpage .item a:nth-child(2)", {
          yPercent: 150,
          x: ((window.innerWidth - 256) / 3) / 2 +64
        },"<")
        .from(".services-section-inpage .item a:nth-child(3)", {
          yPercent: 160,
          x: ((window.innerWidth - 256) / 3) / 2 +64
        }, "<")
        .to(".services-section-inpage .item", {
          x: 0
        })
 */
 
        let tlprotfolio = gsap.timeline({
          scrollTrigger: {
            trigger: ".portfolio-section",
            scroller: '.container',
          scrub: true,
            pin:true,
            markers:true,
            start: "top top",
            end: "+=500%",
          }
        })
        
        tlprotfolio.fromTo(
          listImgProfolio[0],
          { yPercent: 0 },
          {
            yPercent: -100,
            duration: 2,
            onUpdate: function() {
              console.log(this.progress());
              const img0Bottom = listImgProfolio[0].getBoundingClientRect().bottom;
              const img1Bottom = listImgProfolio[1].getBoundingClientRect().bottom;
              if (img0Bottom < img1Bottom) {
                console.log('out')
                tlprotfolio.add("action2")
              }else{
                console.log('in')
          
              }
            }
          });
          tlprotfolio.fromTo(listImgProfolio[1],
            { yPercent: 0 },
            {yPercent: -100 },"action2")




      /*   let tlintro = gsap.timeline({
          scrollTrigger: {
            trigger: ".section-intro-vid",
            scroller: '.container',
            scrub: true,
           //pin:true,
        
            start: "top top",
            end: "+=70%"
          }
        })
          tlintro.fromTo(".section-intro-vid .vid", {
            yPercent:0,
            scale:1
        },{
          yPercent: 29.2,
          scale:.25
        })
        .fromTo(".section-intro-vid span", {
          top: "55%",
        },{
          top:"87.88%"
        },"<")*/
    }) 
    return () => ctx.revert(); // <-- CLEANUP!

  }, [])


  return (
    <>
      <section data-scroll-section>
        <div className='warpper-content hero-section' style={{marginBottom: '10vh'}}>
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
      {/*   <div className='section-intro-vid'>
          <div className='vid'>
           
          </div>
          <span>differences</span>
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
        </div> */}
        <div className='portfolio-section' id="portfolio-trigger">
          <div className='title'>
            <h2>Portfolio</h2>
            <a>Visit our gallery</a>
          </div>
          <div className='img'>
              <a><img src={images.image1} alt /></a>
              <a><img src={images.image2} alt /></a>
              <a><img src={images.image3} alt /></a>
              <a><img src={images.image4} alt /></a>
              <a><img src={images.image5} alt /></a>
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
