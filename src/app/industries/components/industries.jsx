import dynamic from "next/dynamic";
import styles from "../page.module.css";

const Particles = dynamic(() => import("./Particles"), { ssr: false });

const Industries = () => {
  return (
    <>
      {/* Fashion Section */}

      <section className={styles.industry}>
        <div className={styles.subIndustry}>
          <div className={styles.content}>
            <p className="text-5xl">
              <b>Fashion, Brands & E-commerce</b>
            </p>
            <small>(Design, Marketing & Tech for D2C Brands)</small>
          </div>
          <p>
            Fashion is more than just threads—it’s a vibe, a story, and we’re
            here to tell it. We work with D2C brands, luxury labels, and
            everything in between, helping you stand out in the fast-paced world
            of fashion. From sleek UI/UX design to eye-catching brand identity
            and data-driven marketing strategies, we make sure your brand’s
            runway moment is 24/7.
          </p>
          <p>
            <b>What we bring to the table:</b>
          </p>
          <ul
            style={{
              margin: "0 2rem",
            }}
          >
            <li
              style={{
                listStyle: "disc",
              }}
            >
              Stunning e-commerce design that have a brand identity{" "}
            </li>
            <li
              style={{
                listStyle: "disc",
              }}
            >
              Killer social media marketing to get you trending and up your
              sales
            </li>
            <li
              style={{
                listStyle: "disc",
              }}
            >
              SEO and content strategies to keep your brand at the top of search
              results
            </li>
          </ul>
        </div>
        <div className={styles.imageContainer}>
          <Particles imageUrl={"/industries/ecommerce.png"} />
        </div>
      </section>

      {/* Fitness Section */}
      <section className={styles.industry}>
        <div className={styles.subIndustry}>
          <div className={styles.content}>
            <p className="text-5xl">
              <b>Sports & Fitness</b>
            </p>
            <small>(Brand Collaborations, Marketing & Technology)</small>
          </div>
          <p>
            Whether you’re launching the next big fitness app or organizing a
            championship game, we’re your go-to for getting fans hyped and
            connected. From brand partnerships to innovative digital marketing
            campaigns, we’ll have your followers breaking a sweat (in a good
            way). We specialize in sports tech solutions that streamline your
            operations and make your brand a champion in its field.
          </p>
          <p>
            <b>Our game plan includes:</b>
          </p>
          <ul
            style={{
              margin: "0 2rem",
            }}
          >
            <li
              style={{
                listStyle: "disc",
              }}
            >
              Smart brand collaborations that get the right eyes on you
            </li>
            <li
              style={{
                listStyle: "disc",
              }}
            >
              Impactful social media engagement to keep your audience active
            </li>
            <li
              style={{
                listStyle: "disc",
              }}
            >
              Tech solutions for fitness platforms and event management
            </li>
            <li
              style={{
                listStyle: "disc",
              }}
            >
              Targeted ads that make sure your message hits the bullseye every
              time
            </li>
          </ul>
        </div>
        <div className={styles.imageContainer}>
          <Particles imageUrl={"/industries/fitness.png"} />
        </div>
      </section>

      {/* Real Estate Section */}
      <section className={styles.industry}>
        <div className={styles.subIndustry}>
          <div className={styles.content}>
            <p className="text-5xl">
              <b>Real Estate</b>
            </p>
            <small>(Advanced Tech & Lead Generation)</small>
          </div>
          <p>
            In real estate, leads are everything. We harness advanced technology
            and proven lead generation strategies to help you turn browsers into
            buyers. Whether you’re selling dream homes or commercial spaces,
            we’ll help you close deals faster than ever.The real estate game has
            changed—so why hasn’t your marketing?.
          </p>
          <p>
            <b>Here’s what we do best:</b>
          </p>
          <ul
            style={{
              margin: "0 2rem",
            }}
          >
            <li
              style={{
                listStyle: "disc",
              }}
            >
              Lead generation that fills your inbox with quality prospects
            </li>
            <li
              style={{
                listStyle: "disc",
              }}
            >
              AI-driven insights that help you make smarter moves
            </li>
            <li
              style={{
                listStyle: "disc",
              }}
            >
              Interactive virtual reality tours for immersive property viewing
            </li>
            <li
              style={{
                listStyle: "disc",
              }}
            >
              Comprehensive digital marketing strategies that seal the deal
            </li>
          </ul>
        </div>
        <div className={styles.imageContainer}>
          <Particles imageUrl={"/industries/real-estate.png"} />
        </div>
      </section>

      {/* Hospitality Section */}
      <section className={styles.industry}>
        <div className={styles.subIndustry}>
          <div className={styles.content}>
            <p className="text-5xl">
              <b>Hospitality</b>
            </p>
          </div>
          <p>
            Whether you’re running a swanky hotel or the coolest café in town,
            hospitality is all about creating a vibe. We’re here to make sure
            your brand looks as good as your best guest suite. From eye-popping
            design to social media strategies that fill your bookings faster
            than a long weekend, we’ve got the recipe for your success—and yes,
            it’s delicious.
          </p>
          <p>
            <b>Here’s how we create magic:</b>
          </p>
          <ul
            style={{
              margin: "0 2rem",
            }}
          >
            <li
              style={{
                listStyle: "disc",
              }}
            >
              Memorable branding and design that sets you apart
            </li>
            <li
              style={{
                listStyle: "disc",
              }}
            >
              Smart social media strategies to drive bookings
            </li>
            <li
              style={{
                listStyle: "disc",
              }}
            >
              SEO-optimized content that puts your business in the spotlight
            </li>
            <li
              style={{
                listStyle: "disc",
              }}
            >
              Personalized email marketing that keeps guests coming back
            </li>
          </ul>
        </div>
        <div className={styles.imageContainer}>
          <Particles imageUrl={"/industries/hospitality.png"} />
        </div>
      </section>
    </>
  );
};

export default Industries;
