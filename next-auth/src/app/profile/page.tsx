"use client"

import axios from 'axios'
import {  useRouter } from 'next/router'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const ProfilePage = () => {

const router = useRouter()
const [data, setData] = useState("Nothing")

const userMe=async()=>{


  const res  = await axios.post("api/users/me")
  console.log(res);
  setData(res.data._id)
}


const  Logout=  async()=>{
  try {
    

    const res = await axios.post("api/users/aboutme")
    console.log(res);

    toast.success("LogOut success") 
     router.push("/login")
  } catch (error:any) {
    
    toast.error("something went wrong")


    console.log(error.message)
  }
}

  return (
    <div>page</div>
  )
}

export default ProfilePage