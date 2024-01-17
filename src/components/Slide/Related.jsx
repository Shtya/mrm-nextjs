import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Moment from 'react-moment';
import Image from 'next/image';


const Related = ({data , settings }) => {

  return (
    <div className="Slider_1_Img">
          <Slider {...settings} className='container' >
            {data?.map((e,index)=>(
                  <div  key={index} className="coverImg ">
                      <img loading="eager" src={e.thumbnail} alt={e.title}  />
                      <div className="content">
                      <div className="date" onClick={_=> window.location=`/blog/${e._id}` } ><Moment format="dddd - YYYY/MM/DD" date={e.createdAt} /> </div>
                      <p className='h2' onClick={_=> window.location=`/blog/${e._id}` } >{e?.title?.length > 60 ? e?.title?.slice(0,60) + ".." : e?.title }</p>
                      <button className='bt' onClick={_=> window.location=`/blog/${e._id}` }> <i className="fa-solid fa-angle-right"></i> </button>
                      </div>
                  </div>
              ))}
          </Slider>
        </div>
  )
}

export default Related