import G from "@/components/3d Components/g";
import Image from "next/image";
import styles from "./page.module.css";
import { FaArrowDown } from "react-icons/fa";
import { MotionDiv } from "@/components/motionComponents/motionComponents";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import Industries from "./components/industries";

const Page = () => {
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
          <h1 className={styles.heading}>Industries We Rule</h1>
          <p>
            At Gen Alpha Marketing Solutions, we don&apos;t just step into
            industries—we dive in headfirst with passion and purpose. We&apos;re
            all about helping brands push boundaries, make a lasting impact, and
            maybe even spark a movement.
          </p>
        </div>
        {/* <LazyText /> */}
      </section>

      <section className={styles.second}>
        <p className={styles.subHeading}>
          Let&apos;s show you where we truly shine
        </p>
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

      <div
        className="flex"
        style={{
          position: "relative",
        }}
      >
        <div className="w-[100%]">
          <Industries />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page;
