import IMG3 from "../../assets/bg/b3.webp"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { memo, useEffect, useState } from "react";
import { Animate } from "../../App";
import Image from 'next/image';


export default memo(function SliderGalleryIndoor ({header1 , typeOf , DATA , classHeader , classGallery , schema , title}) {
  const handleChange = ()=>{
    settype(document.querySelectorAll(".Gallery2 .slick-current img")[0]?.dataset?.type?.split(" ")[0])
  }
  const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1,
      rows:2 ,
      autoplay:true,
      cssEase: "linear",
      pauseOnHover: false,
      pauseOnFocus: false,
      focusOnSelect: false,
      afterChange: handleChange ,
      responsive: [
          {
            breakpoint: 1100,
            settings: {
              dots:false ,
              autoplay:false
            }
          },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1 ,
            dots:false 
          }
        }
      ]
  };

  const header =header1
  const [data , setdata] = useState([])
  const [type , settype] = useState(typeOf)
  useEffect(_=>{setdata(DATA)},[])

  const handleFilter = (ele) => {
    setdata(DATA.filter((e)=> e.type?.includes(ele)))
    settype(ele)
  }

  return (
    <div className={`GALLERY ${classGallery}`}>
        <div className="bgCover"  >  <Image loading="eager"  src={IMG3} alt="home"  /> </div>
        <div className="h1"> {title} </div>
        {/* <Helmet><script type="application/ld+json">{JSON.stringify(schema)}</script> </Helmet> */}
        <ul className={`header1 header2 ${classHeader}`} data-aos={Animate} > 
          {header?.map((e,index)=> (<li className={type == e.type ? "active p" : "p"}  onClick={_=>handleFilter(e.type)} key={index}>{e.name}</li>))} 
        </ul>

          <div className="container">
              <Slider  {...settings}    className="mySwiper" data-aos={Animate } >

                {data?.map((e,index)=>( 
                      <Image loading="eager" 
                      key={index} data-type={`${e.type}`}  
                      src={e.img}  alt={e?.alt || e?.type}   />
                    )) }
              </Slider>
          </div>
    </div>
  )
})
