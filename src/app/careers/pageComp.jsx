"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Lottie from "lottie-react";
import join_us from "../../../public/join_us.json";
import Footer from "@/components/Footer/Footer";
const PageComp = () => {
  return (
    <>
      <header className={styles.logo}>
        <Image
          src={"/Logo.svg"}
          width={120}
          height={120}
          className="p-2"
          alt=""
        />
      </header>

      <div className={styles.wrapper}>
        <main className={styles.main}>
          <div className={"flex flex-col gap-[3rem]"}>
            <h1
              className={"text-7xl "}
              style={{
                lineHeight: "1.1",
              }}
            >
              Become an <b>Alpha</b> with Us!
            </h1>
            <p className={"text-base w-[90%]"}>
              At <b>Gen Alpha Digital</b>, we’re all about leading, not
              following. If you’ve got a passion for <b>Technology</b>, a knack
              for <b>Digital Media</b>, and an eye for <b>Designing</b>{" "}
              unforgettable experiences, you’ll fit right in here. We’re more
              than just a company—we’re a pack of creatives, innovators, and
              go-getters, and we’re on the lookout for more people like us.
            </p>
          </div>
          <div>
            <Lottie animationData={join_us} />
          </div>
        </main>
      </div>

      <section className={styles.second}>
        <div className={styles.header}>
          <h1
            className={"text-6xl w-[30%]"}
            style={{
              lineHeight: "1.1",
            }}
          >
            Unleash Your Inner Alpha
          </h1>
          <p className="w-[30%]">
            Are you ready to push the limits of brand identity, dive into
            augmented reality, or create experiences in virtual reality? Whether
            you’re someone who loves putting together the perfect mood board or
            crafting killer social media campaigns, we’ve got a place for you.
            This is where you can design your own digital path, and we’ll be
            right there with you, every step of the way.
          </p>
        </div>
        <div className={styles.images}>
          <div className={styles.image}>
            <Image
              src={"/careers/pic1.jpg"}
              alt=""
              width={1000}
              height={1000}
            />
          </div>
          <div className={styles.image}>
            <Image
              src={"/careers/pic2.jpg"}
              alt=""
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <h1
          className={"text-4xl w-[50%]"}
          style={{
            lineHeight: "1.1",
          }}
        >
          “Your Opportunity to be a part of the pack”
        </h1>
        <form className={styles.form}>
          <h2>
            The Alpha Evolution Starts Here. <span>👇</span>
          </h2>
          <input type="text" placeholder="Name" />
          <input type="number" placeholder="Phone Number" />
          <input type="email" placeholder="Email" />

          <div className="flex flex-col gap-[0.5rem] text-[0.8rem]">
            <label htmlFor="file">Upload your resume</label>
            <input type="file" id="file" />
          </div>

          <input
            type="submit"
            value="Submit"
            className="bg-[var(--orange)] text-white p-2 rounded-lg w-[30%]"
          />
        </form>
      </section>
      <Footer />
    </>
  );
};

export default PageComp;
