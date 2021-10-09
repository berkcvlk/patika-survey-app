import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title} content="planets">
        Survey
      </h1>
    </div>
  );
};

export default Header;
