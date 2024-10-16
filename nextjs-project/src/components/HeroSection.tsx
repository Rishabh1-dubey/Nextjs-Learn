import React from "react";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="">
      <h1 className=" text-white  mt-64 ml-42 text-center text-6xl font-bold ">Explore the best Courses</h1>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="pink"
      />
      <p className="p-10 w-[830px] text-center ml-[370px] text-xl  mx-auto text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab in quis quo error expedita pariatur sequi exercitationem voluptatum itaque numquam deserunt harum, voluptas neque delectus excepturi ex aperiam cupiditate quas.
      </p>
      <div className="mt-2 text-white  text-center ">
        <Link href={"/courses"}
        >
        <Button>
          Explore Courses
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
