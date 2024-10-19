import { works } from "./data";
import Card from "./Project Card/Card";
import styles from "./styles.module.css";

const ProjectComp = () => {
  let odd = [];
  let even = [];
  works?.map((work, index) => {
    if (index % 2 == 0) {
      even.push(work);
    } else {
      odd.push(work);
    }
  });

  return (
    <div className={styles.container}>
      <p>Our Work</p>
      <div className={styles.line}></div>
      <div className={styles.cards}>
        {/* <Card /> */}
        <div className={styles.evenContainer}>
          {even.map((work, i) => (
            <Card work={work} i={i} key={i} />
          ))}
        </div>
        <div className={styles.oddContainer}>
          {odd.map((work, i) => (
            <Card work={work} i={i + works.length / 2} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectComp;
