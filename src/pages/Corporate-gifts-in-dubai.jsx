import Footer from '../components/Footer'
import ImgIntro from "../assets/bg/b9.webp"
import ImgSection from "../assets/Intro&Cover/cover-gifts.webp"

import Animation from '../components/helpers/Animation'
import { Divider} from '../components/patterns/Pattern1'

import IMG1 from "../assets/bg/b1.webp"
import IMG2 from "../assets/bg/b2.webp"
import IMG3 from "../assets/bg/b3.webp"
import Contact from '../components/Contact'
import Hero from '../components/helpers/Hero'
import Qutation from '../components/helpers/Qutation'
import Impact from '../components/helpers/Impact'
import React , { memo } from "react"
import { ImageGalleryGifts } from '../components/Images2';
import { useTranslation } from 'react-i18next';
import NewSlider from '../components/NewSlider'
import Image from 'next/image';
import HEAD from '@/components/HEAD'


const S_Gifts = memo(() => {
  const {t} = useTranslation() ;

  const Approach =  t("gifts.company_gifts.data" , {returnObjects:true})
  const BRANDING_SERVICES =  t("gifts.impact.data" , {returnObjects:true})
  
  const schema = {
    "@context": "http://schema.org",
    "@type": "gifts",
    "url": "https://mrmadvertisingdubai.com/Corporate-gifts-in-dubai",
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
    <div className="S_Gifts landing">
      <HEAD canonical="Corporate-gifts-in-dubai" schema={schema} title="Best Corporate Gifts Designing Services in Dubai" desc="Looking for Impressive Corporate Gifts, Gift Items, and Trophies? Our Curated Selection is Customized for any Occasion and Denotes Exceptional Quality" />
      <Animation />

      <Hero 
        H1={t("gifts.Hero.h1")}
        H2={t("gifts.Hero.h2")}
        H3={t("gifts.Hero.h3")}
        Img={ImgSection} 
        nameServices="gifts services" 
        Imgintro={ImgIntro} />

      <Qutation Img={IMG1} 
      title1={t("gifts.qoute.h1")}
      desc1={t("gifts.qoute.h2")}
      />
        
      <Divider classn="divider-left" />
      <div className="boxs-tails">
          <div className="bgCover"  >  <Image loading="eager"  src={IMG2} alt="gifts services"  /> </div>
          <h2 className="h1" data-aos="zoom-in" >  {t("gifts.company_gifts.title")} </h2> 
            <div className="container" data-aos="zoom-in">
                  {Approach.map((e,index)=>(
                    <div className='box' key={index} data-aos="zoom-in" >
                      <div className="coverImg " > <Image loading="eager" src={e.img} alt="gifts services"  /> </div>
                      <h3 className="h2  " >{e.title}</h3>
                      <div className=" p " >{e.desc}</div>
                    </div>
                  ))}
            </div>
      </div>

      <Divider classn="divider" />
      <NewSlider  DATA={ImageGalleryGifts} typeOf="trophies"  title={t("gifts.gallery.title")}   header1={t("gifts.gallery.header" , {returnObjects:true})} />


      <Divider classn="divider-left" />
      <Impact classn="impact" Img={IMG3}  data={BRANDING_SERVICES}  title=  {t("gifts.impact.title")}  nameServices="gifts services"  />

      <Contact number={5} title=  {t("gifts.contact.title")} desc=  {t("gifts.contact.desc")} />
      <Footer />
      </div>
  )
})

export default S_Gifts





