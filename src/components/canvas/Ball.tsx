"use client";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "./CanvasLoader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  useEffect(() => {
    props.onRender(true);
    return () => props.onRender(false);
  }, []);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.5}>
        <dodecahedronGeometry args={[1, 5]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

export function BallCanvas({ icon }) {
  const [showModel, setShowModel] = useState(false);
  return (
    <Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={showModel && <CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball
          imgUrl={icon}
          onRender={(val) => {
            setShowModel(val);
          }}
        />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
