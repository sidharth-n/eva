import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function TrackSegment({ position }) {
  const gltf = useLoader(GLTFLoader, "env.glb");
  return gltf ? <primitive object={gltf.scene} position={position} /> : null;
}

export default TrackSegment;
