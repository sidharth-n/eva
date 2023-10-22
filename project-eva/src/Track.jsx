import { useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

function Track() {
  const { scene: trackScene } = useGLTF("./env.glb");
  const [tracks, setTracks] = useState([
    { zPosition: -20, object: trackScene.clone() },
  ]);

  useEffect(() => {
    // Set initial scale and rotation for the first track
    const track = tracks[0].object;
    track.scale.set(0.01, 0.01, 0.01);
    track.rotation.set(0, 1.57, 0);
  }, [tracks]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTracks((prevTracks) => {
        const updatedTracks = prevTracks.map((track) => {
          const newZ = track.zPosition + 1; // Adjust speed
          return { ...track, zPosition: newZ };
        });

        const firstTrack = updatedTracks[0];
        if (firstTrack.zPosition === 50 && updatedTracks.length === 1) {
          // Create and introduce the new track when first track reaches zPosition of 50
          const newTrack = {
            zPosition: -175, // Set the new track's zPosition to -220
            object: trackScene.clone(),
          };
          newTrack.object.scale.set(0.01, 0.01, 0.01);
          newTrack.object.rotation.set(0, 1.57, 0);
          updatedTracks.push(newTrack);
        }

        if (firstTrack.zPosition === 200) {
          // When first track reaches zPosition of 200, remove it
          updatedTracks.shift();
        }

        return updatedTracks;
      });
    }, 100); // Adjust frequency of updates

    return () => clearInterval(intervalId); // Clear the interval when component unmounts
  }, []);

  useEffect(() => {
    tracks.forEach((track) => {
      track.object.position.set(0, -4, track.zPosition);
    });
  }, [tracks]);

  return (
    <>
      {tracks.map((track, index) => (
        <primitive key={index} object={track.object} receiveShadow />
      ))}
    </>
  );
}

export default Track;
