import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Html, useProgress } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";
import Track from "./Track";
import Character from "./Character";

import "./App.css";
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12 mb-2"></div>
      <h2 class="text-center text-white text-l font-semibold">
        {progress.toFixed(0)} % loading...
      </h2>
      {/*    <p class="w-1/3 mx-auto text-white text-sm text-center">
        Please wait while we load the assets.
      </p> */}
    </Html>
  );
}

function App() {
  return (
    <Canvas className="w-full h-full bg-black" style={{}}>
      <PerspectiveCamera
        makeDefault
        position={[0, 0.6, 97]}
        rotation={[0, 0, 0]}
        fov={60}
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[0, 10, 10]} intensity={1} />
      <Suspense fallback={<Loader />}>
        <ambientLight />
        <Track />
        <Character animationNames={["Armature|mixamo.com|Layer0"]} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}

export default App;
