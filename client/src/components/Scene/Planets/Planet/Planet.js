import { useRef } from "react";
import { animated } from "@react-spring/three";
import { useFrame, useThree } from "@react-three/fiber";
import {
  useTexture,
  Sphere,
  Text,
  MeshDistortMaterial,
} from "@react-three/drei";

const Planet = ({ texture, text, textColor, scale, rate, ...rest }) => {
  const textureMap = useTexture(texture);
  const mesh = useRef();

  useThree(({ camera }) => {
    camera.position.z = 5;
  });

  useFrame(() => {
    mesh.current.rotation.y += 0.005;
  });

  return (
    <animated.mesh>
      <sphereBufferGeometry attach="geometry" />
      <MeshDistortMaterial
        transparent={true}
        opacity={0.1}
        attach="material"
        distort={0.5}
        speed={3.2}
        color={textColor}
        wireframe
      />
      <Sphere args={[0.5, 64, 16, 16]} ref={mesh} scale={scale}>
        <meshPhongMaterial attach="material" map={textureMap} />
      </Sphere>
      <Text position-y={1.25} color={textColor} fontSize={0.25}>
        {text.toUpperCase()}
      </Text>
      <Text
        position-y={1.5}
        strokeColor="#f1faee"
        strokeWidth={0.005}
        fontSize={0.15}
      >
        {rate.toFixed(1) + "%"}
      </Text>
    </animated.mesh>
  );
};

export default Planet;
