"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import styles from "./styles.module.css";
import { MotionDiv, MotionP } from "../motionComponents/motionComponents";
import Home from "../Home/Home";
import BackgroundVideo from "../Background/BackgroundVideo";
import About from "../About/About";
import Service from "../Service/Service";
import Projects from "../Projects/Projects";
import Brands from "../Brands/Brands";
import Image from "next/image";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";

const Loader = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem("hasSeenIntro");

    if (!hasSeenIntro) {
      // If intro hasn't been seen, show it and set the flag
      setShowIntro(true);
      localStorage.setItem("hasSeenIntro", "true");

      setShow1(true);
      setTimeout(() => {
        setShow1(false);
        setShow2(true);
      }, 3000);

      setTimeout(() => {
        setShow2(false);
        setShow3(true);
      }, 6000);
      setTimeout(() => {
        setShow3(false);
        setShow4(true);
      }, 9000);
      setTimeout(() => {
        setShow4(false);
        setShow5(true);
      }, 12000);
      setTimeout(() => {
        setShow5(false);
        setShow6(true);
      }, 15000);
    } else {
      setShow6(true);
    }
  }, []);

  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const item = (initial) => ({
    hidden: { opacity: 0, y: initial },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 1.6,
      },
    },
    exit: {
      opacity: 0,
      y: initial,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  });

  return (
    <div>
      <AnimatePresence>
        {showIntro && show1 && (
          <MotionDiv
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.container}
          >
            <MotionP variants={item("-10vw")} className={styles.text}>
              Hello There{" "}
              <Image src={"/gif1.gif"} alt="hi" width={75} height={75} />
            </MotionP>
          </MotionDiv>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showIntro && show2 && (
          <MotionDiv
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.container2}
          >
            <MotionP variants={item("10vw")} className={styles.text}>
              Want to boost your digital presence?{" "}
              <Image
                src={"/gif2.gif"}
                alt="thinking"
                width={100}
                height={100}
              />
            </MotionP>
          </MotionDiv>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showIntro && show3 && (
          <MotionDiv
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.container2}
          >
            <MotionP variants={item("-10vw")} className={styles.text}>
              <Image src={"/gif3.gif"} alt="celeb" width={75} height={75} />
              Well Done!!!
              <Image
                src={"/gif3-opp.gif"}
                alt="celeb"
                width={100}
                height={100}
              />
            </MotionP>
          </MotionDiv>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showIntro && show4 && (
          <MotionDiv
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.container}
          >
            <MotionP variants={item("10vw")} className={styles.text}>
              You Came To The Right Place
              <Image src={"/gif4.gif"} alt="hi" width={75} height={100} />
            </MotionP>
          </MotionDiv>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showIntro && show5 && (
          <MotionDiv
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.specialContainer}
          >
            <MotionDiv variants={item("10vw")}>
              <Image src={"/Logo.svg"} alt="logo" width={500} height={500} />
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {show6 && (
          <>
            <Home />
            <BackgroundVideo />
            <About />
            <Service />
            <Projects />
            <Brands />
            <Contact />
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Loader;
