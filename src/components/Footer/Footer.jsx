"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MotionDiv } from "../motionComponents/motionComponents";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE2_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <MotionDiv
        initial={{
          y: 100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        className={styles.container}
      >
        <div className={styles.section1}>
          <div className={styles.logo}>
            {/* Logo */}
            <Image src="/g.svg" alt="logo" width={1000} height={1000} />
          </div>

          <div className={styles.address}>
            {/* Address and Contact */}
            <div>
              <p>
                <b>Address:</b>
              </p>
              <p>#4 Floor Sprint Business Center,</p>
              <p>Jaya Bheri Silicon Towers,</p>
              <p>Kothaguda,</p>
              <p>Hyderabad - 500094</p>
            </div>
            <div>
              <p>
                <b>Phone Number: </b>
              </p>
              <p>+91 91777 05479</p>
            </div>
            <div>
              <p>
                <b>Visit Office</b>
              </p>
              <a href="#" target="_blank">
                {"Map Link"}
              </a>
            </div>
          </div>
          <div className={styles.services}>
            {/* Services and Inquires */}
            <div>
              <p>
                <b>Services: </b>
              </p>
              <p>Brand &amp; Design Services</p>
              <p>Technology Services</p>
              <p>Advertisement and Marketing</p>
            </div>
            <div>
              <p>
                <b>Business Inquires: </b>
              </p>
              <p>Saransh Vyas</p>
              <p>Abhijeet Soni</p>
            </div>
            <div>
              <p>
                <b>Careers Page</b>
              </p>
              <Link href={"/careers"}>Link</Link>
            </div>
          </div>
          <div className={styles.social}>
            {/* Social Media */}
            <div className={styles.media}>
              <p>
                <b>Get In Touch:</b>
              </p>
              <div className={styles.icons}>
                <p>
                  <FaInstagram />
                </p>{" "}
                <p>
                  <FaSquareXTwitter />
                </p>
                <p>
                  <FaFacebook />
                </p>
              </div>
            </div>
            <div>
              <p>
                <b>Subscribe For Updates: </b>
              </p>
              <form className={styles.input} ref={form} onSubmit={sendEmail}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="user_email"
                  required
                />
                <input type="submit" value={`🠦`} />
              </form>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          {/* Copy Rights */}
          <small
            style={{
              fontWeight: 300,
            }}
          >
            &copy; {new Date().getFullYear()} Gen Alpha, All Rights Reserved
          </small>
        </div>
      </MotionDiv>
    </>
  );
};

export default Footer;
