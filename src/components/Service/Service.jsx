"use client";
import { useEffect } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { MotionDiv } from "../motionComponents/motionComponents";

const services = [
  {
    image: "/services/service1.png",
    title: "Product Branding and Designing",
    desc: `Blending creativity and strategy, we create compelling brand
            identities with memorable visuals that align with your vision, from
            logos to complete brand ecosystems.`,
  },
  {
    image: "/services/service2.png",
    title: "Product Packaging",
    desc: `Enhance product presentation with functional, sustainable packaging
            that stands out and tells your brand's story, leaving a lasting
            impression on customers.`,
  },
  {
    image: "/services/service3.png",
    title: "Technology and Development",
    desc: `We develop cutting-edge tech solutions that streamline operations
            and enhance user experiences, leveraging the latest trends for
            robust and scalable systems.`,
  },
  {
    image: "/services/service4.png",
    title: "Advertisment and Marketing",
    desc: `Our data-driven advertising and marketing services combine creative
            storytelling with strategic campaigns to maximize your brand's
            reach and impact across multiple platforms.`,
  },
];

const Service = () => {
  useEffect(() => {
    const wrapper = document.querySelector(`.${styles.wrapper}`);

    const handleMouseMove = (e) => {
      const windowWidth = window.innerWidth;
      const mouseX = e.clientX;

      const mouseXPercent = (mouseX / windowWidth) * 100;

      const translateX = (mouseXPercent + 0) * -0.5;

      console.log(
        `windowWidth: ${windowWidth}, mouseX: ${mouseX},
        mouseXPercent: ${mouseXPercent}, translateX: ${translateX}`
      );
      if (translateX > -34 && mouseXPercent > 20)
        wrapper.style.transform = `translate3d(${translateX}%, 0, 0)`;
      if (mouseXPercent < 20) wrapper.style.transform = `translate3d(0%, 0, 0)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {services.map((service, index) => (
          <div className={styles.service} key={index}>
            <div className={styles.content}>
              <Image
                src={service.image}
                alt="service"
                width={50}
                height={50}
                className={styles.image}
              />
              <h4>{service.title}</h4>
              <small className={styles.desc}>{service.desc} </small>
              <button className={styles.btn}>Learn More</button>
            </div>
          </div>
        ))}
      </div>

      <MotionDiv
        animate={{
          delayChildren: 0.4,
          staggerChildren: 0.1,
        }}
        className={styles.servicesRes}
      >
        {services.map((service, index) => (
          <MotionDiv
            key={index}
            initial={{
              opacity: 0,
              x: "-100%",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8 },
            }}
            className={styles.serviceRes}
          >
            <Image src={service.image} width={50} height={50} alt="service" />
            <h6>{service.title}</h6>
            <small>{service.desc}</small>
            <button className={styles.btnRes}>Learn More</button>
          </MotionDiv>
        ))}
      </MotionDiv>
    </div>
  );
};

export default Service;
