import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Lottie from "lottie-react";
import Image from "next/image";

export function Model({ project }) {
  return (
    <Dialog>
      <p className="text-3xl">{project.title}</p>
      <DialogTrigger asChild>
          <small
          style={{
            fontSize:'0.7rem'
          }}
          className="py-2 px-2  bg-[var(--orange)] rounded-[3rem] w-[fit-content]"
          >Learn More</small>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[80vw] h-[80vh] bg-[var(--navyblue)] border-none text-white flex flex-col items-center justify-center">
        <div className="flex items-center justify-center h-[80%] w-[80%] ">
          <Lottie
            animationData={project.img}
            width={1000}
            height={1000}
            style={{
                width:'100%',
                height:'100%',
                objectFit:'contain'
            }}
          />
        </div>

        <div className="flex gap-3 flex-col">
          {" "}
          <p className="text-3xl ">{project.title}</p>
          <p>{project.desc}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
