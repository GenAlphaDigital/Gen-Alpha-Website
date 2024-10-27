import React from "react";
// import AnimatedParticles from "./Particles";
import Particles from "./Particles";

const page = () => {
  return (
    <main>
      <Particles imageUrl={"/industries/ecommerce.png"} />
      <Particles imageUrl={"/industries/real-estate.png"} />
      <Particles imageUrl={"/industries/fitness.png"} />
      <Particles imageUrl={"/industries/hospitality.png"} />
    </main>
  );
};

export default page;
