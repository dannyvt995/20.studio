import React, { useRef, useEffect, useState } from "react";
import { useThree, extend, useLoader, useFrame } from "@react-three/fiber";
import * as THREE from 'three';

import gsap, { Power2 } from "gsap";
import POS_JSON from './pos.json'

const images = {
    image1: require('../.././asset/gallery/3.png'),
    image2: require('../.././asset/gallery/5.png'),
    image3: require('../.././asset/gallery/8.png'),
    image4: require('../.././asset/gallery/b.png'),
    image5: require('../.././asset/gallery/7.jpg')
};



export default function ImgFullPage() {
    // config var
    const ref = useRef();
    const [targets, setTargets] = useState([]);

    const { viewport, scene, mouse } = useThree();
    const meshRef = useRef();
    const [active, setActive] = useState(false)
    //config obj
    const SIZE_GROUP = { w: 900, h: 500, z: 0 }
    const W_GEO = 80

    /*  useFrame(({ clock }) => (
     
         meshRef.current.children[22].material.uTime = clock.getElapsedTime()
     )); */

    useEffect(() => {
        console.log(POS_JSON)

        for (let i = 0; i < POS_JSON.length; i++) {
            let texture = new THREE.TextureLoader().load(images[`image${Math.floor(Math.random() * 5 + 1)}`])
            let aspectOfPlane = W_GEO / POS_JSON[i].h;
            let aspectOfImage = 644 / 965;
            let yScale = 1;
            let xScale = aspectOfPlane / aspectOfImage;
            if (xScale > 1) { // it doesn't cover so based on x instead
                xScale = 1;
                yScale = aspectOfImage / aspectOfPlane;
            }
            texture.repeat.set(xScale, yScale);
            texture.offset.set((1 - xScale) / 2, (1 - yScale) / 2);
            targets.push(
                <mesh key={Math.random() * 50}
                    position={[POS_JSON[i].x, POS_JSON[i].y, 0]} // Pos defuat
                    scale={[1, 1, 1]}
                >
                    <planeGeometry attach="geometry" args={[W_GEO, POS_JSON[i].h]} />
                    {/*  <waveShaderMaterial attach="material"  uTexture={texture}   /> */}
                    <meshBasicMaterial transparent opacity={1} map={texture} />
                </mesh>
            )

        }

    }, [])

    return (
        <>
            <group ref={meshRef}>
                {targets}
            </group>
        </>
    )
}
