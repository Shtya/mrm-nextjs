"use client" ;
import { memo, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import IMG3 from "../assets/bg/b3.webp"
import Image from 'next/image';


const Landing = memo(() => {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {videoRef.current.addEventListener('loadeddata', handleVideoLoaded);}
    return () => { if (videoRef.current) {   videoRef.current.removeEventListener('loadeddata', handleVideoLoaded); } }
  }, []);

  const handleVideoLoaded = () => {
    videoRef.current.removeEventListener('loadeddata', handleVideoLoaded);
    videoRef.current.setAttribute('preload', 'auto');
  };

  return (
    <header id='header __idm_id__'  >
      <div className="bgCover" style={{zIndex:"0"}}  >  <Image loading="eager"   src={IMG3} alt="Landing"  /> </div>
      <div className="container"> <Navbar /> </div>
      <section id='video' >
          <video webkit-playsinline="true" playsInline  preload="auto" ref={videoRef}  id='myVideo'   autoPlay loop muted >
            <source src={"/Dashboard.mp4"} type="video/mp4" />
          </video>
        </section>
    </header>
  )
})

export default Landing