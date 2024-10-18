import Image from "next/image";
import styles from "./styles.module.css";
import { MotionDiv } from "@/components/motionComponents/motionComponents";
import { Model } from "../model/Model";

const line = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "100%",
    transition: {
      duration: 1.2,
    },
  },
};

const left = {
  hidden: {
    x: "-5vh",
  },
  visible: {
    x: 0,
    transition: {
      duration: 1.2,
    },
  },
};

const right = {
  hidden: {
    x: "5vh",
  },
  visible: {
    x: 0,
    transition: {
      duration: 1.2,
    },
  },
};

const Card = () => {
  return (
    <MotionDiv
    initial={{
        y:100,
        opacity:0
    }}

    whileInView={{
      y:0,
      opacity:1,
      transition:{
        duration:1
      }
    }}

    viewport={{
      once:true
    }}
    className={styles.container}>
      {/* <div className={styles.line}></div> */}
      <div className={styles.imgContainer}>
        <Image src={'/projects/project1.jpg'} 
        width={1000}
        height={1000}
        style={{
          objectFit:'cover'
        }}
        />
      </div>
      <div className={styles.textContainer}>
        <Model project={
          {
            title: "Project title",
            desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, animi cupiditate. Unde quaerat voluptate dolor. Laboriosam dolore vero odit cum eligendi ducimus quam. Facere laudantium, corrupti voluptate labore esse deleniti?`,
            img:"/projects/project1.jpg"
          }
        }>
        <p className="text-3xl">Project Title</p>
        </Model>
      </div>
    </MotionDiv>
  );
};

export default Card;
