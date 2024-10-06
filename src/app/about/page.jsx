"use client";

import Image from "next/image";
import robo from "./animations/robo.json";
import gif4 from "./animations/ARVR.json";
import gif2 from "./animations/Dev.json";
import gif1 from "./animations/Digital Marketing.json";
import gif3 from "./animations/Google.json";
import Mission from "./animations/Mission.json";
import styles from "./page.module.css";
import img from "./images/image.png";
import Lottie from "lottie-react";
import { MotionDiv } from "@/components/motionComponents/motionComponents";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Footer from "@/components/Footer/Footer";

const About = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(false);
  const [currentGif, setCurrentGif] = useState(gif1);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
      setTitle(true);
    }, 2000);
  }, []);

  const boxRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  useEffect(() => {
    const gifs = [gif1, gif2, gif3, gif4];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const boxIndex = boxRefs.findIndex(
            (ref) => ref.current === entry.target
          );

          if (entry.isIntersecting) {
            // When the box comes into view, set the corresponding Lottie animation
            setCurrentGif(gifs[boxIndex]);
            setDirection(1); // Play forward
          } else if (entry.boundingClientRect.top > 0 && boxIndex !== -1) {
            // When the box leaves the view going up, reverse the animation
            setDirection(-1); // Play reverse
          }
        });
      },
      { threshold: 0.5 } // 50% of the box needs to be visible
    );

    boxRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      boxRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  });

  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const item = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 1.5,
      },
    },
    exit: {
      x: -100,
      opacity: 0,
      transition: {
        ease: "easeOut",
        duration: 2.5,
      },
    },
  };

  const item2 = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 1,
      },
    },
  };

  return (
    <div className={styles.container}>
      {/* Logo */}
      <div className={styles.logo}>
        <Image src={"/Logo.svg"} alt="" width={120} height={120} />
      </div>

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.wrapper}>
          <AnimatePresence>
            <MotionDiv
              variants={container}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={styles.textContainer}
            >
              {title && (
                <MotionDiv variants={item}>
                  <p>
                    We redefine the routine with data-driven creativity and{" "}
                  </p>
                  <p>relentless innovation</p>
                </MotionDiv>
              )}
              {/* Bouncing ball animation */}
              <MotionDiv
                initial={{
                  y: "100%",
                  opacity: 0,
                }}
                animate={{
                  y: "0",
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 3,
                  },
                }}
                className={styles.bouncingBall}
              >
                <div className={styles.bouncingBallInner}>&darr;</div>
              </MotionDiv>
            </MotionDiv>
          </AnimatePresence>
          <div className={styles.gifyContainer}>
            <Lottie animationData={robo} loop={false} />
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src={img} alt="" width={960} height={960} />
        </div>
      </div>

      {/* About Us Time Line */}
      <p
        style={{
          fontSize: "3rem",
          textAlign: "center",
          margin: "2rem 0",
        }}
      >
        About Us
      </p>
      <div className={styles.about}>
        <MotionDiv className={styles.boxContainer}>
          <MotionDiv
            variants={item2}
            initial="hidden"
            whileInView="visible"
            className={styles.box}
            ref={boxRefs[0]}
          >
            <div>
              <p>Year 2021</p>
              <p>Focus on Digital Marketing Clients</p>
              <p>
                We started our journey by focusing on digital marketing clients,
                building a strong foundation in this sector.
              </p>
            </div>
          </MotionDiv>
          <MotionDiv
            variants={item2}
            initial="hidden"
            whileInView="visible"
            className={styles.box}
            ref={boxRefs[1]}
          >
            <div>
              <p>Year 2022</p>
              <p>Delivered Our First Tech Project</p>
              <p>
                In 2022, we successfully delivered our first tech project,
                expanding our expertise and service offerings.
              </p>
            </div>
          </MotionDiv>
          <MotionDiv
            variants={item2}
            initial="hidden"
            whileInView="visible"
            className={styles.box}
            ref={boxRefs[2]}
          >
            <div>
              <p>Year 2023</p>
              <p>Registered as a Google & Amazon Partnered Agency</p>
              <p>
                In 2023, we achieved a significant milestone by becoming a
                Google and Amazon Partnered agency, expanding our services to
                Sports, Fashion & E-commerce, and Real Estate sectors.{" "}
              </p>
            </div>
          </MotionDiv>
          <MotionDiv
            variants={item2}
            initial="hidden"
            whileInView="visible"
            className={styles.box}
            ref={boxRefs[3]}
          >
            <div>
              <p>December 2023</p>
              <p>Delivered Our First AR/VR Project</p>
              <p>
                Delivered our first AR/VR project for an Interior Designer,
                showcasing our innovation in immersive technology.
              </p>
            </div>
          </MotionDiv>
        </MotionDiv>
        <MotionDiv
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
            transition: {
              duration: 1.8,
            },
          }}
          className={styles.gifsContainer}
        >
          <Lottie
            animationData={currentGif}
            loop={true}
            direction={direction}
          />
        </MotionDiv>
      </div>

      <p
        style={{
          fontSize: "3rem",
          textAlign: "center",
          margin: "2rem 0",
        }}
      >
        Our Mission and Vision
      </p>
      <div className={styles.about}>
        <div className={styles.boxContainer}>
          <div className={styles.box2}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <p>Our Mission</p>
              <p>
                Our mission is to bring brands and people together through
                thoughtful, data-driven marketing that truly resonates. We’re
                passionate about fueling our client&apos;s growth and success,
                and we do it by blending creativity with a deep commitment to
                delivering real results.
              </p>
            </div>
          </div>
          <div className={styles.box2}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <p>Our Vision</p>
              <p>
                Our vision is to redefine marketing’s future by crafting
                innovative campaigns that spark growth, connect with people on a
                deeper level, and create lasting impressions in the market. We
                aim to foster a work environment that accepts the exceptional as
                usual.
              </p>
            </div>
          </div>
        </div>
        <MotionDiv
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
            transition: {
              duration: 1.8,
            },
          }}
          className={styles.gifsContainer}
        >
          <Lottie animationData={Mission} width={"75%"} height={"75%"} />
        </MotionDiv>
      </div>
      <Footer />
    </div>
  );
};

export default About;
