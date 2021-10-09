import { Header, Scene } from "@components";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Scene />
    </div>
  );
};

export default App;
