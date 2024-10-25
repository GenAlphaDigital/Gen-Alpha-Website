import React from "react";

const page = () => {
  return (
    <div className="w-[80%] h-[80%]">
      <div className=" overflow-hidden">
        <div class="sketchfab-embed-wrapper w-full h-[150vh] absolute ">
          {" "}
          <iframe
            title="Wolf Animated"
            frameborder="0"
            // allowfullscreen
            // mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking
            execution-while-out-of-viewport
            className="w-[100%] h-[100%]"
            execution-while-not-rendered
            autoPlay={true}
            web-share
            src="https://sketchfab.com/models/5134c24977e04c76ac403acb1585f7e8/embed"
          >
            {" "}
          </iframe>{" "}
          {/* <p
          style={{
            fontSize: "13px",
            fontWeight: "normal",
            margin: "5px",
            color: "#4A4A4A",
          }}
        >
          {" "}
          <a
            href="https://sketchfab.com/3d-models/wolf-animated-5134c24977e04c76ac403acb1585f7e8?utm_medium=embed&utm_campaign=share-popup&utm_content=5134c24977e04c76ac403acb1585f7e8"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: "bold", color: "#1CAAD9" }}
          >
            {" "}
            Wolf Animated{" "}
          </a>{" "}
          by{" "}
          <a
            href="https://sketchfab.com/aaokiji?utm_medium=embed&utm_campaign=share-popup&utm_content=5134c24977e04c76ac403acb1585f7e8"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: "bold", color: "#1CAAD9" }}
          >
            {" "}
            aaokiji{" "}
          </a>{" "}
          on{" "}
          <a
            href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=5134c24977e04c76ac403acb1585f7e8"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: "bold", color: "#1CAAD9" }}
          >
            Sketchfab
          </a>
        </p> */}
        </div>
      </div>
    </div>
  );
};

export default page;
