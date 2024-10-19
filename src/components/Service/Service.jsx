"use client";
import { useEffect } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { MotionDiv } from "../motionComponents/motionComponents";
import Link from "next/link";

const services = [
  {
    image: "/services/service1.gif",
    title: "Product Branding and Designing",
    desc: `Blending creativity and strategy, we create compelling brand
            identities with memorable visuals that align with your vision, from
            logos to complete brand ecosystems.`,
    link: "/services/brand-and-design",
  },
  {
    image: "/services/service3.gif",
    title: "Technology and Development",
    desc: `We develop cutting-edge tech solutions that streamline operations
            and enhance user experiences, leveraging the latest trends for
            robust and scalable systems.`,
    link: "/services/technology-and-development",
  },
  {
    image: "/services/service4.gif",
    title: "Advertisment and Marketing",
    desc: `Our data-driven advertising and marketing services combine creative
            storytelling with strategic campaigns to maximize your brand's
            reach and impact across multiple platforms.`,
    link: "/services/media-and-marketing",
  },
];

const Service = () => {
  useEffect(() => {
    const wrapper = document.querySelector(`.${styles.wrapper}`);
    wrapper.style.transform = `translateX(0, 0, 0)`;

    const handleMouseMove = (e) => {
      const windowWidth = window.innerWidth;
      const mouseX = e.clientX;
      const mouseXPercent = (mouseX / windowWidth) * 100;
      const translateX = (mouseXPercent + 0) * -0.5;

      if (translateX > -34 && mouseXPercent > 20) {
        wrapper.style.transform = `translate3d(${translateX}%, 0, 0)`;
      } else if (mouseXPercent < 20) {
        wrapper.style.transform = `translate3d(0%, 0, 0)`;
      }
    };

    const handleMouseLeave = () => {
      // Reset the translate to 0 (showing the first card)
      wrapper.style.transform = `translate3d(0%, 0, 0)`;
    };

    wrapper.addEventListener("mousemove", handleMouseMove);
    wrapper.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      wrapper.removeEventListener("mousemove", handleMouseMove);
      wrapper.removeEventListener("mouseleave", handleMouseLeave);
      wrapper.style.transform = `translateX(0, 0, 0)`;
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
                width={100}
                height={100}
                className={styles.image}
                loading="lazy"
              />
              <h4>{service.title}</h4>
              <small className={styles.desc}>{service.desc} </small>
              <Link href={service.link} className={styles.btn}>
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.small}>
        <div className={styles.header}>
          <h2>Our Services</h2>
          <div className={styles.line}></div>
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
              className={styles.serviceSm}
            >
              <Image
                src={service.image}
                width={100}
                height={100}
                alt="service"
              />

              <h6>{service.title}</h6>
              <small>{service.desc}</small>
              <Link href={service.link} className={styles.btnSm}>
                Learn More
              </Link>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </div>
  );
};

export default Service;
