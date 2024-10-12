import Card from "./Project Card/Card";
import styles from "./styles.module.css";

const Projects = () => {
  return (
    <div className={styles.container}>
      <p>Our Work</p>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <button className={styles.btn}>View All</button>
    </div>
  );
};

export default Projects;
