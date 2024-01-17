
import IMG1 from "../assets/bg/b1.webp"
import IMG2 from "../assets/bg/b2.webp"
import ImgSection2 from "../assets/WEBDEVELOPMENT.webp"

import ImgIntro from "../assets/bg/b9.webp"
import ImgSection from "../assets/Intro&Cover/cover-webdesign.webp"

import Animation from '../components/helpers/Animation'
import {Pattern9 } from '../components/patterns/Pattern1'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

import Qutation  from "../components/helpers/Qutation"
import Social_media from "../components/helpers/Social_media"
import { ImageGalleryWeb } from "../components/Images2"
import { useTranslation } from "react-i18next"

import IconImg1 from "../assets/pattern/icon1.png"
import NewSlider from "../components/NewSlider"
import Image from 'next/image';
import HEAD from "@/components/HEAD"


const S_WebDesign = () => {
  const { t } = useTranslation();
  const SocialMedia = t("WebDesign.Socialmedia.data" , {returnObjects:true})
  const WEBDevelopment = t("WebDesign.WEBDevelopment.data" , {returnObjects:true})
  const Approach = t("WebDesign.Approach.data" , {returnObjects:true})


  const schema = {
    "@context": "http://schema.org",
    "@type": "web-design",
    "url": "https://mrmadvertisingdubai.com/web-development-company-in-dubai",
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

<div className="WEB_DESIGN landing" >
      <Animation />
      <HEAD canonical="web-development-company-in-dubai" schema={schema} title="Web Design & Development Company in Dubai, UAE " desc="Capture your Audience with our Exceptional Web Design and Development Services. Partner with MRM, the Best Web Development Company in Dubai, UAE" />
      
      <div className="container"> <Navbar /> </div>

      <div className="coverIntro"> <Image loading="eager" data-aos="zoom-in"  src={ImgIntro} alt="web design services"  /></div>
      <div className="home">
        <div className="container">
          <div  data-aos="zoom-in" data-aos-delay="400" className="boxImg " >  <Image loading="eager"  src={ImgSection} alt="Responsive web design layout is displayed across multiple devices"  /> </div>
          <div className="boxs" data-aos="fade-left" data-aos-delay="600" >
            <h1 className='h1 ' > {t("WebDesign.Hero.h1")} </h1>
            <h2 className='h2 ' > {t("WebDesign.Hero.h2")} </h2>
            <div className="inner-boxs" >

              <ul className="box">
                <li className='li ' > {t("WebDesign.Hero.ul.li1")} </li>
                <li className='li ' > {t("WebDesign.Hero.ul.li2")} </li>
              </ul>

              <ul className="box box-2">
                <li className='li ' > {t("WebDesign.Hero.ul.li3")} </li>
                <li className='li ' > {t("WebDesign.Hero.ul.li4")} </li>
              </ul>

            </div>
          </div>
        </div>
      </div>

      
        <Qutation Img={IMG1} title1={t("WebDesign.qoutation.h1")} desc1={t("WebDesign.qoutation.h2")} />
        
        <Pattern9 />
        <Social_media  data={SocialMedia} Img={IMG1} title={t("WebDesign.Socialmedia.title")} desc={t("WebDesign.Socialmedia.desc")} />

        <Pattern9 />
        <div className="WEBDevelopment">
        <div className="bgCover"> <Image loading="eager"  src={IMG2} alt="web design services"  /> </div>
        <div className="container">
          <h1 className="h1">  {t("WebDesign.WEBDevelopment.title")}  </h1>
          <div className="phead"> {t("WebDesign.Socialmedia.desc")} </div>
          <div className="boxs">
          {
            WEBDevelopment.map((e,index) => (
              <div className="box" key={index}>
                <div className="one"></div> <div className="two"></div>
                <h3 className="h2"> {e.title} </h3>
                <div className="p"> {e.desc} </div>
              </div>
            ))
          }
          </div>
        </div>
        <div className="halfImg"> <Image loading="eager" src={ImgSection2} alt="" /> <div className="blur"></div> </div>
        </div>

        <Pattern9 classn="Abrotch" />
        <div className="our_Approach">
        <div className="bgCover" > <Image loading="eager"  src={IMG1} alt="web design services"  /> </div>
        <div className="container1 cont">
          <div className="h1"> {t("WebDesign.Approach.title")}</div>
          <div className="phead">{t("WebDesign.Approach.desc")} </div>
        </div>

            <div className="container">
                <div className="circle">
                  <div className="images"> 
                    
                  </div>
                    <div className='text'>
                        <div className="container1">
                            <Image loading="eager" src={IconImg1} alt="" />
                            <h2 className="h1 clip"> {t("WebDesign.Approach.title")}  </h2>
                            <div className="p"> {t("WebDesign.Approach.desc")}  </div>
                        </div>
                    </div>
                    {
                    Approach.map((e,index)=>(
                        <span key={index} data-aos="zoom-in"  className={`span-${index+1}`}>
                            <div className="coverImg"> <Image loading="eager" src={e.img} alt="web design services"  /> </div>
                            <div className={`content content-${index+1}`}>
                                <div className="h2 clip"> {e.title} </div>
                                <div className="p"> {e.desc} </div>
                            </div>
                        </span>
                    ))
                    }
                </div>
            </div>
        </div>
      
        <Pattern9 />
        <NewSlider title={t("home.Home_Header.name")}DATA={ImageGalleryWeb} typeOf="Web"  /> 


      
        <Contact number={3} desc={t("WebDesign.footer.title")} title={t("WebDesign.footer.desc")} />

      
        <Footer />
      </div>
  )
}

export default S_WebDesign