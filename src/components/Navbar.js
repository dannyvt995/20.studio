import React,{useRef,useState} from 'react'
import '../styles/Navbar.css'
import { SlMenu } from 'react-icons/sl';
import { Route, Routes } from "react-router-dom"
import Test from '.././components/Test'
import Home from '.././pages/Home';
import gsap from 'gsap';
export default function Navbar() {
  const navDom = useRef(null);
  const bgNav = useRef(null);
  const [isNavOpen,setNavOpen] = useState(false)
  
  function openNav() {
    let isAnimating = false;
    let animation;
    if (!isNavOpen) {
      animation = gsap.timeline({})
        .to([bgNav.current.children[0],bgNav.current.children[1]], {
          scaleX: 1,
          duration: 1,
          ease: 'power3.inOut'
        })
        .to(navDom.current, {
          opacity: 1,
          duration: 0.05,
          ease: 'ease-in-out'
        }, '<');
    } else {
      animation = gsap.timeline({})
      .to([bgNav.current.children[0],bgNav.current.children[1]], {
          scaleX: 0,
          duration: 1,
          ease: 'power3.inOut'
        })
        .add('startNavOut')
        .to(navDom.current, {
          opacity: 0,
          duration: 0.05,
          ease: 'ease-in-out'
        }, 'startNavOut')
        .eventCallback('onStart', () => {
          isAnimating = true;
        })
        .eventCallback('onComplete', () => {
          isAnimating = false;
        });
    }
  
    setNavOpen(!isNavOpen);
  
    return () => {
      if (!isAnimating) {
        animation.reversed(true);
      }
    };
  }
  
 

  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
    </Routes>
    <div className='navbar'>
        <a onClick={openNav} id="" className='ic-nav-open'><SlMenu /></a>
    </div>
    <div className="modal-nav-view" ref={navDom}>
        <div className="bg-move" ref={bgNav}>
          <span></span>
          <span></span>
        </div>
        <div className='detail'>
          <div className='list-item'>
            <a>Home</a>
            <a>Aboutus</a>
            <a>Servcies</a>
            <a>Product</a>
            <a>Contact</a>
          </div>
          <div className='info-company'>
            suuport@20studio.com
          </div>
        </div>
      
    </div>
    </>
  
  )
}
