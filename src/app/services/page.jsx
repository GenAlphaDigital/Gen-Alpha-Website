import {
  MotionDiv,
  MotionP,
} from "@/components/motionComponents/motionComponents";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import StaggeredText from "@/components/StaggeredText/StaggeredText";
import Image from "next/image";
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
              text={`Service Description, Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
            />
          </div>
          <div className={styles.imgContainer}>
            {/* <MotionDiv
              className={styles.card}
              initial={{ x: "10vh", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            >
              <div className={styles.img}>
                <Image src={"/branding.gif"} alt="" width={500} height={500} />
              </div>
              <div className={styles.desc}>
                <b>{"Product Designing and Branding"}</b>
                <button>
                  <div className={styles.arrow}></div>
                </button>
              </div>
            </MotionDiv> */}
            <Branding />
          </div>
        </MotionDiv>
        <MotionDiv className={styles.service}>
          <div className={styles.textContainer}>
            <StaggeredText
              whileInView={true}
              text={`Service Description, Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
            />
          </div>
          <div className={styles.imgContainer}>
            {/* <MotionDiv
              className={styles.card}
              initial={{ x: "-10vh", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            >
              <div className={styles.img}>
                <Image src={"/packaging.gif"} alt="" width={500} height={500} />
                 
              </div>
              <div className={styles.desc}>
                <b>{"Product Packaging"}</b>
                <button>
                  <div className={styles.arrow}></div>
                </button>
              </div>
            </MotionDiv> */}
            <Packaging />
          </div>
        </MotionDiv>
        <MotionDiv className={styles.service}>
          <div className={styles.textContainer}>
            <StaggeredText
              whileInView={true}
              text={`Service Description, Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
            />
          </div>
          <div className={styles.imgContainer}>
            {/* <MotionDiv
              className={styles.card}
              initial={{ x: "10vh", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            >
              <div className={styles.img}>
                <Image src={"/dev.gif"} alt="" width={500} height={500} />
              </div>
              <div className={styles.desc}>
                <b>{"Technology and Development"}</b>
                <button>
                  <div className={styles.arrow}></div>
                </button>
              </div>
            </MotionDiv> */}
            <WebDev />
          </div>
        </MotionDiv>
        <MotionDiv className={styles.service}>
          <div className={styles.textContainer}>
            <StaggeredText
              whileInView={true}
              text={`Service Description, Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
            />
          </div>
          <div className={styles.imgContainer}>
            {/* <MotionDiv
              className={styles.card}
              initial={{ x: "-10vh", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            >
              <div className={styles.img}>
                <Image src={"/marketing.gif"} alt="" width={500} height={500} />
              </div>
              <div className={styles.desc}>
                <b>{"Product Marketing"}</b>
                <button>
                  <div className={styles.arrow}></div>
                </button>
              </div>
            </MotionDiv> */}
            <Marketing />
          </div>
        </MotionDiv>
      </div>
      <Footer />
    </div>
  );
};

export default page;
