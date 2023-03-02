import React, { useRef, useState, Fragment, useEffect } from 'react'
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import GlobalProduct3D from '.././components/3d/GlobalProduct3D'
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { CSS3DObject, CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer'
extend({ OrbitControls })

const images = [
  require('.././asset/gallery/1.jpg'),
  require('.././asset/gallery/2.jpg'),
  require('.././asset/gallery/4.jpg'),
  require('.././asset/gallery/7.jpg'),
  require('.././asset/gallery/9.jpg'),
  require('.././asset/gallery/3.png'),
  require('.././asset/gallery/5.png'),
  require('.././asset/gallery/8.png'),
  require('.././asset/gallery/53.png'),
  require('.././asset/gallery/b.png'),
  require('.././asset/gallery/bn.png'),
  require('.././asset/gallery/d.png'),
  require('.././asset/gallery/dg.png'),
  require('.././asset/gallery/e.png'),
  require('.././asset/gallery/fg.png'),
  require('.././asset/gallery/fw.png'),
  require('.././asset/gallery/h.png'),
  require('.././asset/gallery/j.png'),
  require('.././asset/gallery/js.png'),
  require('.././asset/gallery/n.png'),
  require('.././asset/gallery/nd.png'),
  require('.././asset/gallery/q.png'),
  require('.././asset/gallery/r.png'),
  require('.././asset/gallery/rt.png'),
];




function Controls() {
  const controlsRef = useRef();
  const { gl, camera } = useThree();

useEffect(() => {
  console.log(camera)
}, [camera])


  useEffect(() => {
  //  document.addEventListener('wheel', handleScroll);
 
    return () => {
     // document.removeEventListener('wheel', handleScroll);
      
    };
  }, [camera]);

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
      <section style={{ background: "gray", width: "100vw", height: "100vh" }}>

        <Canvas  >
          <pointLight position={[10, 10, 10]} />
          <ambientLight />
         <GlobalProduct3D /> 

          <mesh>
            <boxGeometry args={[10, 10, 10]} position={[0, 0, 0]} />
            <meshStandardMaterial />
          </mesh>
          <Controls />
        </Canvas>
        <div id='container'></div>
      </section>

    </>

  )
}
