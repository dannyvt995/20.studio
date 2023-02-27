
import {useRef,useEffect} from 'react'
import './styles/App.css';
import './libs/locomotive-scroll.css';
import Navbar from './components/Navbar';
import Grid from './components/Grid'
import './fonts/Marcellus-Regular.ttf';
import Home from './pages/Home';
import gsap from 'gsap';
import useLocoScroll from './hooks/useLocoScroll';
function App() {
  useLocoScroll(true)
  useEffect(() => {
    setTimeout(() => {
      const loaddingPageMain = document.querySelector(".loading-screen")
      loaddingPageMain.classList.add('disable-loadding-screen')
    }, 500);
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
        y: 200, 
        stagger: 0.7,
        ease: "power2.inOut"
      },0);
    
      });
      return () => ctx.revert(); // <-- CLEANUP!

    /*   let ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: ".section-gallery",
          pin: true,
          markers: true,
          end: "+=100%",
          onEnter: function () {
            console.log('on')
          },
          onLeaveBack: function () {
            console.log('out')
          },
          onUpdate: function () {
            console.log('run')
          }
        });
      });
      return () => ctx.revert(); */
      

  }, []);
  return (
    <>
    <div className='loading-screen'>
        20.Studio
    </div>
    <section className='container'>
      <Navbar/>
      <Grid/>
    </section>
     
   
    </>
  );
}

export default App;
