"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [isLoading, SetLoading] = useState(false);

  const onSignup = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/users/signup", user);
      console.log("signup Success", response.data);

      router.push("/login");
    } catch (error: any) {
      console.log(error);
      toast.error(error);
    }
  };

  useEffect(() => {
    if (
      user.username.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="border border-white w-2/6 h-3/5 p-6 mx-auto mt-28 ">
      <h1 className="pb-5 text-center ">{isLoading ? "Processing" : "signup"}</h1>
      <div className="flex flex-col mb-4">
        <label>Username</label>
        <input
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          type="text"
            className="px-4 py-1 rounded-xl mt-2 text-black"
          placeholder="Enter UserName"
        />
      </div>{" "}
      <div className="flex flex-col mb-4">
        <label>Email</label>
        <input
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          type="text"
            className="px-4 py-1 rounded-xl mt-2  text-black"
          placeholder="Enter Email"
        />
      </div>{" "}
      <div className="flex flex-col">
        <label>Password</label>
        <input
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="px-4 py-1 rounded-xl mt-2 border-none  text-black"
          type="text"
          placeholder="Enter Password"
        />
      </div>
      <div className="mt-6">

      <button onClick={onSignup} className=" py-4 px-4 bg-slate-700 rounded-2xl hover:bg-slate-400 cursor-pointer hover:text-black">{buttonDisabled ? "no signUP" :"signup"}</button>
      </div>

      <Link href="/login">Visit to <span className="underline text-blue-700">Login page</span></Link>
    </div>
  );
};

export default Page;
