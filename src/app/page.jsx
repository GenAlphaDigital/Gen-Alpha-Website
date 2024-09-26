import styles from "./page.module.css";
import Loader from "@/components/Loader/Loader";

export default function App() {
  return (
    <div className={styles.container}>
      <Loader />
    </div>
  );
}
