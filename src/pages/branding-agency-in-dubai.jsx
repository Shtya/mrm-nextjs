import Footer from '../components/Footer'
import ImgIntro from "../assets/bg/b9.webp"
import ImgSection from "../assets/Intro&Cover/cover-branding.webp"
import Grid1 from "../assets/S_branding/why.webp" ;


import Animation from '../components/helpers/Animation'
import { Divider} from '../components/patterns/Pattern1'
import IMG1 from "../assets/bg/b1.webp"
import IMG2 from "../assets/bg/b2.webp"
import Contact from '../components/Contact'
import Hero from '../components/helpers/Hero';
import Qutation from '../components/helpers/Qutation';
import Plateforms from '../components/helpers/Plateforms';
import Serach2 from '../components/helpers/Serach2';

import React , {  memo } from "react"
import { ImageGalleryBranding, ImageGalleryBrandingSchema } from '../components/Images2';
import { useTranslation } from 'react-i18next';
import NewSlider from '../components/NewSlider';
import HEAD from '@/components/HEAD';



const S_Branding = () => {
  const {t} = useTranslation() ;
  const BRANDING_SERVICES = t("brand.boxes_1.data" , {returnObjects:true})
  const Approach = t("brand.why.data" , {returnObjects:true})

  
  const schema = {
    "@context": "http://schema.org",
    "@type": "branding",
    "url": "https://mrmadvertisingdubai.com/branding-agency-in-dubai",
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
    <div className="S_Branding landing">
      <Animation />
      <HEAD canonical="branding-agency-in-dubai" schema={schema} title="Unleash Your Brand's Power with the Top Branding Agency in Dubai" desc="Stand out with Unique Logo Design, Backaging & Impactful Social media Designs Contact MRM, The Top Branding Agency in Dubai for All Your Branding Needs" />
      <Hero 
      H1={t("brand.Hero.h1")}
      H2={t("brand.Hero.h2")}
      H3={t("brand.Hero.h3")}
      Img={ImgSection} nameServices="Elegant branding materials set" 
      titleServices="Brand-Identity-Suite " Imgintro={ImgIntro} />

      <Qutation Img={IMG1} 
      title1={t("brand.qoute.h1")}
      desc1={t("brand.qoute.h2")}
      
      />
     
      <Divider classn="divider-left" />
      <Plateforms Img={IMG2} title={t("brand.boxes_1.title")} data={BRANDING_SERVICES} nameServices="branding services" />
      
      <Divider classn="divider" />
       <NewSlider  DATA={ImageGalleryBranding} typeOf="Logo" classHeader="header4" title={t("brand.gallery.title")}   header1={t("brand.gallery.header",{returnObjects:true})} />


      <Divider classn="divider-left" />
      <Serach2 Img={IMG2} Imgsection={Grid1} title={t("brand.why.title")} altImg="Luminous 'M' branding display" titleImg="Branding-Spotlight-Feature" data={Approach} />

      <Contact number={7} title={t("brand.contact.title")} desc={t("brand.contact.desc")} />
      <Footer />
      </div>
  )
}

export default memo(S_Branding)





