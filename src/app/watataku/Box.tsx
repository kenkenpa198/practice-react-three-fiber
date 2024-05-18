import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { Mesh } from "three";

const Box = (props: JSX.IntrinsicElements["mesh"]) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);
  const ref = useRef({} as Mesh);
  useFrame(() => (ref.current.rotation.x += 0.01));
  return (
    <mesh
      ref={ref}
      {...props}
      onClick={() => setClicked(!clicked)}
      scale={clicked ? 2 : 1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial color={hovered ? "orange" : "hotpink"} />
    </mesh>
  );
};

export { Box };
