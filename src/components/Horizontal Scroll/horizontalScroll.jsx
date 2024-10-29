"use client";
import { Model } from "@/app/careers/components/Model";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { MotionDiv } from "../motionComponents/motionComponents";
import styles from "./horizontalScroll.module.css";

const HorizontalScroll = ({ data, scrollToForm }) => {
  return (
    <div>
      <HorizontalScrollCarousel data={data} scrollToForm={scrollToForm} />
    </div>
  );
};

const HorizontalScrollCarousel = ({ data, scrollToForm }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [xRange, setXRange] = useState(["1%", "-27%"]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000 || window.innerWidth > 1023) {
        setXRange(["1%", "-85%"]);
      } else {
        setXRange(["1%", "-27%"]);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], xRange);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <h1 className="px-6 text-4xl">Job Openings</h1>
      <MotionDiv
        initial={{
          width: 0,
        }}
        whileInView={{
          width: "90%",
          transition: {
            duration: 1.6,
          },
        }}
        className={` px-6 ${styles.line} `}
      ></MotionDiv>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden main">
        <motion.div style={{ x }} className="flex gap-6 scroll">
          {data.map((card, index) => {
            return (
              <Card
                card={card}
                key={index}
                id={index + 1}
                scrollToForm={scrollToForm}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card, scrollToForm }) => {
  return (
    <Model job={card} scrollToForm={scrollToForm}>
      <div
        key={card.id}
        style={{
          fontFamily: "Poppins",
          border: "1px solid var(--navyblue)",
        }}
        className="group relative w-[20rem] h-[35rem] rounded-xl overflow-hidden  flex flex-col  "
      >
        <div
          className="h-[100%] flex items-center justify-center imgContainer"
          style={{
            width: "100%",
          }}
        >
          <Image
            src={`/jobs/job${card.id}.png`}
            alt="job"
            width={1200}
            height={1200}
            className="px-9 image"
          />
        </div>
        <div className="flex flex-col h-[100%] justify-between px-4 py-2 col">
          <div className="col p-4 flex flex-col gap-[1rem]">
            <p className="heading text-base font-bold text-[var(--navyblue)]">
              Job Title:
            </p>
            <p className="content text-sm">{card.title}</p>
            <p className="heading text-base font-bold text-[var(--navyblue)]">
              Experience:
            </p>
            <p className="content text-sm">{card.experience}</p>
          </div>
        </div>
        <button className="bg-[var(--orange)] text-white w-[95%] my-2 mx-2 button">
          More Info
        </button>
      </div>
    </Model>
  );
};

export default HorizontalScroll;
