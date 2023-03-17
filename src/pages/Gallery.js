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
import BoxGeo from '../components/3d/BoxGeo'
import { ScrollTrigger } from "gsap/ScrollTrigger";
extend({ OrbitControls })

gsap.registerPlugin(ScrollTrigger);

function Controls() {
  const controls = useRef()
  const { camera, gl,scene } = useThree()
 
  gl.gammaFactor = 2.2
  gl.outputEncoding = THREE.sRGBEncoding

  const MAX_VIEW = 86
  const MED_VIEW = 160
  const MIN_VIEW = 200
  const MMIN_VIEW = 400
  useEffect(() => {
    console.log(controls)
    camera.position.set(0,0,50 );
   // controls.current.target = new THREE.Vector3(400,320,MIN_VIEW)

  })

   useFrame(() => {
    //controls.current.update();
  }) 
 return null 
}

export default function Gallery() {
  return (
    <>
      <div className='container'>
     
      <section id='display-3d'>
      <Canvas>
   
        <axesHelper args={[500, 500, 500]} />
       {/*  <DemoImg/> */}
        {/* <PlaneGeo/> */}
        <BoxGeo/>
        <Controls  />
      </Canvas>
      </section>
      </div>
      

    </>
  )
}
