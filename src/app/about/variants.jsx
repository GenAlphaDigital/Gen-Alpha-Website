"use client";
import {
  MotionDiv,
  MotionSpan,
} from "@/components/motionComponents/motionComponents";

const AnimatedTextWord = ({ text, fontSize }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <MotionDiv
      style={{ overflow: "hidden", display: "flex", fontSize: "3rem" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
    >
      {words.map((word, index) => (
        <MotionSpan
          variants={child}
          style={{
            marginRight: "10px",
            fontSize: fontSize ? fontSize : "3rem",
          }}
          key={index}
        >
          {word}
        </MotionSpan>
      ))}
    </MotionDiv>
  );
};

export default AnimatedTextWord;
