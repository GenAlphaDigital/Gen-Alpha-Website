import dynamic from "next/dynamic";

const page = dynamic(() => import("./pageComp.jsx"), { ssr: false });

export default page;
