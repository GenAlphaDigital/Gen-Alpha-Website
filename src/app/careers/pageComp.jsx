"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Lottie from "lottie-react";
import join_us from "../../../public/join_us.json";
import Footer from "@/components/Footer/Footer";
import HorizontalScroll from "@/components/Horizontal Scroll/horizontalScroll";
import { jobListings } from "./data/data";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { getFile, uploadFile } from "@/lib/storage";
import Loading from "@/components/Loading/Loading";

const PageComp = () => {
  const formRef = useRef(null);
  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
    console.log("Click");
  };

  const [role, setRole] = useState("");
  const [url, setUrl] = useState(null);
  const [msg, setMsg] = useState(null);
  const [sending, setSending] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleUpload = (e) => {
    setUploading(true);

    uploadFile(e.target.files[0], "resumes")
      .then((res) => getFile(res))
      .then((res) => {
        setUrl(res);
        setUploading(false);
      })
      .catch((error) => {
        console.error("File upload failed:", error);
        setUploading(false);
      });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID_2,
        process.env.NEXT_PUBLIC_TEMPLATE3_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY2
      )
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          setUrl(null);
          setSending(false);
          setMsg("Your message has been sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSending(false);
        }
      );
  };

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

      <div className={styles.wrapper}>
        <main className={styles.main}>
          <div className={"flex flex-col gap-[3rem]"}>
            <h1 className={"text-7xl "} style={{ lineHeight: "1.1" }}>
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
          <h1 className={"text-6xl w-[30%]"} style={{ lineHeight: "1.1" }}>
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
              src={"/careers/pic1.webp"}
              alt=""
              width={1000}
              height={1000}
            />
          </div>
          <div className={styles.image}>
            <Image
              src={"/careers/pic2.webp"}
              alt=""
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </section>

      <HorizontalScroll data={jobListings} scrollToForm={scrollToForm} />

      <section className={styles.contact}>
        <h1
          className={
            "text-4xl w-[50%] flex flex-col items-center justify-center gap-4"
          }
          style={{ lineHeight: "1.1", textAlign: "center" }}
        >
          <Image
            src={"/wolf.png"}
            alt="wolf"
            width={1080}
            height={1080}
            className="w-[50%]"
          />
          “Your Opportunity to be a part of the pack”
        </h1>
        <form className={styles.form} ref={formRef} onSubmit={sendEmail}>
          <h2>
            The Alpha Evolution Starts Here. <span>👇</span>
          </h2>
          <input required type="text" placeholder="Name" name="from_name" />
          <input
            required
            type="number"
            placeholder="Phone Number"
            name="phone_number"
          />
          <input required type="email" placeholder="Email" name="user_email" />

          <select
            name="jobs"
            id="jobs"
            style={{
              padding: "1rem",
              borderRadius: "0.5rem",
              border: "1px solid #ccc",
            }}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="" disabled selected style={{ color: "#ccc" }}>
              Select a Role
            </option>
            {jobListings.map((job) => (
              <option value={job.id} key={job.id}>
                {job.title}
              </option>
            ))}
          </select>

          <input required type="hidden" name="role" value={role} />
          <input required type="hidden" name="resume_link" value={url} />

          <div className="flex flex-col gap-[0.5rem] text-[0.8rem]">
            <label htmlFor="file">Upload your resume</label>
            <input
              required
              type="file"
              id="file"
              onChange={(e) => handleUpload(e)}
            />
          </div>

          {sending ? (
            <Loading />
          ) : (
            <input
              required
              type="submit"
              value="Submit"
              disabled={uploading}
              style={{
                cursor: uploading ? "not-allowed" : "pointer",
                opacity: uploading ? 0.5 : 1,
              }}
              className="bg-[var(--orange)] text-white p-2 rounded-lg w-[30%]"
            />
          )}
          {msg && (
            <p
              style={{
                color: "green",
                fontSize: "0.8rem",
              }}
            >
              {msg}
            </p>
          )}
        </form>
      </section>
      <Footer />
    </>
  );
};

export default PageComp;
