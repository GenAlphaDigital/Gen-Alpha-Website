"use client";
import React from "react";
import {
  MotionDiv,
  MotionP,
  MotionSpan,
} from "../motionComponents/motionComponents";

const container = {
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textVarient = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const StaggeredText = ({ text, styles, lineHeight, whileInView }) => {
  const flag = whileInView;
  const letters = text.split("");
  return (
    <>
      {
        <MotionDiv variants={container} initial="hidden" whileInView="show">
          <MotionP
            style={{
              marginBlockStart: 0,
              marginBlockEnd: 0,
              lineHeight: lineHeight ? lineHeight : "1.1",
            }}
            initial={{
              opacity: 0,
              y: 50,
            }}
            {...(flag
              ? {
                  whileInView: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 2 },
                  },
                  viewport: {
                    once: true,
                  },
                }
              : { animate: { opacity: 1, y: 0, transition: { duration: 2 } } })}
          >
            {letters.map((letter, index) => (
              <MotionSpan key={index} style={styles}>
                {letter}
              </MotionSpan>
            ))}
          </MotionP>
        </MotionDiv>
      }
    </>
  );
};

export default StaggeredText;
