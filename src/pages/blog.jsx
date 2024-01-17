import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import IntroImg from "../assets/about-us/OUR BLOG 1400x700-01.webp"
import OneBlog from '../components/helpers/OneBlog';
import Footer from '../components/Footer';
import { Divider } from '../components/patterns/Pattern1';

import IMG1 from "../assets/bg/b1.webp"



import Animation from '../components/helpers/Animation';
import Image from 'next/image';
import HEAD from '@/components/HEAD';
import axios from 'axios';

const Blogs = () => {
  const [Digital , setDigital] = useState([])
  const [Latest , setLatest] = useState([])
  const [Tips , setTips] = useState([])

  useEffect(() => {
    axios.get("/api/posts?category=Digital Marketing News" ).then(e => setDigital(e.data))
    axios.get("/api/posts?category=Latest Updates and Insights" ).then(e => setLatest(e.data))
    axios.get("/api/posts?category=Tips and Strategies" ).then(e => setTips(e.data))
  }, []);



  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1 , 
    // autoplay:true ,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1 ,
          dots: false,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1 ,
          dots: false,
        }
      }
    ]
  };

  return (
    <div className='blog-page'>
      <HEAD canonical="blogs" title="Digital Marketing Updates and Tips for Business Growth " desc="Stay ahead with the latest digital marketing updates, Insights and expert tips for your Digital business growth with MRM`s informative blogs " />
      <Animation />
      <div className="container"> <Navbar /></div>
        <div className="coverIntro"> <Image loading="eager" src={IntroImg} alt="Chic 'OUR BLOG' text over a laptop on a desk" /></div>
        <Divider classn="divider divider-top" />
        <div className="quotation">
        <div className="bgCover"  >  <Image loading="eager"  src={IMG1} alt="blogs"  /> </div>
        
          <div className="container">
            <p className="h3 " data-aos="fade-up">Stay updated with our latest news, strategies, and tactics to succeed in your business.</p>
          </div>
          </div>
        <Divider classn="divider " />
        <OneBlog onHere={true} classn="blog-1" name="Digital Marketing News" settings={settings}  blogs={Digital} />
        <Divider classn="divider-left" />
        <OneBlog onHere={false} classn="blog-2" name="Latest Updates & Insights" settings={settings}  blogs={Latest} />
        <Divider classn="divider" />
        <OneBlog onHere={true} classn="blog-3" name="Tips & Strategies" settings={settings}  blogs={Tips} />

      <Footer />
    </div>
  )
}

export default Blogs