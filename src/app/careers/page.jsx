import dynamic from "next/dynamic";

const page = dynamic(() => import("./pageComp"), { ssr: false });

export default page;
