import styles from "./styles.module.css";
import { MotionDiv } from "../motionComponents/motionComponents";
import Image from "next/image";

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

const Header = () => {
  return (
    <MotionDiv
      className={styles.header}
      variants={flow}
      initial="initial"
      animate="visible"
    >
      <Image src={"/Logo.svg"} alt="logo" width={120} height={120} />
    </MotionDiv>
  );
};

export default Header;
