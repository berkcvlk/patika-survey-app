import { Canvas } from "@react-three/fiber";

import CameraContainer from "./CameraContainer/CameraContainer";
import Planets from "./Planets/Planets";

const Scene = ({ votes }) => {
  return (
    <Canvas>
      <CameraContainer>
        <ambientLight color="#555555" />
        <pointLight
          intensity={0.8}
          power={9}
          color="#ffebc4"
          position={[-20, -2, 15]}
        />
        <Planets votes={votes} />
      </CameraContainer>
    </Canvas>
  );
};

export default Scene;
