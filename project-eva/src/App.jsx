// App.js
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { DirectionalLight } from "three";
import Track from "./Track";
import Character from "./Character";
import IntroPage from "./IntroPage";
import StatisticsContainer from "./StatisticsContainer";
import ThemeMessage from "./ThemeMessage";
import { useStatistics } from "./useStatistics";
import CheerUpButton from "./CheerUpButton";
import "./App.css";

function App() {
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 10, z: -10 });
  const [isIntroVisible, setIntroVisible] = useState(true);
  const { statistics, cheerUp } = useStatistics();

  const handleJoin = () => {
    setIntroVisible(false);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStatistics((prevStats) => ({
        ...prevStats,
        distance: prevStats.distance + prevStats.currentSpeed / 60 / 60, // distance = speed * time, with time in hours
        energyLevel: prevStats.energyLevel - 1 / 24 / 60, // assuming 1% energy drain per hour
        energyRemaining: prevStats.energyRemaining - 1 / 24 / 60 / 100, // assuming each percent of energy equals a day
      }));
    }, 1000); // update every second

    return () => clearInterval(intervalId); // clear interval on component unmount
  }, []);

  const formattedStats = [
    { title: "Distance Run", value: `${statistics.distance.toFixed(2)} miles` },
    { title: "Average Speed", value: `${statistics.averageSpeed} mph` },
    {
      title: "Current Energy Level",
      value: `${statistics.energyLevel.toFixed(2)}%`,
    },
    {
      title: "Energy Remaining",
      value: `${statistics.energyRemaining.toFixed(2)} days`,
    },
  ];

  return (
    <div className="relative w-full h-full">
      {isIntroVisible && <IntroPage onJoin={handleJoin} />}
      <div
        className={`overlay ${isIntroVisible ? "" : "hidden"}`}
        style={{ zIndex: 10 }} // Overlay div will be on top of other components
      />
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
      <ThemeMessage message="#StopIsraelWar" />
      <StatisticsContainer statistics={formattedStats} />
      <CheerUpButton onCheerUp={cheerUp} />
    </div>
  );
}

export default App;
