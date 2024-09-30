"use client";
import Image from "next/image";
import styles from "./styles.module.css";

const Brands = ({ bg }) => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: bg ? bg.backgroundColor : "#fff",
        borderTopLeftRadius: bg ? "50px" : "",
        borderTopRightRadius: bg ? "50px" : "",
      }}
    >
      <div className={styles.header}>
        <p>Brands In Collaboration With Us</p>
        <div className={styles.line}></div>
      </div>

      <div className={styles.brands}>
        <div className={styles.brand}>
          <Image
            src="/brands/brand1.jpg"
            alt="brand1"
            width={500}
            height={500}
          />
        </div>
        <div className={styles.brand}>
          <Image
            src="/brands/brand2.jpg"
            alt="brand2"
            width={500}
            height={500}
          />
        </div>
        <div className={styles.brand}>
          <Image
            src="/brands/brand3.jpg"
            alt="brand3"
            width={500}
            height={500}
          />
        </div>
        <div className={styles.brand}>
          <Image
            src="/brands/brand4.jpg"
            alt="brand4"
            width={500}
            height={500}
          />
        </div>
        <div className={styles.brand}>
          <Image
            src="/brands/brand5.jpg"
            alt="brand5"
            width={500}
            height={500}
          />
        </div>
        <div className={styles.brand}>
          <Image
            src="/brands/brand6.jpg"
            alt="brand6"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Brands;
