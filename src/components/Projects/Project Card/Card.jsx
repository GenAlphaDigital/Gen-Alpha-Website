import Image from "next/image";
import styles from "./styles.module.css";
import { MotionDiv } from "@/components/motionComponents/motionComponents";

const line = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "100%",
    transition: {
      duration: 1.2,
    },
  },
};

const left = {
  hidden: {
    x: "-5vh",
  },
  visible: {
    x: 0,
    transition: {
      duration: 1.2,
    },
  },
};

const right = {
  hidden: {
    x: "5vh",
  },
  visible: {
    x: 0,
    transition: {
      duration: 1.2,
    },
  },
};

const Card = () => {
  return (
    <div className={styles.container}>
      <MotionDiv
        variants={line}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
        className={styles.line}
      ></MotionDiv>
      <div className={styles.project}>
        <MotionDiv
          variants={left}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          className={styles.textContainer}
        >
          <h3>Project Title</h3>
          <p>
            Project Description, Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
        </MotionDiv>
        <MotionDiv
          variants={right}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          className={styles.imgContainer}
        >
          <Image
            src={"/projects/project1.jpg"}
            alt="project"
            width={1000}
            height={1000}
          />
        </MotionDiv>
      </div>
    </div>
  );
};

export default Card;
