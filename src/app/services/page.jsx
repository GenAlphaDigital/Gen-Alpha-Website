import { MotionDiv } from "@/components/motionComponents/motionComponents";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import StaggeredText from "@/components/StaggeredText/StaggeredText";
import StaggeredWords from "@/components/StaggeredWords/StaggeredWords";
import Footer from "@/components/Footer/Footer";
import Packaging from "@/components/3d Components/packaging";
import WebDev from "@/components/3d Components/webdev";
import Marketing from "@/components/3d Components/marketing";
import Branding from "@/components/3d Components/branding";

const page = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <div className={styles.heading}>
          <StaggeredWords text={"Our Services"} />
        </div>
        <MotionDiv
          initial={{ width: "0" }}
          animate={{
            width: "100%",
            transition: {
              duration: 1.8,
              ease: "easeOut",
            },
          }}
          className={styles.line}
        ></MotionDiv>

        {/* Services */}
        <MotionDiv className={styles.service}>
          <div className={styles.textContainer}>
            <StaggeredText
              whileInView={true}
              text={`Blending creativity and strategy, we create compelling brand identities with memorable visuals that align with your vision, from logos to complete brand ecosystems.`}
            />
          </div>
          <div className={styles.imgContainer}>
            <MotionDiv
              initial={{ x: "10vh", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            >
              <Branding />
            </MotionDiv>
          </div>
        </MotionDiv>
        
        <MotionDiv className={styles.service}>
          <div className={styles.textContainer}>
            <StaggeredText
              whileInView={true}
              text={`We develop cutting-edge tech solutions that streamline operations and enhance user experiences, leveraging the latest trends for robust and scalable systems.`}
            />
          </div>
          <div className={styles.imgContainer}>
            <MotionDiv
              initial={{ x: "10vh", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            >
              <WebDev />
            </MotionDiv>
          </div>
        </MotionDiv>
        <MotionDiv className={styles.service}>
          <div className={styles.textContainer}>
            <StaggeredText
              whileInView={true}
              text={`Our data-driven advertising and marketing services combine creative storytelling with strategic campaigns to maximize your brand's reach and impact across multiple platforms.`}
            />
          </div>
          <div className={styles.imgContainer}>
            <MotionDiv
              initial={{ x: "-10vh", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            >
              <Marketing />
            </MotionDiv>
          </div>
        </MotionDiv>
      </div>
      <Footer />
    </div>
  );
};

export default page;
