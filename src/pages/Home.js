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
import SliderPartners from '../components/SliderPartners';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from "gsap/CSSRulePlugin"

const images = {
  image1: require('.././asset/gallery/3.png'),
  image2: require('.././asset/gallery/5.png'),
  image3: require('.././asset/gallery/8.png'),
  image4: require('.././asset/gallery/b.png'),
  image5: require('.././asset/gallery/7.jpg')
};
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  useLocoScroll(true)
  const vidSec = useRef(null)
  const { redirectPage } = usePageTransition();
  const [defaultPosImg, setDefaultPosImg] = useState(false)


  const listImgRef = useRef(null);
  const listImgDetailRef = useRef(null);
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
    /*  const listImgProfolio = gsap.utils.toArray(".portfolio-section .img a");
     const listImgProfolioDetail = gsap.utils.toArray(".portfolio-section .img a img");
 
     const ychen = (listImgProfolioDetail[0].getBoundingClientRect().height) /  (listImgProfolioDetail[2].getBoundingClientRect().height)
  */
    /*  let ctx = gsap.context(() => {
     
 
       ScrollTrigger.create({
         trigger: ".portfolio-section",
         scroller: ".container",
         scrub: true,
         pin: true,
         markers: true,
         start: "top top",
         end: `+=600%`,
 
         onUpdate: function() {
           const img0Bottom = listImgProfolio[0].getBoundingClientRect().bottom;
           const img1Bottom = listImgProfolio[1].getBoundingClientRect().bottom;
           const img3Top = listImgProfolio[3].getBoundingClientRect().top;
           const img2Top = gsap.getProperty(listImgProfolio[2], 'top');
           const img0YPercent = gsap.getProperty(listImgProfolio[0], 'yPercent');
          // Check if top of listImgProfolio[2] is about 50px away from top of viewport
   
          if (img2Top < ((window.innerHeight * 8 / 10)  - (listImgProfolio[2].getBoundingClientRect().height))) {
           console.log('runrunrun')
           gsap.set(listImgProfolio[2], {
             top: "auto",
             bottom: 0
           });
         }
         
           if (img0Bottom < img1Bottom) {
         
             const progress = (img1Bottom - img0Bottom) / (listImgProfolio[1].offsetHeight + window.innerHeight);
             gsap.to(listImgProfolio[1], {
               duration: 1,
               yPercent: -100,
             
               immediateRender: false,
               onUpdate: function() {
                 this.progress(progress);
               }
             });
 
           
       
             setDefaultPosImg(true)
           }else{
             if(!defaultPosImg) {
               if(img0YPercent !== 0){
                 gsap.to(listImgProfolio[1], {
                   duration: 1,
                   yPercent: 0
                
                 });
               }else{
                 return
               }
               setDefaultPosImg(false)
             }
           } 
         },
         animation: gsap.timeline()
         .to(listImgProfolio[0], { yPercent: -200, duration: 1 })
         //.to(listImgProfolioDetail[0], { scale:1.2, duration: .5, transformOrigin: "top center" }, "<")
         .to(listImgProfolio[2], {
           top: -((listImgProfolioDetail[2].offsetHeight) )+ (window.innerHeight*0.025),
           duration:1
         },"<")
 
         .to(listImgProfolio[3], { top: ((listImgProfolioDetail[2].offsetHeight) )+ (window.innerHeight*0.025), duration: 1 }, "<")
         
       });
     }) 
     return () => ctx.revert(); */

    // <-- CLEANUP!
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
  }, [])


  return (
    <>
      <section data-scroll-section>
        <div className='warpper-content hero-section' style={{ marginBottom: '10vh' }}>
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
<SliderPartners/>

     



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
        {/*  <div className='portfolio-section' id="portfolio-trigger">
          <div className='title'>
            <h2>Portfolio</h2>
            <a>Visit our gallery</a>
          </div>
          <div className='img'>
              <a><img src={images.image1} alt /></a>
              <a><img src={images.image2} alt /></a>
              <a><img src={images.image3} alt /></a>
              <a><img src={images.image4} alt /></a>
             
          </div>
        </div> */}
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
