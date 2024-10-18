"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testnomial() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10 text-white">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Rishabh's innovative approach and attention to detail are unparalleled. His ability to translate complex ideas into seamless, interactive designs truly elevated our project.",
    name: "Sarah Lee, Product Manager at Tech Innovators",
    title: " Outstanding Creativity and Innovation",
  },
  {
    quote:
      "Working with Rishabh was a game-changer. His technical expertise and creative solutions helped us meet tight deadlines without compromising on quality.",
    name: "Michael Johnson, CEO of WebTech Solutions",
    title: "A True Asset to the Team",
  },
  {
    quote:
      "Rishabh’s passion for front-end development shines through in every project. His work is not only efficient but also user-focused, enhancing our customer experience significantly..",
    name: "Emily Davis, Lead Developer at NextGen Apps",
    title: "Exceptional Front-End Development Skills",
  },
  {
    quote:
      "Rishabh’s commitment to excellence and his proactive approach made him a valuable asset to our team. He brings creativity and professionalism to every project he works on.",
    name: "Lisa Patel, Project Lead at CodeCraft Innovations",
    title: " A Talented and Dedicated Developer",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
