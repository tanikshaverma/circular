import React from 'react';
import { Canvas } from '@react-three/fiber';
import "./style.css";
import { OrbitControls } from '@react-three/drei';
import Cy from './Cy';
import { Bloom, ToneMapping } from '@react-three/postprocessing';
import { EffectComposer } from '@react-three/postprocessing';

const App = () => {



  return (
    <>
      <Canvas camera={{ fov: 22 }}>


        <ambientLight />
        <Cy />
        <EffectComposer>


          <Bloom
            mipmapBlur
            intensity={0.5} // The bloom intensity.
            luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]

          />

        </EffectComposer>
      </Canvas >
      <div className='w-full bg-black py-10 '>
        <h1 className='text-white  text-center'> WELCOME TO MY PORTFOLIO.</h1>
      </div>
    </>
  );
}

export default App