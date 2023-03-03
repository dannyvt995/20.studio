import React, { useEffect, useRef,useState } from 'react'
import '.././styles/Home.css'
import img01 from '../asset/img.png'
import { AiOutlineArrowRight } from 'react-icons/ai';
import Partners from '../components/Partners';
import Services from '../components/Services';
import GalleryinPage from '../components/GalleryinPage';
import Contact from '../components/Contact';
import gsap from 'gsap';
import vid1 from '../asset/videos/websites.mp4'
import useLocoScroll from '.././hooks/useLocoScroll';
import usePageTransition from '.././hooks/usePageTransition';


export default function Home() {
  useLocoScroll(true)
  const vidSec = useRef(null)
  const { redirectPage } = usePageTransition();
 
  /* useEffect(() => {
    const transitiondom = document.querySelector('#transition-section')
    const styletransitiondom = window.getComputedStyle(transitiondom)
    if(parseFloat(styletransitiondom.getPropertyValue('--opacity')) === null || parseFloat(styletransitiondom.getPropertyValue('--opacity')) == 0) {
          console.log('Rediect direct')
          return
      }else{

        if(parseFloat(styletransitiondom.getPropertyValue('--opacity')) == 1){
              let tl = gsap.timeline({})
              tl.set(transitiondom, {
                "--posX": `0%`,
                "--posY": `0%`,
                
              },"openClipPatch")
              .add("openClipPatch")
              tl.to(transitiondom, {
                "--size": `0%`,
                "--opacity":0,
                  ease: "power4.out",duration:1
              })
          }
          return
      }
      function afterendTrans() {
        transitiondom.childNodes[0].innerHTML = '';
    }
  }, [])
  

  const redirectPage = (event) => {
    console.log(`READY TO REDIRECT: ${event.target.getAttribute("value")}`)
    const transitiondom = document.querySelector('#transition-section')
    let s = event.target.getAttribute("value")
    let rect = (event.target).getBoundingClientRect();
   // console.log(`${(rect.x / window.innerWidth)*100}%`)
    //console.log(`${(rect.y / window.innerHeight)*100}%`)
    if(s !== null) {
      console.log('RUN rediecrt start')

      const matchingPatches = dataurl.urlname.filter(item => item.patch === s);
      matchingPatches.forEach(item => redirectNow(item.name));
      function redirectNow(namepage) {
        transitiondom.childNodes[0].innerHTML = `${namepage}`;
        let tl = gsap.timeline({onComplete: endTrans})
        tl.set(transitiondom, {
          "--opacity":1,
          "--posX": `${(rect.x / window.innerWidth)*100}%`,
          "--posY": `${(rect.y / window.innerHeight)*100}%`,
          
        },"openClipPatch")
        .add("openClipPatch")
        tl.to(transitiondom, {
          "--size": `150%`,
            ease: "power4.out",duration:1
        })
      }
    
        function endTrans() {
           console.log('RUN rediecrt click btn child')
           navigate(`${s}`)
            return
        }
        
 
    }else{
      console.log('err redirectPage')
    }
  } */


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
              <a value='/sampledev' onClick={(event) => redirectPage(event)} >About us <AiOutlineArrowRight /></a>
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
        <Partners/>
        <Services />
        <GalleryinPage />
        <Contact />
      </section>
    </>
  )
}
