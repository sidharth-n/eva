import { useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

function Track() {
  const [zPosition, setZPosition] = useState(-20); // Initial Z position
  const track = useGLTF("./env.glb");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setZPosition((prevZ) => {
        const newZ = prevZ + 1; // Adjust this value to control the speed
        if (newZ > 150) {
          clearInterval(intervalId); // Stop the interval once Z position reaches 150
        }
        return newZ;
      });
    }, 10); // Adjust this value to control the frequency of updates

    return () => clearInterval(intervalId); // Clear the interval when component unmounts
  }, []);

  useEffect(() => {
    track.scene.position.set(0, -4, zPosition);
  }, [track, zPosition]);

  return (
    <>
      <primitive object={track.scene} receiveShadow />
    </>
  );
}

export default Track;
