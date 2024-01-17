import Footer from '../components/Footer'
import ImgIntro from "../assets/bg/b9.webp"
import ImgSection from "../assets/Intro&Cover/cover-signages.webp"

import Animation from '../components/helpers/Animation'
import{  Pattern9 } from '../components/patterns/Pattern1'
import IMG2 from "../assets/bg/b3.webp"
import IMG1 from "../assets/bg/b1.webp"
import Contact from '../components/Contact'
import Hero from '../components/helpers/Hero'
import Qutation from '../components/helpers/Qutation'
import Process from '../components/helpers/Process'



import React , { memo } from "react"
import { ImageGalleryIndoor, ImageGalleryOutdoor } from '../components/Images2';
import { useTranslation } from 'react-i18next';
import NewSlider from '../components/NewSlider'
import NewSlider2 from '../components/NewSlider2'
import HEAD from '@/components/HEAD'




const M_Signages = memo(() => {
  const {t} = useTranslation() ;

  const process = t("signages.process.data" , {returnObjects:true})
  const schema = {
    "@context": "http://schema.org",
    "@type": "indoor-and-outdoor-signages",
    "url": "https://mrmadvertisingdubai.com/indoor-and-outdoor-signages-agency-in-dubai",
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
    <div className="M_Signages landing">
      <HEAD canonical="indoor-and-outdoor-signages-agency-in-dubai" schema={schema} title="Custom Designs with one of The Best Signage Companies in Dubai" desc="Discover How Our Signage Expertise Can Transform Your Space.MRM One of The Best Signage Companies in Dubai Contact. Us for Creative Signage Solutions" />
      <Animation />
      <Hero 
      H1={t("signages.Hero.h1")}
      H2={t("signages.Hero.h2")}
      H3={t("signages.Hero.h3")}
      Img={ImgSection} nameServices="signages services" Imgintro={ImgIntro} />
      <Qutation Img={IMG1} 
      title1={t("signages.qoute.title")}
      desc1={t("signages.qoute.desc")} />

      <Pattern9 />
      <NewSlider DATA={ImageGalleryOutdoor} typeOf="Led-signage" title={t("signages.outdoor.title")}   header1={t("signages.outdoor.header",{returnObjects:true})} />


      <Pattern9 />
      <NewSlider2  classGallery="Gallery2" DATA={ImageGalleryIndoor} typeOf="Health-safety" title={t("signages.indoor.title")}   header1={t("signages.indoor.header",{returnObjects:true})}   />


      <Pattern9 />
      <Process Img={IMG2} title={t("signages.process.title")}  desc={t("signages.process.desc")}  data={process} />



      <Contact title={t("signages.contact.title")} desc={t("signages.contact.desc")} number={1} />
      <Footer />
      </div>
  )
})

export default M_Signages





