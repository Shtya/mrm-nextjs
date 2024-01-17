import Footer from '../components/Footer'
import ImgIntro from "../assets/bg/b9.webp"
import ImgSection from "../assets/Intro&Cover/cover-exhibition.webp"

import DisplayStand1  from "../assets/gallery/displayStand/NEW Display Stand-03.webp" ;
import DisplayStand2  from "../assets/gallery/displayStand/NEW Display Stand-04.webp" ;
import DisplayStand3  from "../assets/gallery/displayStand/NEW Display Stand-05.webp" ;
import DisplayStand4  from "../assets/gallery/displayStand/NEW Display Stand-07.webp" ;
import DisplayStand6  from "../assets/gallery/displayStand/NEW Display Stand-08.webp" ;
import DisplayStand7  from "../assets/gallery/displayStand/NEW Display Stand-09.webp" ;

import Exhibition1 from "../assets/gallery/exhibitionStand/Exhibition Stands-01.webp" ;
import Exhibition2 from "../assets/gallery/exhibitionStand/Exhibition Stands-02.webp" ;
import Exhibition3 from "../assets/gallery/exhibitionStand/Exhibition Stands-03.webp" ;
import Exhibition4 from "../assets/gallery/exhibitionStand/Exhibition Stands-04.webp" ;
import Exhibition5 from "../assets/gallery/exhibitionStand/Exhibition Stands-05.webp" ;
import Exhibition6 from "../assets/gallery/exhibitionStand/Exhibition Stands-06.webp" ;
import Exhibition7 from "../assets/gallery/exhibitionStand/Exhibition Stands-07.webp" ;
import Exhibition8 from "../assets/gallery/exhibitionStand/Exhibition Stands-08.webp" ;
import Exhibition9 from "../assets/gallery/exhibitionStand/Exhibition Stands-09.webp" ;


import Animation from "../components/helpers/Animation";
import { Pattern9 } from "../components/patterns/Pattern1";
import IMG1 from "../assets/bg/b1.webp"
import IMG2 from "../assets/bg/b3.webp"
import IMG3 from "../assets/bg/b2.webp"
import Contact from "../components/Contact";
import Hero from "../components/helpers/Hero";
import Qutation from "../components/helpers/Qutation";
import ExhibitionGallery  from "../components/helpers/Exhibition";
import Impact from "../components/helpers/Impact";
import { useTranslation } from 'react-i18next';
import HEAD from '@/components/HEAD';



const S_Exhibition = () => {
  const {t} = useTranslation() ;

  const BRANDING_SERVICES = t("exhibition.impact.data" , {returnObjects:true})
  const DisplayStands = [
    {img:DisplayStand1, animate:"fade-up" } ,
    {img:DisplayStand2, animate:"fade-up" } ,
    {img:DisplayStand3, animate:"fade-up" } ,
    {img:DisplayStand4, animate:"fade-up" } ,
    {img:DisplayStand6, animate:"fade-up" } ,
    {img:DisplayStand7, animate:"fade-up" } ,
  ]
  const Exhibition = [
    {img:Exhibition1, animate:"fade-up" } ,
    {img:Exhibition2, animate:"fade-up" } ,
    {img:Exhibition3, animate:"fade-up" } ,
    {img:Exhibition4, animate:"fade-up" } ,
    {img:Exhibition5, animate:"fade-up" } ,
    {img:Exhibition6, animate:"fade-up" } ,
    {img:Exhibition7, animate:"fade-up" } ,
    {img:Exhibition8, animate:"fade-up" } ,
    {img:Exhibition9 , animate:"fade-up" } ,
  ]
  const schema = {
    "@context": "http://schema.org",
    "@type": "Exhibition-and-display-stand",
    "url": "https://mrmadvertisingdubai.com/exhibition-and-display-stand-agency-in-dubai",
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
    <div className="S_Exhibition landing">
      <HEAD canonical="exhibition-and-display-stand-agency-in-dubai" schema={schema} title="Leading Display stand and Exhibition stands Company in Dubai" desc="Discover our Unique Exhibition and Display Stands for a Powerful and Lasting Impression on your Audience. Contact MRM, the Best Exhibition Stands Company in Dubai" />
      <Animation />
      
      <Hero
        H1={t("exhibition.Hero.h1")}
        H2={t("exhibition.Hero.h2")}
        H3={t("exhibition.Hero.h3")}
        Img={ImgSection} 
        nameServices="Luxurious event exhibition space" 
        titleServices="Elegant -Exhibit -Design"
        Imgintro={ImgIntro} />
      
      <Qutation 
        Img={IMG1} 
        title1={t("exhibition.qoute.title")}
        desc1={t("exhibition.qoute.desc")} />

      <Pattern9 />
      <ExhibitionGallery classn="exhibition-stands sec-1" title={t("exhibition.exhibition_stands.title")} Img={IMG3}  nameServices="exhibition & display stands services"  data={Exhibition}  />

      <Pattern9 />
      <ExhibitionGallery classn="exhibition-stands" title={t("exhibition.display_stands.title")} Img={IMG1}  nameServices="exhibition & display stands services"  data={DisplayStands}  />
      
      <Pattern9 /> 
      <Impact classn="impact" Img={IMG2} data ={BRANDING_SERVICES} title ={t("exhibition.impact.title")} nameServices ="exhibition & display stands services" />


        <Contact number={0} title={t("exhibition.footer.title")}  desc={t("exhibition.footer.desc")} />
        <Footer />
      </div>
  )
}

export default S_Exhibition





