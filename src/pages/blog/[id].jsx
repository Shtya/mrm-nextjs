import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Animation from '../../components/helpers/Animation';
import Footer from '../../components/Footer';
import Navbar1 from '../../components/Navbar';
import Related from '../../components/Slide/Related';
import baseURL, { baseImg } from '../../API/API';
import { Divider } from '../../components/patterns/Pattern1';
import AddComment from '../../components/AddComment';
import Image from 'next/image';
import HEAD from '@/components/HEAD';
import axios from 'axios';


const BlogDetails = () => {
  
  const [data , setdata] = useState([])
  const [blogs , setblogs] = useState([])
  
  const router = useRouter()
  let {id} = router.query ;
  useEffect(_=>{ axios.get("/api/posts" ).then(e=> setblogs(e.data)) } ,[] )
  useEffect(_=>{ id && axios.get(`/api/posts/${id}` ).then(e => setdata(e.data))   } ,[id] )


    var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1 , 
    autoplay:true ,
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
    <div className='blog-details'>
      <HEAD title={data?.titleData} desc={data?.descData}  />

      <div className="container container3"> <Navbar1 /> </div>
      <Animation />

      <div className="home">
          <div className="container">
              {data?.thumbnail ? <div className="boxImg hidden-img"  >  <img loading="eager" src={data?.thumbnail} alt={data.title || "blog"} /> </div> : <div className="load"></div> }
              <div className="boxs" data-aos="fade-left" >
              <p  className="h2 hidden-text" > <span>{data.title}</span> </p>
            </div>
        </div>
      </div>

      <div className={`blog-detail blog-detail-${data?.num}`}>
        <div className="container">
          <div dangerouslySetInnerHTML={{ __html: data?.description }} />
        </div>
      </div>
      <Divider />

    <AddComment />


      <Divider />
      <div className="related">
        <div className="h1">Dive Into More Articles on This Topic</div>
        <Related  data={blogs} settings={settings} />
        </div>
      <Footer />
    </div>
  )
}

export default BlogDetails