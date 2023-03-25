import React, { useRef, useState, Fragment, useEffect, Suspense, useCallback } from 'react'
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import GlobalProduct3D from '.././components/3d/GlobalProduct3D'
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TrackballControls  } from ".././components/3d/TrackballControls";
import ImgFullPage from '../components/3d/ImgFullPage';
import gsap, { Power2, Power4 } from 'gsap';
import { Scene, Vector2, Vector3 } from 'three';
import DemoImg from '../components/3d/DemoImg';
import debounce from 'lodash/debounce';

import { ScrollTrigger } from "gsap/ScrollTrigger";

extend({ TrackballControls })

function TrackballControlsComponent() {
  const { camera, gl,scene } = useThree();
  const controlsRef = useRef();
  const MAX_VIEW = 86
  const MED_VIEW = 160
  const CAM_VIEW_Z = 150
  const SIZE_GROUP = { w: 900, h: 500, z: 0 }
  useEffect(() => {
    const controls = new TrackballControls(camera, gl.domElement,scene.children[1]);
    controlsRef.current = controls;
  console.log(controlsRef.current)
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);

  let t = 0
  useEffect(() => {
    console.log(controlsRef.current)
    console.log(scene.children[1].position)
    scene.children[1].position.set(-(SIZE_GROUP.w / 2 + 50), -(SIZE_GROUP.h / 1.6), SIZE_GROUP.z)
    controlsRef.current.object.position.set(0, 0, CAM_VIEW_Z);
    controlsRef.current.noRotate = true
    controlsRef.current.noPan = true
   // controlsRef.current.noZoom = true
    controlsRef.current.zoomSpeed = 0.2
    controlsRef.current.maxDistance = CAM_VIEW_Z + 100
   controlsRef.current.minDistance = 95
    controlsRef.current.dynamicDampingFactor = 0.092
  },[controlsRef,scene])

  let did =0
  let targetTo = 0
  let delta = 0
  const handleWheel = (e) => {
    delta += e.deltaY > 0 ? 2 : -2;
    console.log(delta)
    gsap.fromTo(controlsRef.current.object.position,{
      z :controlsRef.current.object.position.z,
      overwrite:"auto",
      duration:  0.5,
    }, {
      z :controlsRef.current.object.position.z + (delta * 4),
      overwrite:"auto",
      duration:  0.5,
      onComplete:()=> {
        delta = 0
      }
    })
    
  };



  useEffect(() => {
  
    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [handleWheel]);


 
  return null;
}
export default function Aboutus() {
  return (
    <>
      <div >
        <section style={{ backgroundColor: "#1E1E1E", width: "100vw", height: "100vh" }}>
        <Canvas
            gl={{ antialias: true }}
            onCreated={({ gl }) => (gl.gammaFactor = 2.2, gl.outputEncoding = THREE.sRGBEncoding)}
          >
            <axesHelper args={[500, 500, 500]} />
            <ImgFullPage />
  
            <TrackballControlsComponent/>
            
          </Canvas>
        </section>
      </div>


    </>
  )
}
