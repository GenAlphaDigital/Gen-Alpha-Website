"use client";

import {
  MotionDiv,
  MotionH2,
  MotionP,
} from "@/components/motionComponents/motionComponents";
import styles from "./page.module.css";
import { useEffect } from "react";
import Image from "next/image";
import AnimatedTextWord from "./variants";
import About from "@/components/About comp/About";

const Page = () => {
  const contain = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const animate = (ini, fin) => ({
    hidden: {
      opacity: 0.5,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.8,
      },
    },
  });

  useEffect(() => {
    const svg = document.querySelector("svg.curve");
    const path = document.querySelector("svg.curve path");
    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = 0;

    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const totalDistance = 3645;
      const scrollPercent = scrollValue / totalDistance;
      const currentPoint = scrollPercent * pathLength;
      path.style.strokeDashoffset = (pathLength - currentPoint) * 1.5;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.addEventListener("scroll", handleScroll);
          } else {
            window.removeEventListener("scroll", handleScroll);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(svg);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const scroller = document.querySelector(`.${styles.scroller__inner}`);
    const images = scroller.querySelectorAll("img");
    const totalWidth = Array.from(images).reduce(
      (acc, img) => acc + img.width,
      0
    );

    scroller.style.animationDuration = `${totalWidth / 50}px`;
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            <AnimatedTextWord
              text={"Redefining routine with data-driven creativity and"}
            />
            <i>
              <AnimatedTextWord
                text={"relentless innovation"}
                textStyles={`"fontSize": "3.5rem", "color":"blue"`}
              />
            </i>
          </h1>
        </div>
        <div className={styles.heroImg}>
          {/* <Image
            src={"/about/hero.png"}
            alt=""
            width={1280}
            height={768}
            objectFit="cover"
          /> */}
          <About />
        </div>
        <div className={styles.content}>
          <div className={`${styles.svgSection}`}>
            <svg
              width="1229"
              height="2213"
              viewBox="0 0 1229 2213"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="curve"
            >
              <path
                d="M542.559 -6V376.872C542.559 410.009 569.422 436.872 602.559 436.872H1166C1199.14 436.872 1226 463.735 1226 496.872V772.804C1226 805.941 1199.14 832.804 1166 832.804H63C29.8629 832.804 3 859.666 3 892.804V1173.84C3 1206.97 29.8629 1233.84 63 1233.84H1166C1199.14 1233.84 1226 1260.7 1226 1293.84V1590.44C1226 1623.87 1198.68 1650.86 1165.25 1650.44L64.9552 1636.67C31.0651 1636.24 3.5508 1663.95 4.21591 1697.84L9.34543 1959.18C9.98671 1991.85 36.6557 2018 69.3339 2018H318.5H620.713C628.28 2018 635.568 2020.86 641.116 2026.01L840 2210.5"
                stroke="#6A59FF"
                stroke-width="8"
              />
            </svg>
          </div>
          <MotionDiv
            variants={animate("0%", "70.5%")}
            initial="hidden"
            whileInView="visible"
            className={`${styles.box} ${styles.box1}`}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
                gap: "1rem",
              }}
            >
              <h6>Year 2021</h6>
              <h5>Focus on Digital Marketing Clients</h5>
              <p>
                We started our journey by focusing on digital marketing clients,
                building a strong foundation in this sector.
              </p>
            </div>
          </MotionDiv>
          <MotionDiv
            variants={animate("100%", "13%")}
            initial="hidden"
            whileInView="visible"
            className={`${styles.box} ${styles.box2}`}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
                gap: "1rem",
              }}
            >
              <h6>Year 2022</h6>
              <h5>Delivered Our First Tech Project</h5>
              <p>
                In 2022, we successfully delivered our first tech project,
                expanding our expertise and service offerings.
              </p>
            </div>
          </MotionDiv>
          <MotionDiv
            variants={animate("0%", "70.5%")}
            initial="hidden"
            whileInView="visible"
            className={`${styles.box} ${styles.box3}`}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
                gap: "1rem",
              }}
            >
              <h6>Year 2023</h6>
              <h5>Registered as a Google &amp; Amazon Partnered Agency</h5>
              <p>
                In 2023, we achieved a significant milestone by becoming a
                Google and Amazon Partnered agency, expanding our services to
                Sports, Fashion &amp; E-commerce, and Real Estate sectors.{" "}
              </p>
            </div>
          </MotionDiv>
          <MotionDiv
            variants={animate("100%", "13%")}
            initial="hidden"
            whileInView="visible"
            className={`${styles.box} ${styles.box4}`}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
                gap: "1rem",
              }}
            >
              <h6>December 2023</h6>
              <h5>Delivered Our First AR/VR Project</h5>
              <p>
                Delivered our first AR/VR project for an Interior Designer,
                showcasing our innovation in immersive technology.
              </p>
            </div>
          </MotionDiv>
        </div>
      </div>

      {/* Mission, Vision and Why work with us */}
      <div className={styles.mainDiv}>
        {/* Mission and Vision*/}
        <div className={styles.missionVision}>
          <div className={styles.mission}>
            <MotionH2
              variants={contain}
              initial="hidden"
              whileInView={"visible"}
              className={styles.mission__title}
            >
              Our <i>Mission</i>
            </MotionH2>
            <MotionP
              variants={contain}
              initial="hidden"
              whileInView={"visible"}
            >
              Our mission is to bring brands and people together through
              thoughtful, data-driven marketing that truly resonates. We’re
              passionate about fueling our client&#39;s growth and success, and
              we do it by blending creativity with a deep commitment to
              delivering real results.{" "}
            </MotionP>
          </div>
          <div className={styles.vision}>
            <MotionH2
              variants={contain}
              initial="hidden"
              whileInView={"visible"}
              className={styles.vision__title}
            >
              Our <i>Vision</i>
            </MotionH2>
            <MotionP
              variants={contain}
              initial="hidden"
              whileInView={"visible"}
            >
              Our vision is to redefine marketing’s future by crafting
              innovative campaigns that spark growth, connect with people on a
              deeper level, and create lasting impressions in the market. We aim
              to foster a work environment that accepts the exceptional as
              usual.
            </MotionP>
          </div>
        </div>

        {/* Why work with us */}
        <MotionDiv className={styles.whyWork}>
          <MotionH2
            variants={contain}
            initial="hidden"
            whileInView={"visible"}
            className={styles.whyWork__title}
          >
            Why Work With <i>Us?</i>
          </MotionH2>
          <MotionP variants={contain} initial="hidden" whileInView={"visible"}>
            At Gen Alpha, we’re all about endless growth and nonstop learning.
            Dive into game-changing projects that push boundaries and flip the
            script on the usual. Our workplace? Think of it as a creative
            playground where every day is a new adventure. We keep it fun,
            fresh, and free of egos—because here, it’s all about collaboration,
            innovation, and a dash of boldness to keep things exciting..
          </MotionP>
        </MotionDiv>
      </div>

      {/* Team Section */}
      <div className={styles.team}>
        <h2 className={styles.team__title}>Meet the Team</h2>
        <div className={styles.scroller}>
          <ul className={`${styles.taglist} ${styles.scroller__inner}`}>
            <li>
              <Image
                alt="Person"
                src="/ppl/Person1.jpg"
                width={350}
                height={500}
              />
              <Image
                alt="Person"
                src="/ppl/Person2.jpg"
                width={350}
                height={500}
              />
              <Image
                alt="Person"
                src="/ppl/Person3.jpg"
                width={350}
                height={500}
              />
              <Image
                alt="Person"
                src="/ppl/Person4.jpg"
                width={350}
                height={500}
              />
              <Image
                alt="Person"
                src="/ppl/Person5.jpg"
                width={350}
                height={500}
              />
              <Image
                alt="Person"
                src="/ppl/Person6.jpg"
                width={350}
                height={500}
              />
              <Image
                alt="Person"
                src="/ppl/Person1.jpg"
                width={350}
                height={500}
                aria-hidden="true"
              />
              <Image
                alt="Person"
                src="/ppl/Person2.jpg"
                width={350}
                height={500}
                aria-hidden="true"
              />
              <Image
                alt="Person"
                src="/ppl/Person3.jpg"
                width={350}
                height={500}
                aria-hidden="true"
              />
              <Image
                alt="Person"
                src="/ppl/Person4.jpg"
                width={350}
                height={500}
                aria-hidden="true"
              />
              <Image
                alt="Person"
                src="/ppl/Person5.jpg"
                width={350}
                height={500}
                aria-hidden="true"
              />
              <Image
                alt="Person"
                src="/ppl/Person6.jpg"
                width={350}
                height={500}
                aria-hidden="true"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Page;
