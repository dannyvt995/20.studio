import React, { useRef, useState, Fragment, useEffect } from 'react'
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import GlobalProduct3D from '.././components/3d/GlobalProduct3D'
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import PlaneGeo from '../components/3d/PlaneGeo';
import { DirectionalLight } from '@react-three/drei';
import { Vector2 ,Vector3} from 'three';
import DemoImg from '../components/3d/DemoImg';
extend({ OrbitControls })


function Controls() {
  const controls = useRef()
  const { camera, gl,scene } = useThree()
 
  gl.gammaFactor = 2.2
  gl.outputEncoding = THREE.sRGBEncoding
  useEffect(() => {
    camera.position.set(0,0,500)

    console.log(scene)
  })
  useFrame(() => {
    controls.current.update()
  })
  return <orbitControls ref={controls} args={[camera, gl.domElement]} enableDamping dampingFactor={0.1} enableRotate={false}  enableZoom={true}  />
}





export default function Gallery() {
 
  return (
    <>
      <section style={{ backgroundColor: "black", width: "100vw", height: "100vh" }}>
    
      <Canvas>
   
        <axesHelper args={[500, 500, 500]} />
       {/*  <DemoImg/> */}
        <PlaneGeo/>
        <Controls />
      </Canvas>
      </section>

    </>

  )
}
