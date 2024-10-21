"use client"
import { BackgroundBeams } from "@/components/ui/background-beams";
import React, { FormEvent, useState } from "react";

const page = () => {

const[fname , setFName] = useState('')
const[Lname,setLname] = useState('')
  const [email , setEmail] = useState('');
  const[message , setMessage] = useState('');

  const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
event.preventDefault();
console.log("Submitted",{email,message,fname,Lname})
  }
  return (
    <div className=" min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 ">
      <BackgroundBeams/>
      {/* ---------------heading section------------------- */}
      <div className="pt-32 text-center">
        <h1 className="text-3xl font-bold text-pink-400 mt-4">Contact Us</h1>
        <p className="mt-4">if you have any doubt or want to contact with free to reach me</p>
      </div>
      {/*-----------------------*/}
      <form onSubmit={handleSubmit} className="w-[700px] mx-auto mt-6">
        <div className="flex gap-6">
          <label
        
            htmlFor="first-name"
            className="block  leading-6 mt-4 "
          >
            First name
          </label>
          <div className="mt-2.5">
            <input
            value={fname}
            onChange={(e=>setFName(e.target.value))}
              id="first-name"
              name="first-name"
              type="text"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>{" "}
          <label
            htmlFor="first-name"
            className="block  mt-4"
          >
            Last Name
          </label>
          <div className="mt-2.5">
            <input
            value={Lname}
            onChange={(e)=>setLname(e.target.value)}
              id="first-name"
              name="first-name"
              type="text"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        {/* second section */}
        <div className="mt-6">
          <label htmlFor="Company">Company</label>
          <div className="mt-4">
            <input
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              placeholder=""
            />
          </div>
        </div>
        {/* ------------------------- */}
        {/* email section */}
        <div className="mt-6">
          <label htmlFor="Company">Email</label>
          <div className="mt-4">
            <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              placeholder=""
            />
          </div>
        </div>
        {/* message section */}
        <div className="mt-8">
          <label className="" htmlFor="Company">
            Message
          </label>

          <div className="mt-4">
            <textarea
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-32"
              placeholder=""
            />
          </div>
        </div>
        <div className="bg-red-500 mt-8">
          <button className="  w-full rounded-md bg-yellow-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-yellow-800 transition-all delay-200 ">Let's talk</button>
        </div>
      </form>
    </div>
  );
};

export default page;
