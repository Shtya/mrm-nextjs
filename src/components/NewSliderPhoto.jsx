import React, { useEffect, useRef, useState } from 'react'
import { Animate } from '@/pages/_app' ;import IMG3 from "../assets/bg/b3.webp"
import Image from 'next/image';



import SwiperCore from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay , Navigation , Scrollbar   } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

SwiperCore.use([Autoplay]);


const NewSliderPhoto =  ({header1 , typeOf , DATA , classHeader , schema , title , classGallery}) => {
  const header = header1
  const [data , setdata] = useState([])
  const [type , settype] = useState(typeOf)
  // useEffect(_=>{setdata(DATA)},[])



  const handleFilter = async(ele) => {
    await setdata(DATA.filter(e => e.name.includes(ele))) 
    settype(ele)
  }

  useEffect(_=> {
    const get = async ()=>{
      await setdata(DATA.filter(e => e.name?.includes("all")))  
    }
    get()
  } ,[])
  
  const settings = {
    onSlideChange : async()=> await settype(document.querySelectorAll(`.${classGallery} .swiper-slide-active img`)[0]?.dataset?.type?.split(" ")[0])  ,
    slidesPerView: 2 ,
    spaceBetween: 0 ,
    // loop:true, 
    speed: 1000 ,
    pagination: {clickable: true },
    // modules: [ Autoplay , Navigation , Scrollbar],
    // autoplay:{delay: 2000 , "disableOnInteraction": false} ,
    lazy: { enabled: false },
    navigation:true,
    // breakpoints : {
    //   700: { slidesPerView: 2, },
    // }
  }

  return (
    <div className={`${classGallery} GALLERY`}>
        <div className="bgCover"  >  <Image loading="eager"    src={IMG3} alt="home"  /> </div>
        <div className="h1">{title || "OUR WORKS"}</div>
        
        <ul className={`header1 header2 ${classHeader}`} data-aos={Animate} > 
          {header?.map((e,index)=> (<li className={type == e.type ? "active p" : "p"}  onClick={_=>handleFilter(e.type)} key={index}>{e.name}</li>))} 
        </ul>

          <div className="container">
              <Swiper  {...settings}    className="mySwiper" >

                {data?.map((ele,idx)=>( 
                    <SwiperSlide key={idx} > 
                    {/* <Image loading="eager" loading="eager" key={idx} src={ele.images[0].img}   /> */}
                    { ele.images.map((e,index)=> ( <Image loading="eager"  key={index} src={e.img}   />    )) }
                    </SwiperSlide>
                    )) }
              </Swiper>
          </div>
    </div>
  )
}

export default NewSliderPhoto