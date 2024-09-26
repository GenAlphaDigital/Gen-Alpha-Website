"use client";
import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import gsap from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

// Register the CSSPlugin
gsap.registerPlugin(CSSPlugin);

const Cursor = () => {
  const cursor = useRef(null);
  const followerCursor = useRef(null);

  const moveCursor = (e) => {
    gsap.to(cursor.current, {
      duration: 0.5,
      x: e.clientX,
      y: e.clientY,
    });
    gsap.to(followerCursor.current, {
      duration: 0.7,
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    gsap.set(cursor.current, {
      xPercent: -50,
      yPercent: -50,
    });
    gsap.set(followerCursor.current, {
      xPercent: -50,
      yPercent: -50,
    });
    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className={styles.main}>
      <div
        ref={cursor}
        className={styles.cursor}
        // style={{
        //   backgroundImage: `url("/cursor.png")`,
        // }}
      ></div>
      <div ref={followerCursor} className={styles.followingCursor}></div>
    </div>
  );
};

export default Cursor;
