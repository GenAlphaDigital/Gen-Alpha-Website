import Image from "next/image";
import styles from "./styles.module.css";
import StaggeredWords from "../StaggeredWords/StaggeredWords";
import StaggeredText from "../StaggeredText/StaggeredText";
import { MotionButton, MotionDiv } from "../motionComponents/motionComponents";
import about_gif from "../../../public/about_gif.json";
import Lottie from "lottie-react";
import G from "@/components/3d Components/g";

const About = ({ aboutRef }) => {
  return (
    <div className={styles.container} ref={aboutRef}>
      <div className={styles.textContainer}>
        <div className={styles.header}>
          <small>
            <StaggeredWords text={"About Us"} styles={{ fontSize: "2rem" }} />
          </small>
          <MotionDiv
            initial={{
              width: 0,
            }}
            whileInView={{
              width: "100%",
              transition: {
                duration: 1.6,
              },
            }}
            className={styles.line}
          ></MotionDiv>
        </div>
        <div className={styles.small}>
          <Lottie className={styles.gifstyling} animationData={about_gif} />
        </div>
        <div>
          <StaggeredText
            lineHeight={"1.3"}
            whileInView={true}
            text={`We at Gen Alpha look to redefine routine & mundane tasks as engaging and distinctive experiences in marketing and strategy. Based in Hyderabad & Composed of vibrant and dynamic individuals rich in our skills, this team of young professionals brings unmatched energy and creativity, fueled by a shared passion to deliver on client goals by continuously testing their limits and embracing new challenges.`}
          />
          <br />
          <StaggeredText
            whileInView={true}
            lineHeight={"1.3"}
            text={`
           Unlike typical marketing agencies, our focus is on data-driven strategies designed to meet and exceed client expectations. Our distinct approach & experience in Designing, Technology and growth marketing ensures we maintain a competitive edge. Our culture is driven by curiosity in finding new possibilities instead of being comfortable with the known.
`}
          />
          <MotionButton
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.6,
              },
            }}
            viewport={{
              once: true,
            }}
            className={styles.btn}
          >
            Know More
          </MotionButton>
        </div>
      </div>
      <div className={styles.large}>
        <MotionDiv
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.6,
            },
          }}
          className={styles.imgContainer}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // border: "1px solid rgba(0,0,0,0.5)",
          }}
        >
          {/* <Image src={"/image-2.png"} alt="about" width={1000} height={1000} /> */}
          {/* <Lottie className={styles.gifstyling} animationData={about_gif} /> */}
          <G />
        </MotionDiv>
      </div>
    </div>
  );
};

export default About;
