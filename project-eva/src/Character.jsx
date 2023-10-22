import { useState, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";

function Character({ animationNames }) {
  const model = useGLTF("./eva.glb");
  model.scene.position.set(0, -4, 80);
  model.scene.scale.set(3.5, 3.5, 3.5);
  model.scene.rotation.set(0, Math.PI, 0);
  const animations = useAnimations(model.animations, model.scene);
  console.log(animations);
  useEffect(() => {
    animationNames.forEach((animationName) => {
      const action = animations.actions[animationName];
      if (action) {
        action.reset().play();
      }
    });

    return () => {
      animationNames.forEach((animationName) => {
        const action = animations.actions[animationName];
        if (action) {
          action.fadeOut();
        }
      });
    };
  }, [animationNames]);
  return (
    <>
      <primitive object={model.scene} receiveShadow />
    </>
  );
}

export default Character;
