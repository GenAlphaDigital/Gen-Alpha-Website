"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import MainFrame from "../../../public/about/svg";
import Tablet from "../../../public/about/Tablet";
import Phone from "../../../public/about/Phone";
import styles from "./page.module.css";

const AboutPage = () => {
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    // Set the initial screen width and update it on resize
    const updateScreenWidth = () => setScreenWidth(window.innerWidth);
    updateScreenWidth(); // Set initial width
    window.addEventListener("resize", updateScreenWidth);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

  // Conditional rendering based on screen width
  if (screenWidth < 450) {
    return (
      <>
        <div className={styles.header}>
          <Image
            src={"/Logo.svg"}
            alt="logo"
            width={120}
            height={120}
            priority={true}
          />
        </div>
        <div className={`${styles.svgContainer}`}>
          <Phone />
        </div>
      </>
    );
  } else if (screenWidth <= 768) {
    return (
      <>
        <div className={styles.header}>
          <Image
            src={"/Logo.svg"}
            alt="logo"
            width={120}
            height={120}
            priority={true}
          />
        </div>
        <div className={`${styles.svgContainer}`}>
          <Tablet />
        </div>
      </>
    );
  }

  return (
    <>
      <div className={styles.header}>
        <Image
          src={"/Logo.svg"}
          alt="logo"
          width={120}
          height={120}
          priority={true}
        />
      </div>
      <div className={`${styles.svgContainer}`}>
        <MainFrame />
      </div>
    </>
  );
};

export default AboutPage;
