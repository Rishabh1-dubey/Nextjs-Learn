"use client";
import Link from "next/link";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Courses {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

import React from "react";

const FeaturedCourses = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Courses) => course.isFeatured
  );
  return (
    <div className="bg-zinc-900 py-12 mt-12">
      {/* -------------div 1---------------- */}
      <div>
        <div className="text-center">
          <h2 className="text-base  text-teal-600  font-semibold  tracking-wide uppercase">
            OUR FEATURES
          </h2>
          <p className="mt-2 text-3xl  font-bold text-gray-300 ">
            {" "}
            Learn with the best
          </p>
        </div>
      </div>
      {/*----------------- div-2 ------------------*/}
      <div className="text-white mt-10">
        <div className="grid grid-cols-3 gap-6 justify-center">
          {featuredCourses.map((course: Courses) => (
            <div className="flex justify-center pl-8">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w- pl-6 pr-6 pb-4 cursor-pointer">
                <div className="flex flex-col items-center text-center flex-grow ">
                  <img
                    className=" mt-6 h-[200px] w-[350px] object-cover"
                    src={course.image}
                  />
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Link
                    href={`/courses/${course.slug}`}
                    className=" pl-4 pr-4 p-2 mt-2 rounded-lg bg-gray-800 hover:bg-zinc-800 transition duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      {/* --------------div-3----------------------- */}
      <div className="mt-12 text-center text-white">
        <Link
          href={"/courses"}
          className="border-neutral-500 pl-4 py-4 pr-4 rounded-lg hover:bg-orange-400 transition duration-200 bg-gray-800"
        >
          view all courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
