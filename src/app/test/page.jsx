import React from "react";
import MainFrame from "../../../public/about/svg";

const page = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        padding: "40px",
        boxSizing: "border-box",
        overflow: "hidden",
        margin: "6rem 0",
      }}
    >
      <MainFrame />
    </div>
  );
};

export default page;
