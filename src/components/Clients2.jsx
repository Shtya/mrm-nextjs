import Slider_3_Img from "./Slide/Slider_3_Img"
import IMG3 from "../assets/bg/b1.webp"
import { memo } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";


var settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplaySpeed: 2000 ,
  slidesToShow: 6,
  slidesToScroll: 3 , 
  autoplay:true ,
  cssEase: "linear",
  pauseOnHover: false,
  pauseOnFocus: false,
  focusOnSelect: false,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 1 ,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1 ,
        dots: false,
        autoplaySpeed: 1500 ,
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1 ,
        autoplaySpeed: 1500 ,
        dots: false,
      }
    }
  ]
};



const Clients2 = memo(() => {
  const {t} = useTranslation() ;

    return (
    <section className='Clients2' id='Clients'>
      <div className="bgCover"  >  <Image  loading="eager"   src={IMG3} alt="services"  /> </div>
      <div className="container">
      <div className="h1 " >{t("home.client")}</div>
      </div>
      <Slider_3_Img  settings={settings} />

    </section>
  )
})

export default Clients2