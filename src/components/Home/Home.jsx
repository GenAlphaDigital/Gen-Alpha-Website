import styles from "./styles.module.css";
import StaggeredText from "../StaggeredText/StaggeredText";
import Image from "next/image";
import { MotionButton, MotionDiv } from "../motionComponents/motionComponents";
import { LuPhoneCall } from "react-icons/lu";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const flow = {
  initial: {
    y: "-50",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.8,
      ease: "easeOut",
    },
  },
};

const Home = () => {
  return (
    <div className={styles.container}>
      <MotionDiv
        className={styles.header}
        variants={flow}
        initial="initial"
        animate="visible"
      >
        <Image src={"/Logo.svg"} alt="logo" width={120} height={120} />

        <MotionButton
          variants={flow}
          initial="initial"
          animate="visible"
          className={styles.contactBtn}
        >
          Contact Us{" "}
          <span>
            <LuPhoneCall />
          </span>
        </MotionButton>
      </MotionDiv>

      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
          <div className={styles.texts}>
            <StaggeredText
              text={"We empower digital presence and {Test}"}
              styles={{ fontSize: "2.5rem", lineHeight: "1" }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "0.5rem",
              }}
            >
              <StaggeredText
                text={"amplify impact for startups and businesses. "}
                styles={{
                  fontWeight: "300",
                  lineHeight: "1",
                  fontSize: "1.5rem",
                }}
              />
              <Image src={"/rocket.gif"} alt="rocket" width={45} height={45} />
            </div>
          </div>
          <MotionDiv className={styles.btns}>
            <MotionButton
              variants={flow}
              initial="initial"
              animate="visible"
              className={styles.btn}
            >
              Learn More{" "}
              <span>
                {" "}
                <FaArrowRight />
              </span>
            </MotionButton>
            <MotionButton
              variants={flow}
              initial="initial"
              animate="visible"
              className={styles.btn}
            >
              Contact Us{" "}
              <span>
                <LuPhoneCall />
              </span>
            </MotionButton>
          </MotionDiv>

          {/* Bouncing ball animation */}
          <MotionDiv
            initial={{
              y: "100%",
              opacity: 0,
            }}
            animate={{
              y: "0",
              opacity: 1,
              transition: {
                duration: 1,
                delay: 3,
              },
            }}
            className={styles.bouncingBall}
          >
            <div className={styles.bouncingBallInner}>
              <FaArrowDown />
            </div>
          </MotionDiv>
        </div>

        <div className={styles.videoContainer}>
          {/* <Image src="/graph.webp" alt="graph" width={500} height={500} />
           */}

          <video src="/graph.mp4" autoPlay muted></video>
        </div>
      </div>
    </div>
  );
};

export default Home;
