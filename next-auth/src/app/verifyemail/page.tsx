"use client"
import axios from "axios";
import { tree } from "next/dist/build/templates/app-page";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const VerifyEmail = () => {
  const [token, settoken] = useState("");
  const [error, setError] = useState(false);
  const [verified, setVerified] = useState(false);

  const VerifiedEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      console.log(error.response.data);
      setError(true);
    }

    useEffect(() => {
      setError(false);
      const userUrl = window.location.search.split("=")[1];
      settoken(userUrl || " ");
    }, []);

    useEffect(() => {
      setError(false);
      if (token.length > 0) {
        VerifiedEmail();
      }
    }, [token]);
  };

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen py-2s">
      

      <h1 className="text-4xl">Verify Email</h1>
      <h2 className="p-2 bg-orange-500  text-black w-80">
        {token ? `${token}` : "  No token"}
      </h2>
    

      {verified && (
        <div>
          <h1>Verifiedd</h1>
          <Link href="/login">Login</Link>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
