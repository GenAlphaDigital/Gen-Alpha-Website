import Loader from "@/components/Loader/Loader";
import styles from "./page.module.css";

export default function App() {
  return (
    <div className={styles.container}>
      <Loader />
    </div>
  );
}
