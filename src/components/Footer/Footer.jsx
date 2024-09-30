import Image from "next/image";
import styles from "./styles.module.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <div className={styles.logo}>
          {/* Logo */}
          <Image src="/g.svg" alt="logo" width={1000} height={1000} />
        </div>

        <div className={styles.address}>
          {/* Address and Contact */}
          <div>
            <p>
              <b>Address:</b>
            </p>
            <p>Madhapur,</p>
            <p>Hyderabad,</p>
            <p>500081,</p>
            <p>Telangana,</p>
            <p>India</p>
          </div>
          <div>
            <p>
              <b>Phone Number: </b>
            </p>
            <p>+91 91777 05479</p>
          </div>
          <div>
            <p>
              <b>Visit Office</b>
            </p>
            <a href="#" target="_blank">
              {"Map Link"}
            </a>
          </div>
        </div>
        <div className={styles.services}>
          {/* Services and Inquires */}
          <div>
            <p>
              <b>Services: </b>
            </p>
            <p>Product Branding and Designing</p>
            <p>Product Packaging</p>
            <p>Technology and Development</p>
            <p>Advertisement and Marketing</p>
          </div>
          <div>
            <p>
              <b>Business Inquires: </b>
            </p>
            <p>John Doe</p>
          </div>
          <div>
            <p>
              <b>Recruitment Inquires: </b>
            </p>
            <p>Jane Doe</p>
          </div>
        </div>
        <div className={styles.social}>
          {/* Social Media */}
          <div className={styles.media}>
            <p>
              <b>Get In Touch:</b>
            </p>
            <div className={styles.icons}>
              <p>
                <FaInstagram />
              </p>{" "}
              <p>
                <FaSquareXTwitter />
              </p>
              <p>
                <FaFacebook />
              </p>
            </div>
          </div>
          <div>
            <p>
              <b>Subscribe For Updates: </b>
            </p>
            <div className={styles.input}>
              <input type="email" placeholder="Enter your email" />
              <button>
                <p>&rarr;</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        {/* Copy Rights */}
        <small
          style={{
            fontWeight: 300,
          }}
        >
          &copy; {new Date().getFullYear()} Gen Alpha, All Rights Reserved
        </small>
      </div>
    </div>
  );
};

export default Footer;
