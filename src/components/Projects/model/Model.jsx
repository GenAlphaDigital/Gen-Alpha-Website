import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Lottie from "lottie-react";
import Image from "next/image";

export function Model({ project }) {
  return (
    <Dialog>
      <small
        style={{
          fontSize: "0.85rem",
          display:"flex",
          flexDirection:"column",
          gap:"0.5rem"
        }}
      >
        Client: {project.client}
        <Image src={`/projects/project${project.id+1}.png`} width={90} height={90}
        className="rounded-[50%]"
        alt=""
        />
      </small>

      <p
        style={{
          fontSize: "1.2rem",
          fontWeight: "500",
        }}
      >
        {project.title}
      </p>
      <DialogTrigger asChild>
        <small
          style={{
            fontSize: "0.7rem",
          }}
          className="py-4 px-4  bg-[var(--orange)] text-white rounded-[3rem] w-[fit-content] sm:max-w-[80vw]"
        >
          Learn More
        </small>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[80vw] h-[80vh] bg-[var(--navyblue)] border-none text-white flex flex-col items-center justify-center">
        <div className="flex items-center justify-center h-[80%] w-[80%] ">
          <Lottie
            animationData={project.img}
            width={1000}
            height={1000}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>

        <div className="flex gap-3 flex-col">
          {" "}
          <p className="text-3xl">{project.title}</p>
          <p>{project.desc}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
