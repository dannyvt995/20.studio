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


  }, []);


  const stickerContext = [
    `<span>craftmenship</span>`,
    `<span>passion</span>`,
    `<span>creaticity</span>`
  ]
  const listStickerSpace = document.querySelectorAll('.stickerSpace')
  useEffect(() => {
    console.log(listStickerSpace)
    if (listStickerSpace.length > 2) {
      for (let y = 0; y < 5; y++) {
        console.log(y)
        listStickerSpace[0].innerHTML += `${stickerContext[0]}`
        listStickerSpace[1].innerHTML += `${stickerContext[1]}`
        listStickerSpace[2].innerHTML += `${stickerContext[2]}`
      }
    }


  }, [listStickerSpace])



  useEffect(() => {
    const listImgProfolio = gsap.utils.toArray(".portfolio-section .img a");
    const listImgProfolioDetail = gsap.utils.toArray(".portfolio-section .img a img");

    // const ychen = (listImgProfolioDetail[0].getBoundingClientRect().height) / (listImgProfolioDetail[2].getBoundingClientRect().height)

    let ctx = gsap.context(() => {

      ScrollTrigger.create({

        trigger: ".services-section-inpage",
        scroller: '.container',
        scrub: true,
        pin: true,
        // markers: true,
        start: "top top",
        end: "+=420%",



        animation: gsap.timeline().set(".services-section-inpage .item", {
          x: (window.innerWidth - 256) / 3 + 64
        }, "actionChild")



          .fromTo(".services-section-inpage .item a:nth-child(1)", {
            yPercent: 80,

            scale: 2.2
          }, {
            yPercent: 0,

            scale: 1,
          }, "actionChild")

          .from(".services-section-inpage .item a:nth-child(2)", {
            yPercent: 150,
            x: ((window.innerWidth - 256) / 3) / 2 + 64
          }, "<")
          .from(".services-section-inpage .item a:nth-child(3)", {
            yPercent: 160,
            x: ((window.innerWidth - 256) / 3) / 2 + 64
          }, "<")
          .to(".services-section-inpage .item", {
            x: 0
          })
      });


      const timeline = gsap.timeline();
     timeline.to('.box1', { 
      yPercent: -100, 
      duration: 1,
      onUpdate: (self) => {
        let box1_Rect = document.querySelector('.box1').getBoundingClientRect()
        let box2_Rect = document.querySelector('.box2').getBoundingClientRect()
        const yPercentC = timeline.progress() * -100;
        console.log(timeline.progress())
        if(box1_Rect.bottom < box2_Rect.bottom) {
          console.log(`yPercent: ${-yPercentC}`);
          console.log(`yPercent: ${100 - (-yPercentC)}`);
          
          gsap.to('.box2', {
            yPercent: -100,
            duration: 0.5,
       
           
          });
          
        } else {
          return;
        }
      }
     })
    

   
      ScrollTrigger.create({
        trigger: ".portfolio-section-inpage",
        scroller: ".container",
        scrub: true,
        pin: true,
        //markers: true,
        start: "top top",
        end: `+=420%`,
        onUpdate: function (self) {
         
         // console.log(timeline.progress());
         // console.log(box1_Bottom)
        
        },
        animation: timeline
      });
    


    })

    return () => ctx.revert();

  }, [])


  return (
    <>
      <section className='container'>
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






        <ServicesinPage />
        <SliderPartners />
        {/*  <div className='portfolio-section' >
          <div className='title'>
            <a className='heading-clone'>Services</a>
            <a className='sub-heading'><p>Explore our services</p></a>
          </div>
          <div className='img' id="portfolio-trigger">
            <a><img src={images.image1} alt /></a>
           
             <a><img src={images.image2} alt /></a>
           <a><img src={images.image3} alt /></a>
            <a><img src={images.image4} alt /></a>

          </div>
        </div> */}

        <div className='portfolio-section-inpage'>
          <div className='title'>
            <a className='heading-clone'>Portfolio</a>
            <a className='sub-heading'><p>Explore our portfolio</p></a>
          </div>
          <div className='test'>
            <a className='box1'>Box 1</a>
            <a className='box2'>Box 2</a>
          </div>
        </div>
        {/*  <div className='gallery-section-inpage'>

          <h2>Visit Our Gallery</h2>
        </div>
        <div className='passion-section'>
            <div className='content'>
              <div className='text'>with craftmentship, creativity and love, we turn our client’s ideas into peice of art</div>
              <div className='img'><img src={images.image4} alt=''/></div>
            </div>
            <div className='sticker-warpper'>
                <div className='stickerSpace'></div>
                <div className='stickerSpace'></div>
                <div className='stickerSpace'></div>
            </div>
        </div> */}
        {/* <GalleryinPage /> */}

        {/*   <Partners/> */}
        <Contact />
      </section>
    </>
  )
}
