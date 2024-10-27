"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import G from "@/components/3d Components/g";
import { FaArrowDown } from "react-icons/fa";
import {
  MotionDiv,
  MotionP,
  MotionSection,
  MotionSmall,
  MotionUl,
} from "@/components/motionComponents/motionComponents";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import Particles from "../test/Particles";

// Motion variants
const container = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    y: 100,
    transition: {
      duration: 1,
    },
  },
};

const Page = () => {
  const [currentImage, setCurrentImage] = useState("/industries/ecommerce.png");

  // Refs for each industry section
  const sectionsRefs = {
    fashion: useRef(null),
    fitness: useRef(null),
    realEstate: useRef(null),
    hospitality: useRef(null),
  };

  useEffect(() => {
    const observerOptions = { threshold: 0.5 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Update current image based on the intersected section
          switch (entry.target) {
            case sectionsRefs.fashion.current:
              setCurrentImage("/industries/ecommerce.png");
              break;
            case sectionsRefs.fitness.current:
              setCurrentImage("/industries/fitness.png");
              break;
            case sectionsRefs.realEstate.current:
              setCurrentImage("/industries/real-estate.png");
              break;
            case sectionsRefs.hospitality.current:
              setCurrentImage("/industries/hospitality.png");
              break;
            default:
              break;
          }
        }
      });
    }, observerOptions);

    // Observing each section
    Object.values(sectionsRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionsRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <>
      <header className={styles.logo}>
        <Link href={"/"}>
          <Image
            src={"/Logo.svg"}
            width={120}
            height={120}
            className="p-2"
            alt=""
          />
        </Link>
      </header>

      <section className={styles.hero}>
        <div className={styles.modelContainer}>
          <G />
        </div>
        <div className={styles.textContainer}>
          <h1 className="text-7xl">Industries We Rule</h1>
          <p>
            At Gen Alpha Marketing Solutions, we don’t just step into
            industries—we dive in headfirst with passion and purpose. We’re all
            about helping brands push boundaries, make a lasting impact, and
            maybe even spark a movement.
          </p>
        </div>
      </section>

      <section className={styles.second}>
        <p className="text-6xl">Let’s show you where we truly shine</p>
        <MotionDiv
          initial={{ y: "100%", opacity: 0 }}
          animate={{
            y: "0",
            opacity: 1,
            transition: { duration: 1 },
          }}
          className={styles.bouncingBall}
        >
          <div className={styles.bouncingBallInner}>
            <FaArrowDown />
          </div>
        </MotionDiv>
      </section>

      <div className="flex">
        <div className="w-[100%]">
          {/* Fashion Section */}
          <MotionSection
            ref={sectionsRefs.fashion}
            className={styles.industry}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit={"exit"}
          >
            <div className={styles.subIndustry}>
              <MotionDiv variants={item}>
                <MotionP>
                  <b>Fashion, Brands & E-commerce</b>
                </MotionP>
                <MotionSmall>
                  (Design, Marketing & Tech for D2C Brands)
                </MotionSmall>
              </MotionDiv>
              <MotionP variants={item}>
                Fashion is more than just threads—it’s a vibe, a story, and
                we’re here to tell it. We work with D2C brands, luxury labels,
                and everything in between, helping you stand out in the
                fast-paced world of fashion. From sleek UI/UX design to
                eye-catching brand identity and data-driven marketing
                strategies, we make sure your brand’s runway moment is 24/7.
              </MotionP>
              <MotionP variants={item}>
                <b>What we bring to the table:</b>
              </MotionP>
              <MotionUl
                variants={item}
                style={{
                  margin: "0 2rem",
                }}
              >
                <li
                  style={{
                    listStyle: "disc",
                  }}
                >
                  Stunning e-commerce design that have a brand identity{" "}
                </li>
                <li
                  style={{
                    listStyle: "disc",
                  }}
                >
                  Killer social media marketing to get you trending and up your
                  sales
                </li>
                <li
                  style={{
                    listStyle: "disc",
                  }}
                >
                  SEO and content strategies to keep your brand at the top of
                  search results
                </li>
              </MotionUl>
            </div>
          </MotionSection>

          {/* Fitness Section */}
          <MotionSection
            ref={sectionsRefs.fitness}
            className={styles.industry}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit={"exit"}
          >
            <div className={styles.subIndustry}>
              <MotionDiv variants={item}>
                <MotionP>
                  <b>Sports & Fitness</b>
                </MotionP>
                <MotionSmall>
                  (Brand Collaborations, Marketing & Technology)
                </MotionSmall>
              </MotionDiv>
              <MotionP variants={item}>
                Whether you’re launching the next big fitness app or organizing
                a championship game, we’re your go-to for getting fans hyped and
                connected. From brand partnerships to innovative digital
                marketing campaigns, we’ll have your followers breaking a sweat
                (in a good way). We specialize in sports tech solutions that
                streamline your operations and make your brand a champion in its
                field.
              </MotionP>
              <MotionP variants={item}>
                <b>Our game plan includes:</b>
              </MotionP>
              <MotionUl
                variants={item}
                style={{
                  margin: "0 2rem",
                }}
              >
                <li
                  style={{
                    listStyle: "disc",
                  }}
                >
                  Smart brand collaborations that get the right eyes on you
                </li>
                <li
                  style={{
                    listStyle: "disc",
                  }}
                >
                  Impactful social media engagement to keep your audience active
                </li>
                <li
                  style={{
                    listStyle: "disc",
                  }}
                >
                  Tech solutions for fitness platforms and event management
                </li>
                <li
                  style={{
                    listStyle: "disc",
                  }}
                >
                  Targeted ads that make sure your message hits the bullseye
                  every time
                </li>
              </MotionUl>
            </div>
          </MotionSection>

          {/* Real Estate Section */}
          <MotionSection
            ref={sectionsRefs.realEstate}
            className={styles.industry}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit={"exit"}
          >
            <div className={styles.subIndustry}>
              <MotionDiv variants={item}>
                <MotionP>
                  <b>Real Estate</b>
                </MotionP>
                <MotionSmall>(Advanced Tech & Lead Generation)</MotionSmall>
              </MotionDiv>
              <MotionP variants={item}>
                In real estate, leads are everything. We harness advanced
                technology and proven lead generation strategies to help you
                turn browsers into buyers. Whether you’re selling dream homes or
                commercial spaces, we’ll help you close deals faster than
                ever.The real estate game has changed—so why hasn’t your
                marketing?.
              </MotionP>
              <MotionP variants={item}>
                <b>Here’s what we do best:</b>
              </MotionP>
              <MotionUl
                variants={item}
                style={{
                  margin: "0 2rem",
                }}
              >
                <li
                  style={{
                    listStyle: "disc",
                  }}
                >
                  Lead generation that fills your inbox with quality prospects
                </li>
                <li
                  style={{
                    listStyle: "disc",
                  }}
                >
                  AI-driven insights that help you make smarter moves
                </li>
                <li
                  style={{
                    listStyle: "disc",
                  }}
                >
                  Interactive virtual reality tours for immersive property
                  viewing
                </li>
                <li
                  style={{
                    listStyle: "disc",
                  }}
                >
                  Comprehensive digital marketing strategies that seal the deal
                </li>
              </MotionUl>
            </div>
          </MotionSection>

          {/* Hospitality Section */}
          <MotionSection
            ref={sectionsRefs.hospitality}
            className={styles.industry}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit={"exit"}
          >
            <div className={styles.subIndustry}>
              <MotionDiv variants={item}>
                <MotionP>
                  <b>Hospitality</b>
                </MotionP>
              </MotionDiv>
              <MotionP variants={item}>
                Whether you’re running a swanky hotel or the coolest café in
                town, hospitality is all about creating a vibe. We’re here to
                make sure your brand looks as good as your best guest suite.
                From eye-popping design to social media strategies that fill
                your bookings faster than a long weekend, we’ve got the recipe
                for your success—and yes, it’s delicious.
              </MotionP>
              <MotionP variants={item}>
                <b>Here’s how we create magic:</b>
              </MotionP>
              <MotionUl
                variants={item}
                style={{
                  margin: "0 2rem",
                }}
              >
                <li
                  style={{
                    listStyle: "disc",
                  }}
                >
                  Memorable branding and design that sets you apart
                </li>
                <li
                  style={{
                    listStyle: "disc",
                  }}
                >
                  Smart social media strategies to drive bookings
                </li>
                <li
                  style={{
                    listStyle: "disc",
                  }}
                >
                  SEO-optimized content that puts your business in the spotlight
                </li>
                <li
                  style={{
                    listStyle: "disc",
                  }}
                >
                  Personalized email marketing that keeps guests coming back
                </li>
              </MotionUl>
            </div>
          </MotionSection>
        </div>

        {/* Particles Component */}
        <div className={styles.gifsContainer}>
          <Particles imageUrl={currentImage} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page;
