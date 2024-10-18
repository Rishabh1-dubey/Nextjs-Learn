"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { permanentRedirect } from "next/navigation";

const person = [
  {
    id: 1,
    name: "Aksya Saini",
    designation: "Software Engineer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQkRdH_sgg8RuehiAHseqd8T2wiBjnwMzj3g&s", // Replace with actual image path
  },
  {
    id: 2,
    name: "Hitesh Sir",
    designation: "Senior Developer",
    image:
      "https://pbs.twimg.com/profile_images/1724344976715468800/MasktpKz_400x400.jpg", // Replace with actual image path
  },
  {
    id: 3,
    name: "Piyush Garg",
    designation: "Frontend Developer",
    image:
      "https://www.piyushgarg.dev/_next/image?url=%2Fimages%2Favatar.png&w=1080&q=75", // Replace with actual image path
  },
  {
    id: 4,
    name: "Harkirat Singh",
    designation: "Backend Engineer",
    image:
      "https://yt3.googleusercontent.com/MeY_fGNrjVLV0PVOBN7dRWzMBS0y41YGm55LOaJ02cXV82a7Np9pYxxhHFqdYdncEy1I2cYR=s900-c-k-c0x00ffffff-no-rj", // Replace with actual image path
  },
];
const Instractor = () => {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center ">
      <WavyBackground className="w-full w-max-7xl  mx-auto flex flex-col  items-center justify-center h-full">
       
          <h2 className="text-7sxl text-center font-bold mb-6">
            Meet our Instructor
          </h2>
          <p className="text-xl mb-6 text-zinc-200">
            A well-qualified teacher for your career, where you can learn from
            him and shape your career in a good direction under his guidance.
          </p>
   
        <div className="flex">
          <AnimatedTooltip items={person} />
        </div>
      </WavyBackground>
    </div>
  );
};

export default Instractor;
