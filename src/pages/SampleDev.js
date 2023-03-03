import React,{useEffect} from 'react'
import '.././styles/pattern-services-item.css'
import useLocoScroll from '.././hooks/useLocoScroll';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';
import usePageTransition from '../hooks/usePageTransition.js'
const images = {
    image1: require('.././asset/sampledev/1.png'),
    image2: require('.././asset/sampledev/2.png'),
    image3: require('.././asset/sampledev/3.png'),
    image4: require('.././asset/sampledev/4.png'),
    image5: require('.././asset/sampledev/5.png'),
    image6: require('.././asset/sampledev/6.png'),
    image7: require('.././asset/sampledev/7.png'),
  };

export default function SampleDev() {
   // useLocoScroll(true)
    const { redirectPage } = usePageTransition();
    
  return (

    <section data-scroll-section>
        
    <div className='paranoid-section'>
            <div className='hero-sd'>
                <div className='content'>
                <a value='/' onClick={redirectPage} >GO TO HOME PAGE</a>
                <a value='/patternmaking' onClick={redirectPage} >patternmaking</a>
                    <h2>DESIGNER OF DREAMS</h2>
                    <p>20Studio help customer develop their product into a state of art </p>
                </div>
                <div className='img'><img src={images.image3} alt="" /></div>
            </div>

            <div className='item-services key-sd-move01'>
                <div className='content'>
                    <h2>Research and innovation</h2>
                    <p>Our dedicated team researches fabrics and accessories, and develops exclusive processes, embroideries, prints, finishes, and innovative washes. The research is carried out both by hand and using advanced machinery, both internally or through specialized external laboratories.</p>
                </div>
                <div className='img'><img src={images.image1} alt="" /></div>
            </div>

            <div className='item-services key-sd-move02'>
                <div className='content'>
                    <h2>Special workmanships</h2>
                    <p>At Cieffe, we love to create a variety of unique processes for our customers to further spur their creativity and push toward all that is new, inventive, and unexplored. Here are some examples.</p>
                </div>
                <div className='img'><img src={images.image4} alt="" /></div>
            </div>
            <div className='list-detail-step'>
                <div>
                    <ul className='ulhover-wrapper-sd'>
                        <li className='tag-move'></li>
                        <li>Heat sealing</li>
                        <li>Laser cuts</li>
                        <li>Machine embroidery</li>
                        <li>Thermo-adhesive applications</li>
                        <li>Transfer print</li>
                        <li>Washing and dyeing</li>
                        <li>Digital print</li>
                        <li>Double-face</li>
                        <li>Embossing / Debossing</li>
                    </ul>
                </div>
            </div>


            
            <div className='item-services key-sd-move03'>
                <div className='content'>
                    <h2>Pattern lab</h2>
                    <p>There are about 40 pattern makers on our team. It all starts with a sketch that we receive from the design studios of our customers that is step-by-step transformed into a sample.</p>
                </div>
                <div className='img'><img src={images.image5} alt="" /></div>
            </div>


            <div className='item-services key-sd-move04'>
                <div className='content'>
                    <h2>Tailoring</h2>
                    <p>After the modeling and cutting phases, our seamstresses create the first prototype that will be further fitted and perfected before being approved by the customer.</p>
                </div>
                <div className='img'><img src={images.image7} alt="" /></div>
            </div>

         

            <div className='item-services key-sd-move05'>
                <div className='content'>
                    <h2>Quality Assurance for the patterns</h2>
                    <p>At this stage, technology supports the crafting skills of our seamstresses, who follow the prototype until its approval, making sure it fully reflects the original idea to ensure the full satisfaction of our customers.</p>
                </div>
                <div className='img'><img src={images.image7} alt="" /></div>
            </div>
        </div>
    </section>

  )
}
