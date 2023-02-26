import React,{useEffect} from 'react'
import '../styles/cursorHover.css'
import Cursor from '../hooks/useCursor'
import vid1 from '../asset/videos/websites.mp4'
import vid2 from '../asset/videos/apps.mp4'
import vid3 from '../asset/videos/branding.mp4'
import { lerp, getMousePos, getSiblings } from ".././utils/utils-cursor.js";
import gsap from 'gsap'


export default function Services() {
    useEffect(() => {
        //const cursor = new Cursor(document.querySelector(".cursor"));
        hoverShow()
      },[])
      
    function hoverShow() {
      const listels = document.querySelectorAll(".item-services-active");
      console.log(listels)
      listels.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    }
    function handleMouseEnter(event) {
      const el = event.currentTarget;
      let siblings = getSiblings(el);
  
      siblings.forEach((i) => {
        i.classList.add('hidden-for-all')
      })
      gsap.set(el.childNodes[1], { zIndex: 10, opacity: 1});
      gsap.set(el.childNodes[2], { zIndex: 5, opacity: 1, scale: 1});
     // el.childNodes[1].classList.add('active-for-title')
     // el.childNodes[2].classList.add('active-for-video')
    }
  
    function handleMouseLeave(event) {
      const el = event.currentTarget;
      let siblings = getSiblings(el);
      siblings.forEach((i) => {
        i.classList.remove('hidden-for-all')
      })
      gsap.set(el.childNodes[1], { zIndex: 1, opacity: .5});
      gsap.set(el.childNodes[2], { zIndex: 0, opacity: 0, scale:.2});
     // el.childNodes[1].classList.remove('active-for-title')
      //el.childNodes[2].classList.remove('active-for-video')
    }
  return (
    <>
        <div className='services-section'>
            <div className='title'>
                <h2>Dịch Vụ Của Chúng Tôi</h2>
            </div>
            <div className='detail' id='view-services'>
                <div className='item-services-active' data-video-src="websites">
                    <span></span>
                    <a>Phát Triển Mẫu</a>
                    <div className='view'>
                      <video controls preload="auto" autoPlay muted loop>
                          <source src={vid1} type="video/mp4" />
                      </video>
                    </div>
                </div>
                <div className="item-services-active" data-video-src="apps">
                  <span></span>
                  <a >In & Xử Lí Chất Liệu</a>
                  <div className='view'>
                    <video controls preload="auto" autoPlay muted loop>
                        <source src={vid2} type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div className='item-services-active' data-video-src="websites">
                  <span></span>
                  <a>Thiết Kế Rập</a>
                  <div className='view'>
                    <video controls preload="auto" autoPlay muted loop>
                        <source src={vid3} type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div className='item-services-active' data-video-src="branding">
                  <span></span>
                  <a>Sản Xuất</a>
                  <div className='view'>
                    <video controls preload="auto" autoPlay muted loop>
                        <source src={vid1} type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div className='item-services-active' data-video-src="apps">
                  <span></span>
                  <a>Tư Vấn</a>
                  <div className='view'>
                    <video controls preload="auto" autoPlay muted loop>
                        <source src={vid3} type="video/mp4" />
                    </video>
                  </div>
                  </div>
            </div>
       
        </div>  


       

      
    </>
  )
}
