import { inputs } from "@constants/survey";
import { useState } from "react";

import styles from "./styles.module.css";

const Survey = () => {
  const [selected, setSelected] = useState("earth");

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div className={styles.survey}>
      <p className={styles.question}>Choose a planet you want</p>
      <div className={styles.options}>
        {inputs.map(({ value, label, ...rest }) => (
          <label key={value}>
            <input
              checked={selected === value}
              onChange={handleChange}
              value={value}
              {...rest}
            />
            {label}
          </label>
        ))}
      </div>
      <button className={styles.button}>Vote Now!</button>
    </div>
  );
};

export default Survey;
