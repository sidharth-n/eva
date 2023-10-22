import { useState, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";

function Track() {
  const track = useGLTF("./env.glb");
  track.scene.position.set(0, -4, -20);
  track.scene.scale.set(0.01, 0.01, 0.01);
  track.scene.rotation.set(0, 1.57, 0);
  return (
    <>
      <primitive object={track.scene} receiveShadow />
    </>
  );
}

export default Track;
