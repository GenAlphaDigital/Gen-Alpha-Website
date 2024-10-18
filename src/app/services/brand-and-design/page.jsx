import Image from "next/image";
import styles from "./page.module.css";
import DropDown from "../component/Dropdown/DropDown";
import { Brand_and_Design } from "../data/data";
import Branding from "@/components/3d Components/branding";
import { MotionDiv } from "@/components/motionComponents/motionComponents";
import StaggeredText from "@/components/StaggeredText/StaggeredText";

const page = () => {
  return (
    <>
      <div className={styles.logo}>
        <Image src={"/Logo.svg"} alt="" width={120} height={120} />
      </div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.dropDown}>
            <DropDown data={Brand_and_Design} />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>
              <StaggeredText text={"Brand And Design Services"} />
            </h1>
            <div className={styles.desc}>
              <StaggeredText
                text={`
              Your brand shouldn’t just be out there—it should own the
              spotlight, turning heads and leaving a mark wherever it goes.
              Here’s how we bring the spark that makes your brand unforgettable.`}
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
            <Branding />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

// import React from "react";

// const page = () => {
//   return <div></div>;
// };

// export default page;
