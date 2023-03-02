import React,{ useRef, useState , Fragment,useEffect} from 'react'
import { Canvas,extend,useThree,useFrame } from "@react-three/fiber";
import GlobalProduct3D from ".././components/3d/GlobalProduct3D";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({OrbitControls})

function Controls() {
  const controls = useRef()
  const { camera, gl } = useThree()
  useEffect(() => {
    const handleScroll = (e) => {
      camera.position.z += e.deltaY * 0.5;
    };
    document.addEventListener('wheel', handleScroll);
    return () => {
      document.removeEventListener('wheel', handleScroll);
    };
  }, [camera]);
 
  return (
    <orbitControls
      ref={controls}
      args={[camera,gl.domElement]}
      enableZoom={true}
      enablePan={true}
      enableRotate={true}
      enableDamping={true}
      dampingFactor={0.1}
      rotateSpeed={0.5}
    />
  );
}

export default function Gallery() {

  return (
    <>
     <section style={{background:"gray",width:"100vw",height:"100vh"}}>

        <Canvas  >
          <pointLight position={[10, 10, 10]} />
          <ambientLight />
          <GlobalProduct3D  position={[0, 0, 0]} />
          <Controls/>
        </Canvas>
        <div id='container'></div>
     </section>
     
    </>
  
  )
}
