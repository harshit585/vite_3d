import { Gltf, OrbitControls, OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import { Mclaren } from "./Mclaren";
// import Mac from "./Mac";

const WebDesign = () => {
  const [width, setWidth] = useState(1);
  useEffect(() => {
    if (screen.width < 720) {
      setWidth(0.5);
    } else {
      setWidth(1);
    }
  }, [screen.width]);
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          {/* <Stage environment="city" intensity={0.5}> */}
          <ambientLight />
          <directionalLight intensity={11} position={[50, 50, 50]} />
          <OrthographicCamera makeDefault position={[100, 100, 500]} />
          {/* <Mclaren /> */}
          <Gltf
            castShadow
            receiveShadow
            // rotation={[-Math.PI / 2, 0, 0]}
            scale={width}
            src="/mclaren.glb"
          />
          {/* </Stage> */}
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      {/* <Desc>
        We design products with a strong focus on both world class design and
        ensuring your product is a market success.
      </Desc> */}
    </>
  );
};

export default WebDesign;
