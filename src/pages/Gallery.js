import React, { useRef, useState, Fragment, useEffect } from 'react'
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import GlobalProduct3D from '.././components/3d/GlobalProduct3D'

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls })



function Controls() {
  const controlsRef = useRef();
  const { gl, camera } = useThree();

useEffect(() => {
  //console.log(camera)
  camera.position.x = 0
  camera.position.y = 0
  camera.position.z = 1000
  
}, [camera])


  useEffect(() => {
  
    
  }, []);

  useFrame(() => {
    controlsRef.current.update();
  });

  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      enableDamping
      dampingFactor={0.05}
      rotateSpeed={0.5}
      enablePan={true}
      enableZoom={true}
      enableRotate={true}
    />
  );
}


export default function Gallery() {

  return (
    <>
      <section style={{ background: "white", width: "100vw", height: "100vh" }}>

        <Canvas  >
        <gridHelper args={[500, 10]} />
          <pointLight position={[10, 10, 10]} />
          <ambientLight />
         <GlobalProduct3D /> 

          {/* <mesh>
            <boxGeometry args={[10, 10, 10]} position={[0, 0, 0]} />
            <meshStandardMaterial />
          </mesh> */}
          <Controls />
        </Canvas>
        <div id='container'></div>
      </section>

    </>

  )
}
