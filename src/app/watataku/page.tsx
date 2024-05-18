"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box } from "./Box";

function Page(props: any) {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <div id="canvas-container">
      <a href="https://qiita.com/watataku8911/items/687b0609e0739cd1ad4f">
        React-Three-Fiverを用いてReactで3D表現する #初心者 - Qiita
      </a>
      <Canvas
        camera={{ fov: 70, near: 0.1, far: 2000 }}
        style={{ width: "100vw", height: "100vh" }}
      >
        <color args={["#5bbee5"]} attach={"background"} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 20]} />
        <Box position={[-2.4, 0, 0]} />
        <Box position={[0, 0, 0]} />
        <Box position={[2.4, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default Page;
