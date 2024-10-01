import Marketing from "@/components/3d Components/marketing";
import Packaging from "@/components/3d Components/packaging";
import Branding from "@/components/3d Components/branding";
import WebDev from "@/components/3d Components/webdev";
import React from "react";

const page = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
          // height: "50",
        }}
      >
        <Branding />
      </div>
    </div>
  );
};

export default page;
