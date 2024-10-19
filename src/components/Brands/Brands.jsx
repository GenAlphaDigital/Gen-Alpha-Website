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
        <p>Collaborations</p>
        <div className={styles.line}></div>
      </div>

      <div className={styles.brands}>
        <div className={styles.brand}>
          <Image
            src="/brands/google.png"
            alt="brand1"
            width={1000}
            height={1000}
          />
        </div>
        <div className={styles.brand}>
          <Image
            src="/brands/meta.png"
            alt="brand2"
            width={1000}
            height={1000}
          />
        </div>
        <div className={styles.brand}>
          <Image
            src="/brands/aws.jpg"
            alt="brand3"
            width={1000}
            height={1000}
          />
        </div>
        
      </div>
    </div>
  );
};

export default Brands;
