import styles from "./styles.module.css";
import { FaInstagram, FaFacebook, FaTwitter, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.line}></div>
      <div className={styles.bottom}>
        <div className={styles.icons}>
          <FaInstagram />
          <FaTwitter />
          <FaFacebook />
          <FaDiscord />
        </div>
        <p>@Gen Alpha Digitals</p>
      </div>
    </div>
  );
};

export default Footer;
