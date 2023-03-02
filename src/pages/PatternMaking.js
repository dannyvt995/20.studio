import React ,{useEffect}from 'react'
import Contact from '../components/Contact';
import useLocoScroll from '.././hooks/useLocoScroll';
import '.././styles/pattern-services-item.css'
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';
const images = {
    image1: require('.././asset/patternmaking/1.png'),
    image2: require('.././asset/patternmaking/2.png'),
    image3: require('.././asset/patternmaking/3.png'),
    image4: require('.././asset/patternmaking/4.png'),
    image5: require('.././asset/patternmaking/5.png'),
    image6: require('.././asset/patternmaking/6.png')
  };
export default function PatternMaking() {
    useLocoScroll(true)
    const navigate = useNavigate();
    useEffect(() => {
        const transitiondom = document.querySelector('#transition-section')
        const styletransitiondom = window.getComputedStyle(transitiondom)
        //console.log(styletransitiondom.getPropertyValue("--opacity"))
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
                    duration:1
                })
            }
            return
        }
    }, [])
    const redirectPage = (event) => {
        console.log(event.target.getAttribute("value"))
        let s = event.target.getAttribute("value")
        const transitiondom = document.querySelector('#transition-section')
        let rect = (event.target).getBoundingClientRect();
        console.log(`${(rect.x / window.innerWidth)*100}%`)
        console.log(`${(rect.y / window.innerHeight)*100}%`)
        if(s !== null) {
    
            let tl = gsap.timeline({onComplete: endTrans})
            tl.set(transitiondom, {
            "--opacity":1,
              "--posX": `${(rect.x / window.innerWidth)*100}%`,
              "--posY": `${(rect.y / window.innerHeight)*100}%`,
              
            },"openClipPatch")
            .add("openClipPatch")
            tl.to(transitiondom, {
              "--size": `150%`,
                duration:1
            })
            function endTrans() {
                navigate(`${s}`)
                return
            }
        }else{
          console.log('err redirectPage')
        }
      }

  return (

    <section data-scroll-section>
    <div className='paranoid-section'>
        <div className='hero-pm'>
            <div className='content'>
            <a value='/' onClick={redirectPage} >GO TO HOME PAGE</a>
            <a value='/sampledev' onClick={redirectPage} >SAMPLE DEV</a>
                <h2>FROM SKETCH TO PATTERN</h2>
                <p>One of the most important part that create an outstanding garment</p>
            </div>
            <div className='img'><img src={images.image1} alt="" /></div>
        </div>

        <div className='item-services key-pm-move01'>
            <div className='content'>
                <h2>Brainstorm</h2>
                <p>All begins with the idea. Break down the design, find out possible ways to craft it with wanted fabrics</p>
            </div>
            <div className='img'><img src={images.image4} alt="" /></div>
        </div>
        <div className='item-services key-pm-move02'>
            <div className='content'>
                <h2>Transfer design into fabric patterns</h2>
                <p>All begins with the idea. Break down the design, find out possible ways to craft it with wanted fabrics</p>
            </div>
            <div className='img'><img src={images.image5} alt="" /></div>
        </div>
        <div className='item-services key-pm-move03'>
            <div className='content'>
                <h2>Build It, Fix it, Make it Perfect</h2>
                <p>Like any other great product, it take efforts to create the best version that ready to ship. At 20Studio, we do our best to ensure the highest quality</p>
            </div>
            <div className='img'><img src={images.image2} alt="" /></div>
        </div>
        <div className='item-services key-pm-move04'>
            <div className='content'><h2>SEE OUR WORK</h2></div>
            <div className='img'><img src={images.image6} alt="" /></div>
        </div>
    </div>
    <Contact/>
    </section>

  )
}
