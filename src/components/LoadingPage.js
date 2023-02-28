import React,{useRef,useEffect} from 'react'
import gsap from 'gsap'
import logoSm from '../asset/20-studio-white-sm.png'
export default function LoadingPage() {

  return (
    <div className='loading-screen'>
        <div className='content'>
            <img src={logoSm} alt=""/>
          <div></div>
            <div className='text-anime'>
                <span><p>We help brands</p></span>
                <span><p>build their products</p></span>
                <span><p>develop their brands</p></span>
                <span><p>and be successful</p></span>
            </div>
        </div>
      
    </div>
  )
}
