import React, { useRef } from 'react'
import * as THREE from "three";
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Cy = () => {
    let tex = useTexture("./image4.png");
    let cyl = useRef(null);
    useFrame((state,delta)=>{
      cyl.current.rotation.y +=delta;
    });
    // tex.needsUpdates = true;
    // console.log(tex);
    return (
        <group rotation={[0, 1.4, 0.5]}>
        <mesh ref={cyl}>
            <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
            <meshBasicMaterial map={tex} transparent side={THREE.DoubleSide} />



        </mesh>
        </group>
    );
};

export default Cy;