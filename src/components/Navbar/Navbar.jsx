"use client";
import Link from "next/link";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { IoMdMenu, IoMdClose, IoMdArrowDropup } from "react-icons/io";
import Image from "next/image";

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState("none");
  const [scrolled, setScrolled] = useState(false);
  const [hover, setHover] = useState(false);
  const handleClick = () => {
    if (visible === "none") setVisible("flex");
    else setVisible("none");
  };

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem("hasSeenIntro");
    const duration = !hasSeenIntro ? 15000 : 3000;
    setTimeout(() => {
      setShow(true);
    }, duration);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    show && (
      <div
        className={styles.navbar}
        style={{
          width: visible === "none" ? "1.5rem" : "100%",
        }}
      >
        <div
          className={styles.container}
          style={{
            width: "6rem",
          }}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => setHover(false)}
        >
          <div
            className={styles.navContainer}
            onClick={handleClick}
            style={{
              backgroundColor: visible === "none" ? "var(--blue)" : "white",
            }}
          >
            {visible === "none" ? (
              <IoMdMenu
                style={{
                  display: "block",
                  color: scrolled ? "white" : "white",
                  transition: "color 0.3s ease",
                }}
              />
            ) : (
              <IoMdClose style={{ color: "black" }} />
            )}
          </div>
        </div>
        <div
          className={`${styles.linksContainer}`}
          style={{ display: visible }}
        >
          <div className={styles.logo}>
            <Image src={"/g.svg"} alt="logo" width={1000} height={1000} />
          </div>
          <div className={styles.links}>
            <div className={styles.link}>
              <div className={styles.bounceDot}></div>
              <Link href={"/"} onClick={() => setVisible("none")}>
                Home
              </Link>
            </div>
            <div className={styles.link}>
              <div className={styles.bounceDot}></div>
              <Link href={"/about"} onClick={() => setVisible("none")}>
                About Us
              </Link>
            </div>
            <div className={styles.link}>
              <div className={styles.bounceDot}></div>
              <p
                className={styles.service}
                onMouseEnter={() => setDropDown(!dropDown)}
              >
                Services{" "}
              </p>
              {
                <div className={styles.dropDown}>
                  <Link
                    href={"/services/brand-and-design"}
                    onClick={() => setVisible("none")}
                    style={{
                      fontSize: "1.5rem",
                    }}
                  >
                    Brands and Design
                  </Link>
                  <Link
                    href={"/services/technology-and-development"}
                    onClick={() => setVisible("none")}
                    style={{
                      fontSize: "1.5rem",
                    }}
                  >
                    Technology and Development
                  </Link>
                  <Link
                    href={"/services/media-and-marketing"}
                    onClick={() => setVisible("none")}
                    style={{
                      fontSize: "1.5rem",
                    }}
                  >
                    Media and Marketing
                  </Link>
                </div>
              }
            </div>
            <div className={styles.link}>
              <div className={styles.bounceDot}></div>
              <Link href={"/projects"} onClick={() => setVisible("none")}>
                Our Works
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Navbar;
