import Image from "next/image";
import styles from "./page.module.css";
import DropDown from "../component/DropDown";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={"/Logo.svg"} alt="" width={120} height={120} />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.dropDown}>
          <DropDown />
        </div>
        <div className={styles.content}>
          <h1>Brand And Design Services</h1>
          <p>
            Your brand shouldn’t just be out there—it should own the spotlight,
            turning heads and leaving a mark wherever it goes. Here’s how we
            bring the spark that makes your brand unforgettable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
