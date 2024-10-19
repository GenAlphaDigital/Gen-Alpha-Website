"use client";

import contact_gif from "../../../public/contact_gif.json";
import Image from "next/image";
import styles from "./styles.module.css";
import { MotionDiv } from "../motionComponents/motionComponents";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Multiselect from "multiselect-react-dropdown";
import Lottie from "lottie-react";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const popup = {
  hidden: {
    opacity: 0,
    scale: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
  },
};

const Contact = ( {contactRef} ) => {
  const [options, setOptions] = useState([
    "Content & Copywriting",
    "Graphic Design, Iconography & Illustrations",
    "Video Editing & Animation",
    "Film Production, AVs & Product Photography",
    "Brand Identity, Brand Guide & Brand Story",
    "Custom Web Development",
    "Web Personalization",
    "UI/UX Design",
    "CRM & ERP Solutions",
    "E-Commerce Solutions",
    "AR/VR",
    "Media Buying",
    "Media Planning",
    "Performance Marketing",
    "Affiliate Marketing",
    "SEO",
    "Social Media Marketing",
  ]);
  const [services, setService] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  const handleSelect = (e) => {
    setService(e);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    form.current.services_list.value = services.join(", ");
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          setService([]);
          setSubmitted(true); 
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <MotionDiv
      variants={stagger}
      initial="hidden"
      whileInView="animate"
      className={styles.container}
      ref={contactRef}
    >
      <MotionDiv
        variants={popup}
        initial="hidden"
        whileInView="visible"
        className={styles.imgContainer}
      >
        {/* <Image src={contact_gif} alt="" width={500} height={500} /> */}
        <Lottie className={styles.gifstyling}
        animationData={contact_gif}
        />
      </MotionDiv>
      <MotionDiv
        variants={popup}
        initial="hidden"
        whileInView="visible"
        className={styles.textContainer}
      >
        <p>Are You Ready To Make More Impact?</p>
        <p>Let&apos;s Get In Touch!!</p>
      </MotionDiv>
      <MotionDiv
        className={styles.form}
        variants={popup}
        initial="hidden"
        whileInView="visible"
      >
        {/* Contact Form */}
        <h2 className={styles.heading}>Contact Us</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="from_name" required />
          <input type="email" placeholder="Email" name="user_email" required />
          <input type="number" placeholder="Phone Number" name="phone_number" />
          <input type="text" placeholder="Your Brand" name="brand" />

          <Multiselect
            options={options}
            onSelect={handleSelect}
            onRemove={handleSelect}
            showCheckbox={true}
            placeholder="Select Services"
            isObject={false}
            style={{
              searchBox: { borderRadius: "1rem" },
              multiselectContainer: {
                width: "100%",
              },
            }}
          />

          {/* Hidden input to send selected services */}
          <input type="hidden" name="services_list" />

          <textarea placeholder="Message" rows={6} name="message"></textarea>
          <input type="submit" value="Send" />
        </form>
        {submitted && (
          <small style={{ color: "green", textAlign: "center" }}>
            Your message has been sent successfully!
          </small>
        )}
      </MotionDiv>
    </MotionDiv>
  );
};

export default Contact;
