import Grid1 from "../assets/Intro&Cover/Why-photo.webp" ;
import ImgIntro from "../assets/bg/b9.webp"
import ImgSection from "../assets/Intro&Cover/cover-photo.webp"

import IMG1 from "../assets/bg/b1.webp"
import IMG2 from "../assets/bg/b2.webp"
import IMG3 from "../assets/bg/b1.webp"

import Animation from "../components/helpers/Animation";
import  { Pattern9 } from "../components/patterns/Pattern1";


import Qutation   from "../components/helpers/Qutation"
import Footer  from "../components/Footer"
import Hero from "../components/helpers/Hero"
import PHOTOgraphy from "../components/helpers/PHOTOgraphy"
import Serach2  from "../components/helpers/Serach2"
import Contact  from "../components/Contact"

import React , { memo } from "react"
import { ImageGalleryPotography } from "../components/Images2";
import { useTranslation } from "react-i18next";
import NewSlider from "../components/NewSlider";
import HEAD from "@/components/HEAD";


const S_photography = () => {
  const {t} = useTranslation()
  const SERVICES = t("photo.photography.data" , {returnObjects:true})
  const SERVICES2 = t("photo.vediography.data" , {returnObjects:true})
  const WHY = t("photo.why.data" , {returnObjects:true})

  const schema = {
    "@context": "http://schema.org",
    "@type": "photography-and-videography",
    "url": "https://mrmadvertisingdubai.com/Photography-In-Dubai",
    "publisher": {
      "@type": "Organization",
      "name": "MRM Advertising",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mrmadvertisingdubai.com/Logo1.webp"
      }
    }
  };
  return (
    <div className="S_photography landing">
      <HEAD canonical="Photography-In-Dubai" schema={schema} title="Top Photography & Videography services in Dubai, UAE" desc="Discover MRM's Wide Range of videography and Photography Services in Dubai: Events, Fashion, Food and Automotive, all Telling your Brand's Story." />
      <Animation />

      <Hero
      H1={t("photo.Hero.h1")}
      H2={t("photo.Hero.h2")}
      H3={t("photo.Hero.h3")}
      Img={ImgSection} nameServices="Photography&videography" Imgintro={ImgIntro} />

      <Qutation Img={IMG1}  desc1={t("photo.qoute.h1")} />

      <Pattern9 />
      <PHOTOgraphy classn="photography-services"  Img ={IMG2} nameServices ="photography&videography" title ={t("photo.photography.title")} data ={SERVICES} />
      
      <Pattern9 />
      <PHOTOgraphy classn="Videography-services"  Img ={IMG3} nameServices ="photography&videography" title={t("photo.vediography.title")} data ={SERVICES2} />

      <Pattern9 />  
      <NewSlider  DATA={ImageGalleryPotography}  typeOf="Videograph" title= {t("home.Home_Header.name")}   header1={t("photo.header",{returnObjects:true})}   />
    

      <Pattern9 />
      <Serach2 Img ={IMG1} Imgsection ={Grid1} title ={t("photo.why.title")} data={WHY} />

      <Contact number={2} title={t("photo.footer.title")} desc=" " />

      <Footer />
      </div>
  )
}

export default memo(S_photography)





