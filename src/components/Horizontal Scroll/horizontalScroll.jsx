"use client";
import { Model } from "@/app/careers/components/Model";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

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
        setXRange(["1%", "-83%"]);
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
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6">
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
        className="group relative w-[20rem] h-[75vh] rounded-xl overflow-hidden  flex flex-col "
      >
        <div
          className="h-[100%] flex items-center justify-center"
          style={{
            width: "100%",
          }}
        >
          <Image
            src={`/jobs/job${card.id}.png`}
            alt="job"
            width={1200}
            height={1200}
            className="px-9"
          />
        </div>
        <div className="flex flex-col h-[100%] justify-between px-4 py-2">
          <div className="p-4 flex flex-col gap-[1rem]">
            <p className="text-xl font-bold text-[var(--navyblue)]">
              Job Title:
            </p>
            <p className="text-base">{card.title}</p>
          </div>
          <div className="p-4 flex flex-col gap-[1rem]">
            <p className="text-xl font-bold text-[var(--navyblue)]">
              Experience:
            </p>
            <p className="text-base">{card.experience}</p>
          </div>
          <Model job={card}></Model>
        </div>
      </div>
    </Model>
  );
};

export default HorizontalScroll;
