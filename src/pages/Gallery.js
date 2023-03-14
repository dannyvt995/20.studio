import React, { useRef, useState, Fragment, useEffect } from 'react'
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import GlobalProduct3D from '.././components/3d/GlobalProduct3D'
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import PlaneGeo from '../components/3d/PlaneGeo';
import gsap, { Power2 } from 'gsap';
import { Vector2 ,Vector3} from 'three';
import DemoImg from '../components/3d/DemoImg';
extend({ OrbitControls })


function Controls() {
  const controls = useRef()
  const { camera, gl,scene } = useThree()
 
  gl.gammaFactor = 2.2
  gl.outputEncoding = THREE.sRGBEncoding

  useEffect(() => {
    camera.position.set(0,0,300)
  })

  useFrame(() => {
    controls.current.update();
  })
  

   // Listen to the scroll event and tween the camera position and zoom level
 /*   useEffect(() => {
    const handleScroll = (e) => {
      console.log('run')

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const zoomLevel = Math.max(1 - scrollTop * 0.001, 0.5);
      const targetPosition = { x: 0, y: 0, z: 300 * zoomLevel };
      gsap.to(camera.position, { duration: 0.5, ...targetPosition, ease: "power2.out" });
      controls.current.update();
    };
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [camera, controls]); */



  return <orbitControls ref={controls} args={[camera, gl.domElement]} enableDamping={true} dampingFactor={0.2}zoomSpeed={1.2} enableRotate={false}  enableZoom={true}  />
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
