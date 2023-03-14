import React, { useRef, useEffect, useState } from "react";
import { useThree, useLoader } from "@react-three/fiber";
import * as THREE from 'three';
import gsap, { Power2 } from "gsap";
const images = {
    image1: require('../.././asset/gallery/3.png'),
    image2: require('../.././asset/gallery/5.png'),
    image3: require('../.././asset/gallery/8.png'),
    image4: require('../.././asset/gallery/b.png'),
    image5: require('../.././asset/gallery/7.jpg')
};

export default function PlaneGeo() {
    const [targets, setTargets] = useState([]);
    const [targetHeight, setTargetHeight] = useState([]);
    const [calcY, setCalcY] = useState();
    const [targetsCompare, setTargetsCompare] = useState([]);
    const { viewport, scene, mouse } = useThree();
    const meshRef = useRef();
    const [dragging, setDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const W_GEO = 80

    const heightRandom = [
        110,
        70,
        110,
        110,
        160,
        70,
        160,
        110,
        160,
        110,
        70,
        70,
        70,
        110,
        160,
        110,
        160,
        160,
        160,
        110,
        70,
        160,
        70,
        110,
        110,
        160,
        70,
        70,
        110,
        70,
        70,
        110,
        160,
        70,
        70,
        160,
        110,
        160,
        70,
        110,
        160,
        70,
        110,
        110,
        70,
        160,
        70,
        70,
        70,
        70
    ]
    const COL_GEO = 10
    const ROW_GEO = 5


    const [targetsPos, setTargetsPos] = useState([]);


    const onPointerDown = (e) => {
        console.log(`${Math.round(mouse.x * 100) / 100} === mouseX , ${Math.round(mouse.y * 100) / 100} === mouseY`)
        //console.log(e.clientX, e.clientY)
        console.log(meshRef.current.position.x, meshRef.current.position.y)
        //setDragging(true);
        setDragOffset({
            x: e.clientX - meshRef.current.position.x,
            y: e.clientY - meshRef.current.position.y
        });
    }

    const onPointerUp = (e) => {
        setDragging(false);
    }

    const onPointerMove = (e) => {
        if (dragging) {
            const x = (e.clientX - dragOffset.x);
            const y = (e.clientY - dragOffset.y);
            gsap.to(meshRef.current.position, { x, y, duration: 1 });

        }
    };

    useEffect(() => {
        meshRef.current.position.set(-450, -300, 0)

    }, [meshRef])


    useEffect(() => {

        let H_GEO = 150
        let l = Math.random(150) + 20

        for (let i = 0; i < COL_GEO; i++) {
            for (let j = 0; j < ROW_GEO; j++) {
                let u = Math.random(100) + 10
                let p = (u - 10) * 100

                //let h = Math.floor(Math.random() * 100) + 50;

                let arrh = [70, 110, 160]
                let m = Math.floor(Math.random() * 3)
                let h = arrh[m]
                console.log(h)
                setTargetsPos(targetsPos => [...targetsPos, [(W_GEO + 20) * i, 100 * j, 0]]);
                setTargetHeight(targetHeight => [...targetHeight, h])
             

                let texture = new THREE.TextureLoader().load(images[`image${Math.floor(Math.random() * 5 + 1)}`])
                let aspectOfPlane = W_GEO / h;
                let aspectOfImage = 644 / 965;
                let yScale = 1;
                let xScale = aspectOfPlane / aspectOfImage;
                if (xScale > 1) { // it doesn't cover so based on x instead
                    xScale = 1;
                    yScale = aspectOfImage / aspectOfPlane;
                }
                texture.repeat.set(xScale, yScale);
                texture.offset.set((1 - xScale) / 2, (1 - yScale) / 2);

                // console.log(texture)


                targets.push(
                    <mesh key={Math.random(50) + j}
                        position={[0, 0, -420]} // Pos defuat
                        scale={[.42, .42, .42]}
                        onPointerDown={onPointerDown}
                        onPointerMove={onPointerMove}
                        onPointerUp={onPointerUp}>
                        <planeGeometry args={[W_GEO, h]} />
                        <meshBasicMaterial transparent opacity={0} map={texture} />
                    </mesh>
                )





            }
        }

    }, [scene]);

    useEffect(() => {
        if (targetsPos.length > ((COL_GEO * ROW_GEO) / 3 * 2)) {
            //console.log(targetsPos[1][1])
            console.log(targetHeight)
            console.log(targetsPos)
     
            setTimeout(() => {
                let a = meshRef.current.children

                for (let e = 0; e < a.length; e+=5) {
                        let delayT = Math.random(1) + 0.1
                        gsap.to(a[e].position, {
                            x: targetsPos[e][0],
                            y: targetsPos[e][1]  + (targetHeight[e] / 2),
                            z: targetsPos[e][2],
                            delay: delayT,
                            duration: 1,
                            ease: Power2.easeInOut
                        })
                        animaChild(a[e], delayT)
              

                }
                for (let e = 1; e < a.length; e+=5) {
                    let delayT = Math.random(1) + 0.1
                    gsap.to(a[e].position, {
                        x: targetsPos[e][0],
                        y: targetHeight[e - 1] + (targetHeight[e] / 2) + 20,
                        z: targetsPos[e][2],
                        delay: delayT,
                        duration: 1,
                        ease: Power2.easeInOut
                    })
                    animaChild(a[e], delayT)
                }
                for (let e = 2; e < a.length; e+=5) {
                    let delayT = Math.random(1) + 0.1
                    gsap.to(a[e].position, {
                        x: targetsPos[e][0],
                        y: targetHeight[e - 2] + targetHeight[e - 1] + (targetHeight[e] / 2) + 40,
                        z: targetsPos[e][2],
                        delay: delayT,
                        duration: 1,
                        ease: Power2.easeInOut
                    })
                    animaChild(a[e], delayT)
                }
                for (let e = 3; e < a.length; e+=5) {
                    let delayT = Math.random(1) + 0.1
                    gsap.to(a[e].position, {
                        x: targetsPos[e][0],
                        y: targetHeight[e - 3] + targetHeight[e - 2] + targetHeight[e - 1] + (targetHeight[e] / 2) + 60,
                        z: targetsPos[e][2],
                        delay: delayT,
                        duration: 1,
                        ease: Power2.easeInOut
                    })
                    animaChild(a[e], delayT)
                }
                for (let e = 4; e < a.length; e+=5) {
                    let delayT = Math.random(1) + 0.1
                    gsap.to(a[e].position, {
                        x: targetsPos[e][0],
                        y: targetHeight[e - 4] + targetHeight[e - 3] + targetHeight[e - 2] + targetHeight[e - 1] + (targetHeight[e] / 2) + 80,
                        z: targetsPos[e][2],
                        delay: delayT,
                        duration: 1,
                        ease: Power2.easeInOut
                    })
                    animaChild(a[e], delayT)
                }
               
            }, 1000);
        }

    }, [targetsPos, meshRef])

    function animaChild(target, delay) {
        gsap.to(target.scale, {
            x: 1,
            y: 1,
            z: 1,

            duration: 1,
            ease: Power2.easeInOut
        })
        gsap.to(target.material, {
            opacity: 1,
            duration: 1,
            delay: delay,
            ease: Power2.easeInOut
        })
    }

    return (
        <>
            <group ref={meshRef} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} >
                {targets}
            </group>
        </>
    )
}
