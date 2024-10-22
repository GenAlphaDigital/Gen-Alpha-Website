"use client";
import { useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const Page = () => {
  const sections = {
    terms: useRef(null),
    informationCollected: useRef(null),
    informationUse: useRef(null),
    cookies: useRef(null),
    disclosingInformation: useRef(null),
    targetedAdvertising: useRef(null),
    changesToPolicy: useRef(null),
    contactingUs: useRef(null),
    thirdPartyProcessors: useRef(null),
  };

  return (
    <>
      <div className={styles.logo}>
        <Image
          src={"/Logo.svg"}
          alt="logo"
          width={120}
          height={120}
          unoptimized
        />
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className="text-7xl font-medium  py-5">Privacy Policy</h1>
          <small>
            This Privacy Policy will help you better understand how we collect,
            use and share your personal data
          </small>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div ref={sections.terms} className={styles.contentBox}>
              <h1 className="text-3xl font-semibold">Terms & Privacy Policy</h1>
              <p className="text-base font-light">
                At Gen Alpha Marketing Solutions, we prioritize your privacy.
              </p>
              <p className="text-base font-light">
                We collect only the necessary information to provide you with
                the best possible service. This policy outlines the types of
                data we may gather and how it is used. By using our website, you
                consent to the collection of this information.
              </p>
            </div>
            <div
              ref={sections.informationCollected}
              className={styles.contentBox}
            >
              <h1 className="text-3xl font-semibold">Information Collected</h1>
              <p className="text-base font-light">
                We may collect details such as your name, address, phone number,
                email, and any data you provide when interacting with our
                website. Additional information needed to process your requests
                may also be gathered as specified on the site.
              </p>
            </div>
            <div ref={sections.informationUse} className={styles.contentBox}>
              <h1 className="text-3xl font-semibold">Information Use</h1>
              <p className="text-base font-light">
                The information we collect is primarily used to fulfill the
                purpose for which you visited our website. We handle data in
                line with applicable data protection regulations. To prevent
                unauthorized access, we implement appropriate security measures.
                You may need to provide additional identification to access
                certain account details.
              </p>
            </div>
            <div ref={sections.cookies} className={styles.contentBox}>
              <h1 className="text-3xl font-semibold">Cookies</h1>
              <p className="text-base font-light">
                Our website uses cookies to improve your experience by
                remembering your preferences. You can disable cookies through
                your browser, but doing so may affect certain site
                functionalities.
              </p>
            </div>
            <div
              ref={sections.disclosingInformation}
              className={styles.contentBox}
            >
              <h1 className="text-3xl font-semibold">Disclosing Information</h1>
              <p className="text-base font-light">
                We do not share your personal information with third parties
                unless you grant us permission by selecting the relevant options
                during registration or other forms. We may use your information
                to stay in touch with you regarding updates from Gen Alpha
                Marketing Solutions. You will always have the option to
                unsubscribe from such communications.
              </p>
              <p className="text-base font-light">
                We may share aggregated, non-identifiable information with third
                parties for analytical purposes, such as the number of visitors
                to our website. This information will not include any data that
                identifies you.
              </p>
            </div>
            <div
              ref={sections.targetedAdvertising}
              className={styles.contentBox}
            >
              <h1 className="text-3xl font-semibold">Targeted Advertising</h1>
              <p className="text-base font-light">
                Gen Alpha Marketing Solutions may collaborate with third-party
                partners to deliver personalized ads based on your browsing
                behaviour. Through the use of cookies, anonymous information
                about your activity on our site and others may be used to
                provide relevant advertisements.
              </p>
            </div>
            <div ref={sections.changesToPolicy} className={styles.contentBox}>
              <h1 className="text-3xl font-semibold">Changes to this Policy</h1>
              <p className="text-base font-light">
                Any updates to our Privacy Policy will be posted here and will
                replace previous versions. We recommend reviewing this policy
                each time you use our website to ensure it aligns with your
                preferences.
              </p>
            </div>
            <div ref={sections.contactingUs} className={styles.contentBox}>
              <h1 className="text-3xl font-semibold">Contacting Us</h1>
              <p className="text-base font-light">
                If you have questions about our Privacy Policy or want to review
                the information we have collected about you, please reach out to
                us at info@genalphadigital.in. You can also request corrections
                or removal of your details from our records.
              </p>
            </div>
            <div
              ref={sections.thirdPartyProcessors}
              className={styles.contentBox}
            >
              <h1 className="text-3xl font-semibold">Third-Party Processors</h1>
              <p className="text-base font-light">
                Our trusted partners and service providers may process your
                personal information on our behalf as outlined below:
              </p>
              <div className={styles.subContentbox}>
                <h3 className="text-xl font-medium ">
                  Digital Marketing Service Providers
                </h3>
                <p className="text-base font-light">
                  We may engage digital marketing agents to run campaigns on our
                  behalf, which may involve the compliant processing of your
                  personal data.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.contentNav}>
            <h1 className="text-2xl font-semibold">Table of Contents</h1>
            <div className={styles.navList}>
              <p
                className="text-base font-light"
                onClick={() =>
                  sections.terms.current.scrollIntoView({ behavior: "smooth" })
                }
              >
                Terms & Privacy Policy
              </p>
              <p
                className="text-base font-light"
                onClick={() =>
                  sections.informationCollected.current.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Information Collected
              </p>
              <p
                className="text-base font-light"
                onClick={() =>
                  sections.informationUse.current.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Information Use
              </p>
              <p
                className="text-base font-light"
                onClick={() =>
                  sections.cookies.current.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Cookies
              </p>
              <p
                className="text-base font-light"
                onClick={() =>
                  sections.disclosingInformation.current.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Disclosing Information
              </p>
              <p
                className="text-base font-light"
                onClick={() =>
                  sections.targetedAdvertising.current.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Targeted Advertising
              </p>
              <p
                className="text-base font-light"
                onClick={() =>
                  sections.changesToPolicy.current.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Changes to this Policy
              </p>
              <p
                className="text-base font-light"
                onClick={() =>
                  sections.contactingUs.current.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Contacting Us
              </p>
              <p
                className="text-base font-light"
                onClick={() =>
                  sections.thirdPartyProcessors.current.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Third-Party Processors
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
