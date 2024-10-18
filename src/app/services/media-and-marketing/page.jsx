import Image from "next/image";
import styles from "./page.module.css";
import DropDown from "../component/Dropdown/DropDown";
import { Media_and_Marketing } from "../data/data";
import { MotionDiv } from "@/components/motionComponents/motionComponents";
import StaggeredText from "@/components/StaggeredText/StaggeredText";
import Marketing from "@/components/3d Components/marketing";

const page = () => {
  return (
    <>
      <div className={styles.logo}>
        <Image src={"/Logo.svg"} alt="" width={120} height={120} />
      </div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.dropDown}>
            <DropDown data={Media_and_Marketing} />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>
              <StaggeredText text={"Media and Marketing Services"} />
            </h1>
            <div className={styles.desc}>
              <StaggeredText
                text={`
                  In the world of marketing, it’s survival of the fittest. Let us be your secret weapon, bringing the perfect mix of creativity, strategy, and a dash of attitude.`}
                styles={{
                  fontSize: "1.1rem",
                  fontWeight: "300",
                }}
              />
            </div>
            <MotionDiv
              initial={{
                width: "0%",
              }}
              animate={{
                width: "60%",
                transition: {
                  duration: 1,
                },
              }}
              className={styles.line}
            ></MotionDiv>
            <Marketing />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
