import Image from "next/image";
import styles from "./styles.module.css";
import StaggeredWords from "../StaggeredWords/StaggeredWords";
import StaggeredText from "../StaggeredText/StaggeredText";
import { MotionButton, MotionDiv } from "../motionComponents/motionComponents";
import about_gif from "../../../public/about_gif.json";
import Lottie from "lottie-react";

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
            text={`Gen Alpha Digitals is your go-to partner for innovative digital
            marketing solutions. We offer expertise in branding, design, and
            technology, including graphic and logo design, UX/UI, Web and App
            development, AR/VR solutions, and SAP platform development.`}
          />
          <br />
          <StaggeredText
            whileInView={true}
            lineHeight={"1.3"}
            text={`
            Our comprehensive advertising services cover affiliate, social
            media, programmatic, content, and email/WhatsApp marketing. Whether
            you're a business or a startup, we're here to help you
            thrive in the digital world.`}
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
      >
        {/* <Image src={"/image-2.png"} alt="about" width={1000} height={1000} /> */}
        <Lottie className={styles.gifstyling} animationData={about_gif} />
      </MotionDiv>
      </div>
    </div>
  );
};

export default About;
