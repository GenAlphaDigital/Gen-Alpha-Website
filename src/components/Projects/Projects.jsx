import { works } from "./data";
import Card from "./Project Card/Card";
import styles from "./styles.module.css";

const Projects = () => {
  console.log(works)
  return (
    <div className={styles.container}>
      <p>Our Work</p>
      <div className={styles.line}></div>
      <div className={styles.cards}><Card />
        {
          works?.map((work, index)=>(
            work &&
            <Card work={work} i={index} key={index}/>
          ))
        }
      </div>
    </div>
  );
};

export default Projects;
