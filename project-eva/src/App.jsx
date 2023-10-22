// App.js
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { DirectionalLight } from "three";
import Track from "./Track";
import Character from "./Character";
import IntroPage from "./IntroPage";
import "./App.css";

function App() {
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 10, z: -10 });
  const [isIntroVisible, setIntroVisible] = useState(true);

  const handleJoin = () => {
    setIntroVisible(false);
  };

  return (
    <div className="relative w-full h-full">
      {isIntroVisible && <IntroPage onJoin={handleJoin} />}
      <Canvas
        className={`w-full h-full bg-black ${isIntroVisible ? "blur" : ""}`}
        style={{ filter: isIntroVisible ? "blur(5px)" : "none" }}
      >
        <PerspectiveCamera
          makeDefault
          position={[0, 0.6, 97]}
          rotation={[0, 0, 0]}
          fov={60}
        />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[lightPosition.x, lightPosition.y, lightPosition.z]}
          intensity={1}
          target-position={[0, 0, 97]}
        />

        <Environment files={"hdri4.hdr"} background />

        <Track />
        <Character animationNames={["Armature|mixamo.com|Layer0"]} />
        {/*  <OrbitControls /> */}
      </Canvas>
    </div>
  );
}

export default App;
