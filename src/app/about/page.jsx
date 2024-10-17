import dynamic from "next/dynamic";

// Dynamically import the component with SSR disabled
const AboutPage = dynamic(() => import("./About.jsx"), { ssr: false });

export default AboutPage;
