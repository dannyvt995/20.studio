import React, { useRef, useState, Fragment, useEffect, Suspense, useCallback } from 'react'
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import GlobalProduct3D from '.././components/3d/GlobalProduct3D'
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TrackballControls  } from ".././components/3d/TrackballControls";
import PlaneGeo from '../components/3d/PlaneGeo';
import gsap, { Power2, Power4 } from 'gsap';
import { Scene, Vector2, Vector3 } from 'three';
import DemoImg from '../components/3d/DemoImg';
import debounce from 'lodash/debounce';

import { ScrollTrigger } from "gsap/ScrollTrigger";

extend({ TrackballControls })


/* function Controls() {
  const trackballRef = useRef();
  const { camera, gl, scene } = useThree()



  const MAX_VIEW = 86
  const MED_VIEW = 160
  const MIN_VIEW = 300

  useEffect(() => {
    camera.position.set(0, 0, MIN_VIEW);
  });


  useFrame(() => {
    trackballRef.current.update();
  });

  return <TrackballControls args={[camera, gl.domElement]} ref={trackballRef} />
} */
function TrackballControlsComponent() {
  const { camera, gl,scene } = useThree();
  const controlsRef = useRef();
  const MAX_VIEW = 86
  const MED_VIEW = 160
  const CAM_VIEW_Z = 150



  const [targetZGr,setTargetZGr] = useState()
    
  let prevValWheel = 0
  useEffect(() => {
    const controls = new TrackballControls(camera, gl.domElement,scene);
    controlsRef.current = controls;

    return () => {
      controls.dispose();
    };
  }, [camera, gl,scene]);

  let t = 0
  useEffect(() => {
    console.log(controlsRef.current)
    console.log(scene.children[1].position)

    controlsRef.current.object.position.set(0, 0, CAM_VIEW_Z);
    controlsRef.current.noRotate = true
    controlsRef.current.noPan = true
   // controlsRef.current.noZoom = true
    controlsRef.current.zoomSpeed = 0.2
    controlsRef.current.maxDistance = CAM_VIEW_Z + 100
   controlsRef.current.minDistance = 95
    controlsRef.current.dynamicDampingFactor = 0.092
    controlsRef.current.staticMoving = false
  },[controlsRef,scene])


  const handleWheel = (e) => {
    const delta = e.deltaY > 0 ? 1 : -1;
    //console.log(numRef.current)
   // console.log(controlsRef.current)

  };



  useEffect(() => {
    const debouncedHandleWheel = debounce(handleWheel, 16.66666);
    window.addEventListener('wheel', debouncedHandleWheel);

    return () => {
      window.removeEventListener('wheel', debouncedHandleWheel);
    };
  }, [handleWheel]);


  
  

  useEffect(() => {
  //  console.log(scene.children[1])
   
  },[controlsRef,scene])
  const numRef = useRef(null);
  useFrame(() => {
    if (controlsRef.current) {
     
      controlsRef.current.update();
    }
   
  });


 
  return null;
}
export default function Gallery() {
  return (
    <>
      <div >
        <section style={{ backgroundColor: "white", width: "100vw", height: "100vh" }}>
        <Canvas
            gl={{ antialias: true }}
            onCreated={({ gl }) => (gl.gammaFactor = 2.2, gl.outputEncoding = THREE.sRGBEncoding)}
          >
            <axesHelper args={[500, 500, 500]} />
            <PlaneGeo />
            {/*   <Suspense fallback={null}>
          </Suspense> */}
            <TrackballControlsComponent/>
            
          </Canvas>
        </section>
      </div>


    </>
  )
}
