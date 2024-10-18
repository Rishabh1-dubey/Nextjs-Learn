"use client"

import Link from 'next/link'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';

  const projects = [
         {
           title: "Stripe",
           description:
             "A technology company that builds economic infrastructure for the internet.",
           slug: "https://stripe.com",
           "isFeatured": true,
         },
         {
           title: "Netflix",
           description:
             "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
             slug: "https://netflix.com",
             "isFeatured": true,
         },
         {
           title: "Google",
           description:
             "A multinational technology company that specializes in Internet-related services and products.",
             slug: "https://google.com",
             "isFeatured": true,
         },
         {
           title: "Meta",
           description:
             "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
             slug: "https://meta.com",
             "isFeatured": true,
         },
         {
           title: "Amazon",
           description:
             "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
             slug: "https://amazon.com",
             "isFeatured": true,
         },
         {
           title: "Microsoft",
           description:
             "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
             slug: "https://microsoft.com",
             "isFeatured": true,
         },
       ];
const UpcomingWebniar = () => {
    
  return (
    <div className="bg-zinc-900 py-12 mt-12">
    {/* -------------div 1---------------- */}
    <div>
      <div className="text-center">
        <h2 className="text-base  text-teal-600  font-semibold  tracking-wide uppercase">
    Featured Webinar
        </h2>
        <p className="mt-2 text-3xl  font-bold text-gray-300 ">
          {" "}
          Different types of techie attendie
        </p>
      </div>
    </div>
    {/*----------------- div-2 ------------------*/}
    <div className='p-4 mr-12 ml-10'>

    <HoverEffect items={projects.map((webinar)=>(
        {
title:webinar.title,
description:webinar.description,
link:"/"
        }
    ))}/>
    </div>
    {/* --------------div-3----------------------- */}
    <div className="mt-6 text-center text-white">
      <Link
        href={"/courses"}
        className="border-neutral-500 pl-4 py-4 pr-4 rounded-lg hover:bg-orange-400 transition duration-200 bg-gray-800"
      >
        view all courses
      </Link>
    </div>
  </div>
  )
}

export default UpcomingWebniar