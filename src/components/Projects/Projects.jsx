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
      <button className={styles.btn}>View All</button>
    </div>
  );
};

export default Projects;
