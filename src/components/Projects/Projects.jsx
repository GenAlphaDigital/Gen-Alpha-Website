import Card from "./Project Card/Card";
import styles from "./styles.module.css";

const Projects = () => {
  return (
    <div className={styles.container}>
      <small>Our Work</small>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <button className={styles.btn}>
        <p>View All</p>
      </button>
    </div>
  );
};

export default Projects;
