"use client";
import Marketing from "@/components/3d Components/marketing";
import Packaging from "@/components/3d Components/packaging";
import Branding from "@/components/3d Components/branding";
import WebDev from "@/components/3d Components/webdev";
import Contact from "@/components/Contact/Contact";
import styles from "./page.module.css";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.lineContainer}>
        <svg
          width="699"
          height="4195"
          fill="none"
          preserveAspectRatio="xMidYMax meet"
        >
          <path
            d="M615.5 0.5V432.5C615.5 465.637 588.637 492.5 555.5 492.5H62.5C29.3629 492.5 2.5 519.363 2.5 552.5V970.5C2.5 1003.64 29.3629 1030.5 62.5 1030.5H555.5C588.637 1030.5 615.5 1057.36 615.5 1090.5V1313.5L539 1390L615.5 1466.5L692 1390H615.5V1996.5L539 2073L615.5 2149.5L692 2073H615.5V2772L539 2848.5L615.5 2925L692 2848.5H615.5V3598L539 3674.5L615.5 3751L692 3674.5H615.5V4061.5M615.5 4061.5L577.25 4099.75C556.125 4120.87 556.125 4155.13 577.25 4176.25V4176.25C598.375 4197.37 632.625 4197.37 653.75 4176.25V4176.25C674.875 4155.13 674.875 4120.87 653.75 4099.75L615.5 4061.5Z"
            stroke="red"
            strokeWidth="5"
          />
        </svg>
      </div>
    </div>
  );
};

export default page;
