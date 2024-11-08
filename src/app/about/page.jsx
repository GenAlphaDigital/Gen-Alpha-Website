import Image from "next/image";
import MainFrame from "../../../public/about/svg";
import styles from "./page.module.css";
// import Page from "./pageComp";

const AboutPage = () => {
  return (
    <>
      <div className={styles.header}>
        <Image
          src={"/Logo.svg"}
          alt="logo"
          width={120}
          height={120}
          priority={true}
        />
      </div>
      <div className={styles.svgContainer}>
        <MainFrame />
      </div>
    </>
  );
};
export default AboutPage;
