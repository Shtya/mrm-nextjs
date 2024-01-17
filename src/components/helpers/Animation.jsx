"use client" ;
import React, {  useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";


const Animation = () => {
  const {pathname} = useRouter() ;
  useEffect(() => {
    AOS.init({
      delay: 50,
      offset: 10 ,
      duration: 400,
      easing: 'ease-in-out', // ease-in-out-back
      once:true 
    });
    AOS.refresh();
  }, [])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior:"instant"} )
  }, [pathname])

  return <></>
}


export default Animation