import Image from "next/image";
import styles from "./styles.module.css";
import { MotionDiv } from "../motionComponents/motionComponents";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const popup = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Contact = () => {
  return (
    <MotionDiv
      variants={stagger}
      initial="hidden"
      whileInView="animate"
      className={styles.container}
    >
      <MotionDiv
        variants={popup}
        initial="hidden"
        whileInView="visible"
        className={styles.imgContainer}
      >
        <Image src={"/contact1.gif"} alt="" width={500} height={500} />
      </MotionDiv>
      <MotionDiv
        variants={popup}
        initial="hidden"
        whileInView="visible"
        className={styles.textContainer}
      >
        <p>Are You Ready To Make More Impact?</p>
        <p>Let&apos;s Get In Touch!!</p>
      </MotionDiv>
      <MotionDiv
        className={styles.form}
        variants={popup}
        initial="hidden"
        whileInView="visible"
      >
        {/* Contact Form */}
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </MotionDiv>
    </MotionDiv>
  );
};

export default Contact;
