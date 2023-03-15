import React, { useRef, useState, Fragment, useEffect } from 'react'
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import GlobalProduct3D from '.././components/3d/GlobalProduct3D'
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import PlaneGeo from '../components/3d/PlaneGeo';
import gsap, { Power2,Power4 } from 'gsap';
import { Vector2 ,Vector3} from 'three';
import DemoImg from '../components/3d/DemoImg';
import { debounce } from 'lodash';
extend({ OrbitControls })


function Controls() {
  const controls = useRef()
  const { camera, gl,scene } = useThree()
 
  gl.gammaFactor = 2.2
  gl.outputEncoding = THREE.sRGBEncoding

  const MAX_VIEW = 86
  const MED_VIEW = 160
  const MIN_VIEW = 200

  useEffect(() => {
    console.log(controls)
    camera.position.set(400,320,MIN_VIEW);
   // controls.current.target = new THREE.Vector3(400,320,MIN_VIEW)

  })

   useFrame(() => {
    //controls.current.update();
  }) 
  

  const SPEED_ROLL = 1.3
  
  const debouncedHandleScroll = debounce(handleScroll, 50);

  useEffect(() => {
    window.addEventListener('wheel', debouncedHandleScroll);

    return () => {
      window.removeEventListener('wheel', debouncedHandleScroll);
    };
  }, [debouncedHandleScroll]);

  const sensitivity = 0.1; // adjust this value to set the sensitivity

  let prevScrollPos = null;
  let scrollForce = 0;
  function handleScroll(e) {
   

    const scrollPos = e.pageYOffset || e.target.scrollTop || 0;
    const scrollDistance = prevScrollPos !== null ? Math.abs(scrollPos - prevScrollPos) : 0;
    const force = scrollDistance * sensitivity;
    scrollForce += force;
    prevScrollPos = scrollPos;
  
    // use scrollForce for further calculations or logging
    console.log('Scroll force:', scrollForce);


    let n = scrollForce / 100
    let s = e.deltaY / 100;
    console.log(s)
    console.log(camera.position.z)

    if(s === 1) {
      gsap.to(camera.position, {
        z : camera.position.z + 10 * SPEED_ROLL,
        duration: 1,
        ease : Power4.easeOut
      })
    }else{
  
      gsap.to(camera.position, {
        z : (camera.position.z - 10) * SPEED_ROLL,
        duration: 1,
        ease : Power4.easeOut
      })
    }
    
   
  }

  return null
}





export default function Gallery() {
  return (
    <>
      <section style={{ backgroundColor: "white", width: "100vw", height: "100vh" }}>
      <Canvas>
   
        <axesHelper args={[500, 500, 500]} />
       {/*  <DemoImg/> */}
        <PlaneGeo/>
        <Controls  />
      </Canvas>
      </section>

    </>
  )
}
