"use client";
import { Model } from "@/app/careers/components/Model";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const HorizontalScroll = ({ data }) => {
  return (
    <div>
      <HorizontalScrollCarousel data={data} />
    </div>
  );
};

const HorizontalScrollCarousel = ({ data }) => {
  const targetRef = useRef(null);
  li;
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {data.map((card, index) => {
            return <Card card={card} key={index} id={index + 1} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <Model job={card}>
      <div
        key={card.id}
        style={{
          fontFamily: "Poppins",
          border: "1px solid var(--navyblue)",
        }}
        className="group relative w-[20rem] h-[70vh] rounded-xl overflow-hidden  flex flex-col "
      >
        <div
          className="h-[100%]"
          style={{
            backgroundImage: `url(/jobs/job${card.id}.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="flex flex-col h-[100%] justify-between px-4">
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
