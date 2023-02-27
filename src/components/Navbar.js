import React, { useRef, useState } from "react";
import "../styles/Navbar.css";
import { SlMenu } from "react-icons/sl";
import { Route, Routes } from "react-router-dom";
import Test from ".././components/Test";
import Home from ".././pages/Home";
import gsap from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import ImgNav from "../asset/hero.png";

export default function Navbar() {
  gsap.registerPlugin(CSSRulePlugin)
  const navDom = useRef(null);
  const bgNav = useRef(null);
  const navItem = useRef(null);

  const [isNavOpen, setNavOpen] = useState(false);
  const pseudoImgBannerNav = CSSRulePlugin.getRule(".imgNavBanner:before");
 
  function openNav() {
  
    let isAnimating = false;
    let animation;
    if (!isNavOpen) {
      console.log('run nav')
      animation = gsap.timeline({})
        .to(
          navDom.current,
          {
            opacity: 1,
            pointerEvents: "auto"
          }
        )
        .add("startNavOpen")
        .to([bgNav.current.children[0], bgNav.current.children[1]], {
          scaleX: 1,
          duration: 1,
          ease: "power3.inOut",
        }, "startNavOpen")

        .to(".imgNavBanner",{
          width: "100%",
          duration: .5
        }, "<")
        .to(pseudoImgBannerNav, {
          cssRule: {
            width: 0,
          },
          delay: .5,
          duration: .5
        }, "<")
        .to(
          [
            navItem.current.children[0].children,
            navItem.current.children[1].children,
            navItem.current.children[2].children,
            navItem.current.children[3].children,
          ],
          {
            y: 0,
         
            duration: 0.5,
            stagger: 0.2,
            ease: "ease-in-out",
          },
          "<"
        );
    } else {
      animation = gsap.timeline({})
        .to(
          [
            navItem.current.children[0].children,
            navItem.current.children[1].children,
            navItem.current.children[2].children,
            navItem.current.children[3].children,
          ],
          {
            y:100,
            duration: 0.3,
            stagger: 0.05,
            ease: "ease-in-out",
          })
        .to(pseudoImgBannerNav, {
          cssRule: {
            width: '100%',
          },
          duration: .5
        }, "<")
        
        .add("startNavClose")
        .to(
          [bgNav.current.children[0], bgNav.current.children[1]], {
          scaleX: 0,
          duration: 1,
          pointerEvents: "none",
          ease: "power3.inOut",
        },"startNavClose")
        .to(navDom.current,
          {
            opacity: 0,
            duration: 0.5,
            pointerEvents: "none",
            ease: "ease-in-out",
          }, "<")

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
      <div className="navbar">
        <a onClick={openNav} id="" className="ic-nav-open">
          <SlMenu />
        </a>
      </div>
      <div className="modal-nav-view" ref={navDom}>
        <div className="bg-move" ref={bgNav}>
          <span></span>
          <span></span>
        </div>
        <div className="detail">
          <div className="list-item">
            <div ref={navItem} className="item-menu">
              <a>
                <p>About Us</p>
              </a>
              <a>
                <p>Servcies</p>
              </a>
              <a>
                <p>Product</p>
              </a>
              <a>
                <p>Contact</p>
              </a>
            </div>
            <div className="img">
              <div className="imgNavBanner">
                <img src={ImgNav} alt="" />
              </div>
            </div>
          </div>
          <div className="info-company">
            <div>suuport@20studio.com</div>
          </div>
        </div>
      </div>
    </>
  );
}
