import { Header, Scene, Survey } from "@components";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Scene />
      <Survey />
    </div>
  );
};

export default App;
