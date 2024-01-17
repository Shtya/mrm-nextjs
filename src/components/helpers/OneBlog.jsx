import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {  useRouter } from "next/router"
import Moment from 'react-moment';

import IMG1 from "../../assets/bg/b1.webp"
import IMG3 from "../../assets/bg/b3.webp"
import Skeleton from '../Skeleton';
import Image from 'next/image';

const OneBlog = ({classn ,blogs , settings , name , onHere }) => {
  const {push} = useRouter() 

  return (
    <div className={`Slider_1_Img ${classn}`}>
      {/* <Skeleton /> */}
      {onHere ? <div className="bgCover"  >  <Image loading="eager"  src={IMG3} alt="blog"  /> </div> : <div className="bgCover"  >  <Image loading="eager"  src={IMG1} alt="blog"  /> </div>}
      <div className="h1 clip"> {name} </div>
          <Slider {...settings} className='container' >

            { blogs?.length > 1 ? (
              blogs.map((e,index)=>(
                <div  key={index} className="coverImg">
                    <img loading="eager" src={e.thumbnail} alt={e.title}  />
                    <div className="date" onClick={_=> push(`/blog/${e._id}`)} > <Moment format="dddd - YYYY/MM/DD" date={e.createdAt} /> </div>
                    <p className='h2' onClick={_=> push(`/blog/${e._id}`)} >{e?.title?.length > 60 ? e?.title?.slice(0,60) + ".." : e?.title }</p>
                    <button className='bt' onClick={_=> push(`/blog/${e._id}`)}> <i className="fa-solid fa-angle-right"></i> </button>
                </div>
            ))
            )  :(
              Array(3).fill(1).map((e,index)=> (<Skeleton key={index} />))
            )}

          </Slider>
        </div>
  )
}

export default OneBlog