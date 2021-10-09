import { useFrame } from "@react-three/fiber";

const CameraContainer = ({ children }) => {
  // Move camera axis according to mouse pointer coordinates
  useFrame(({ camera, mouse }, delta) => {
    camera.position.x -= (mouse.x + camera.position.x) * (delta * 3);
    camera.position.y -= (mouse.y + camera.position.y) * (delta * 3);
  });

  return children;
};

export default CameraContainer;
