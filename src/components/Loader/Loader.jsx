"use client";
import React, { useEffect, useRef, useState, useCallback, memo } from "react";
import { AnimatePresence } from "framer-motion";
import styles from "./styles.module.css";
import { MotionDiv, MotionP } from "../motionComponents/motionComponents";
import dynamic from "next/dynamic";
import Image from "next/image";
import Home from "../Home/Home";

// Dynamic imports for components
const BackgroundVideo = dynamic(() => import("../Background/BackgroundVideo"), {
  ssr: false,
});
const About = dynamic(() => import("../About/About"), { ssr: false });
const Service = dynamic(() => import("../Service/Service"), { ssr: false });
const Projects = dynamic(() => import("../Projects/Projects"), { ssr: false });
const Brands = dynamic(() => import("../Brands/Brands"), { ssr: false });
const Contact = dynamic(() => import("../Contact/Contact"), { ssr: false });
const Footer = dynamic(() => import("../Footer/Footer"), { ssr: false });

// Memoized components to prevent unnecessary re-renders
const MemoizedHome = memo(Home);
const MemoizedAbout = memo(About);
const MemoizedService = memo(Service);
const MemoizedProjects = memo(Projects);
const MemoizedBrands = memo(Brands);
const MemoizedContact = memo(Contact);
const MemoizedFooter = memo(Footer);

const Loader = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [showIntro, setShowIntro] = useState(false);
  const videoRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  const stages = [
    {
      show: showIntro && currentStage === 0,
      text: "Hello There",
      gif: "/gif1.gif",
    },
    {
      show: showIntro && currentStage === 1,
      text: "Want to boost your digital presence?",
      gif: "/gif2.gif",
    },
    {
      show: showIntro && currentStage === 2,
      text: "Well Done!!!",
      gif: "/gif3.gif",
    },
    {
      show: showIntro && currentStage === 3,
      text: "You Came To The Right Place",
      gif: "/gif4.gif",
    },
    {
      show: showIntro && currentStage === 4,
      imageOnly: true,
      image: "/Logo.svg",
    },
  ];

  const scrollToVideo = useCallback(
    () => videoRef.current?.scrollIntoView({ behavior: "smooth" }),
    []
  );
  const scrollToContact = useCallback(
    () => contactRef.current?.scrollIntoView({ behavior: "smooth" }),
    []
  );
  const scrollToAbout = useCallback(
    () => aboutRef.current?.scrollIntoView({ behavior: "smooth" }),
    []
  );

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem("hasSeenIntro");
    if (!hasSeenIntro) {
      setShowIntro(true);
      localStorage.setItem("hasSeenIntro", "true");

      const stageDurations = [2500, 2500, 2500, 2500, 2500];

      const runStages = (i = 0) => {
        if (i >= stageDurations.length) {
          setShowIntro(false);
          setCurrentStage(stageDurations.length);
          return;
        }
        setTimeout(() => {
          setCurrentStage((prev) => prev + 1);
          runStages(i + 1);
        }, stageDurations[i]);
      };

      runStages();
    } else {
      setCurrentStage(stages.length);
    }
  }, []);

  const container = {
    show: { transition: { staggerChildren: 0.35 } },
  };

  const item = (initial) => ({
    hidden: { opacity: 0, y: initial },
    show: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeInOut", duration: 0.8 },
    },
    exit: {
      opacity: 0,
      y: initial,
      transition: { ease: "easeInOut", duration: 0.8 },
    },
  });

  return (
    <div>
      <AnimatePresence>
        {stages.map((stage, index) =>
          stage.show ? (
            <MotionDiv
              key={index}
              variants={container}
              initial="hidden"
              animate="show"
              exit="exit"
              className={styles.container}
            >
              {stage.imageOnly ? (
                <Image
                  src={stage.image}
                  alt="logo"
                  width={500}
                  height={500}
                  className={styles.image}
                  priority
                />
              ) : (
                <MotionP variants={item("-10vw")} className={styles.text}>
                  {stage.text}{" "}
                  <Image
                    src={stage.gif}
                    alt="animated"
                    width={75}
                    height={75}
                    loading="lazy"
                    unoptimized
                  />
                </MotionP>
              )}
            </MotionDiv>
          ) : null
        )}
      </AnimatePresence>

      {currentStage >= stages.length && (
        <>
          <MemoizedHome
            scrollToVideo={scrollToVideo}
            scrollToContact={scrollToContact}
            scrollToAbout={scrollToAbout}
          />
          <BackgroundVideo videoRef={videoRef} />
          <MemoizedAbout aboutRef={aboutRef} />
          <MemoizedService />
          <MemoizedProjects />
          <MemoizedBrands />
          <MemoizedContact contactRef={contactRef} />
          <MemoizedFooter />
        </>
      )}
    </div>
  );
};

export default Loader;
