"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const Language = [
  {
    title: 'JavaScript',
    description:
      'JavaScript is a high-level, versatile programming language primarily used for web development. It enables dynamic content on websites, allowing developers to build interactive user interfaces. With frameworks like React, Angular, and libraries like Node.js, it’s also widely used for both front-end and back-end development.',
  },
  {
    title: "Python",
    description:
      "Python is a powerful, high-level programming language known for its simplicity and readability. It used in various fields such as web development, data analysis, artificial intelligence, machine learning, and automation. Its vast library support and beginner-friendly syntax make it a popular choice for new and experienced developers.",
  },
  {
    title: "Java",
    description:
      "Java is a robust, object-oriented programming language commonly used for building large-scale applications. Its 'write once, run anywhere' philosophy allows developers to create software that can run on any platform with a compatible Java Virtual Machine (JVM). Java is widely used in Android app development, enterprise applications, and server-side solutions.",
  },
];

export function WhychooseUs() {
  return (
    <div className=" ">
    <StickyScroll content={Language}/>
    </div>
  );
}

export default WhychooseUs;
