import { useEffect, useState } from "react";

import { Header, Scene, Survey } from "@components";
import { connectSocket, subscribeToNewMessages } from "./socketApi";
import styles from "./App.module.css";

const App = () => {
  const [votes, setVotes] = useState({ earth: 0, mars: 0, jupiter: 0 });

  useEffect(() => {
    connectSocket();

    subscribeToNewMessages((data) => {
      setVotes(data);
    });
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <Scene votes={votes} />
      <Survey />
    </div>
  );
};

export default App;
