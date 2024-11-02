import styles from "./styles.module.css";
import StaggeredWords from "../StaggeredWords/StaggeredWords";
import {
  MotionButton,
  MotionDiv,
  MotionP,
} from "../motionComponents/motionComponents";
import about_gif from "../../../public/about_gif.json";
import dynamic from "next/dynamic";
import Link from "next/link";

// Dynamically import Lottie to optimize initial load
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textVarient = {
  hidden: {
    y: 30,
  },
  show: {
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

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
          <Lottie
            className={styles.gifstyling}
            animationData={about_gif}
            loading="lazy"
          />
        </div>

        <MotionDiv
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
          }}
          className="flex flex-col gap-3"
        >
          <MotionP variants={textVarient}>
            Gen Alpha Digitals is your go-to partner for innovative digital
            marketing solutions. We offer expertise in branding, design, and
            technology, including graphic and logo design, UX/UI, Web and App
            development, AR/VR solutions, and SAP platform development.
          </MotionP>
          <MotionP variants={textVarient}>
            Our comprehensive advertising services cover affiliate, social
            media, programmatic, content, and email/WhatsApp marketing. Whether
            you&apos;re a business or a startup, we&apos;re here to help you
            thrive in the digital world.
          </MotionP>
          <Link href={"/about"}>
            <MotionButton variants={textVarient} className={styles.btn}>
              Know More
            </MotionButton>
          </Link>
        </MotionDiv>
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
          }}
        >
          <Lottie
            className={styles.gifstyling}
            animationData={about_gif}
            loading="lazy"
          />
        </MotionDiv>
      </div>
    </div>
  );
};

export default About;
