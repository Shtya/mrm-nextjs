import React, { useEffect, useRef, useState } from 'react'
import { Animate } from '@/pages/_app' ;import IMG3 from "../assets/bg/b3.webp"



import SwiperCore from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay , Navigation , Scrollbar   } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Image from 'next/image';

SwiperCore.use([Autoplay]);


const NewSlider2 = ({header1 , typeOf , DATA , classHeader , schema , title , classGallery}) => {
  const swiperRef = useRef(null)

  const header =header1
  const [data , setdata] = useState([])
  const [type , settype] = useState(typeOf)
  useEffect(_=>{setdata(DATA)},[])

  const handleFilter = (ele) => {
    setdata(DATA.filter(e => e.name.includes(ele))) 
    settype(ele)
  }

  useEffect(_=> {setdata(DATA.filter(e => e.name?.includes("all")))  } ,[])
  const settings = {
    onSlideChange : ()=> settype(document.querySelectorAll(`.${classGallery} .swiper-slide-active img`)[0]?.dataset?.type?.split(" ")[0])  ,
    slidesPerView: 2 ,
    spaceBetween: 10 ,
    // loop:true, 
    speed: 1000 ,
    pagination: {clickable: true },
    modules: [ Autoplay , Navigation , Scrollbar],
    autoplay:{delay: 2000 , "disableOnInteraction": false} ,
    lazy: { enabled: false },
    navigation:true,
    breakpoints : {
      700: { slidesPerView: 2,  },
      100: { slidesPerView: 1 },
    }
  }

  return (
    <div className={`${classGallery} GALLERY`}>
        <div className="bgCover"  >  <Image loading="eager"    src={IMG3} alt="home"  /> </div>
        <div className="h1">{title || "OUR WORKS"}</div>
        
        <ul className={`header1 header2 ${classHeader}`} data-aos={Animate} > 
          {header?.map((e,index)=> (<li className={type == e.type ? "active p" : "p"}  onClick={_=>handleFilter(e.type)} key={index}>{e.name}</li>))} 
        </ul>

          <div className="container">
              <Swiper  {...settings}    className="mySwiper" ref={swiperRef}  >

                {data?.map((ele,idx)=>( 
                    <SwiperSlide key={idx} > 
                    { ele.images.map((e,index)=> ( <Image loading="eager"  key={index} src={e.img} data-type={`${ele.name}`}  alt={e?.alt || e?.type}  />    )) }
                    </SwiperSlide>
                    )) }
              </Swiper>
          </div>
    </div>
  )
}

export default NewSlider2