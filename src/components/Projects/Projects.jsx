import Card from "./Project Card/Card";
import styles from "./styles.module.css";

const Projects = () => {
  return (
    <div className={styles.container}>
      <p>Our Work</p>
      <div className={styles.line}></div>
      <div className={styles.cards}><Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
    </div>
  );
};

export default Projects;
