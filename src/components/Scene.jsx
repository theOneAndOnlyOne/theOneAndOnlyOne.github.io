import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Trees } from "./Trees";
import { Model } from "./Model";
import { Color } from "three";

export function Scene() {
  const refTrees = useRef(null);

  useFrame(() => {
    const { current: group } = refTrees;
    if (group) {
      group.rotation.x = group.rotation.y += 0.002;
    }
  });

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight
        color="white"
        position={[15, 15, 15]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
        <Model
        ref={refTrees}
        position={[0, 0, 0]}
        colors={[
          new Color("#344541").convertLinearToSRGB(),
          new Color("#38574d").convertLinearToSRGB(),
          new Color("#7FAE58").convertLinearToSRGB(),
          new Color("#CDE583").convertLinearToSRGB(),
        ]}
      />
    </>
  );
}