import Image from "next/image";
import styles from "./page.module.css";
import DropDown from "../component/Dropdown/DropDown";
import { Tech_Services } from "../data/data";
import { MotionDiv } from "@/components/motionComponents/motionComponents";
import StaggeredText from "@/components/StaggeredText/StaggeredText";
import WebDev from "@/components/3d Components/webdev";

const page = () => {
  return (
    <>
      <div className={styles.logo}>
        <Image src={"/Logo.svg"} alt="" width={120} height={120} />
      </div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.dropDown}>
            <DropDown data={Tech_Services} />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>
              <StaggeredText text={"Technology Services"} />
            </h1>
            <div className={styles.desc}>
              <StaggeredText
                text={`
              Who says tech can’t be exciting? We use it to wow your customers, turbocharge your business, and keep your brand ahead of the curve. Here’s how we work our tech magic:`}
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
            <WebDev />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
