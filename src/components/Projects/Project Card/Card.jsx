import styles from "./styles.module.css";
import { MotionDiv } from "@/components/motionComponents/motionComponents";
import { Model } from "../model/Model";
import gif1 from "../gifs/gif1.json";
import gif2 from "../gifs/gif2.json";
import gif3 from "../gifs/gif3.json";
import gif4 from "../gifs/gif4.json";
import Lottie from "lottie-react";
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

const gifs = [gif1, gif2, gif3, gif4];

const Card = ({ work, i }) => {
  return (
    work && (
      <>
        <MotionDiv
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
            },
          }}
          viewport={{
            once: true,
          }}
          className={styles.container}
        >
          {/* <div className={styles.line}></div> */}
          <div className={styles.imgContainer}>
            <Lottie
              animationData={gifs[i]}
              style={{
                objectFit: "cover",
              }}
            />
          </div>

          <div className={styles.textContainer}>
            <Model
              project={{
                title: work?.title,
                desc: work?.desc,
                img: gifs[i],
                id: work?.id,
              }}
            ></Model>
          </div>
        </MotionDiv>
      </>
    )
  );
};

export default Card;
