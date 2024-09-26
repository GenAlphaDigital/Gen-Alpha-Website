import { MotionDiv } from "../motionComponents/motionComponents";
import styles from "./styles.module.css";

const contain = (delay) => ({
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { delay: delay, duration: 0.8 } },
});

const BackgroundVideo = () => {
  return (
    <MotionDiv
      variants={contain(0)}
      initial="hidden"
      whileInView={"visible"}
      className={styles.container}
    >
      <div className={styles.overlay}></div>
      <video src={"/video.mp4"} autoPlay loop muted />
    </MotionDiv>
  );
};

export default BackgroundVideo;
