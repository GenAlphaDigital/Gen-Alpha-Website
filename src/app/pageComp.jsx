import Loader from "@/components/Loader/Loader";
import styles from "./page.module.css";
import dynamic from "next/dynamic";

export default function App() {
  return (
    <div className={styles.container}>
      {/* {dynamic(() => import("@/components/Loader/Loader"))} */}
      <Loader />
    </div>
  );
}
