import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

function Track() {
  const { scene: trackScene } = useGLTF("./env.glb");

  // Clone the original scene for each track
  const track1 = trackScene.clone();
  const track2 = trackScene.clone();

  useEffect(() => {
    // Set initial positions, scales, and rotations for both tracks
    const setupTrack = (track, zPosition) => {
      track.position.set(0, -4, zPosition);
      track.scale.set(0.01, 0.01, 0.01);
      track.rotation.set(0, 1.57, 0);
    };

    setupTrack(track1, -20); // Set the end of the first track at z=0
    setupTrack(track2, -220); // Set the start of the second track at z=0
  }, [track1, track2]);

  return (
    <>
      <primitive object={track1} receiveShadow />
      <primitive object={track2} receiveShadow />
    </>
  );
}

export default Track;
