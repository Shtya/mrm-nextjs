import React from 'react'
import Footer from '../components/Footer'

import FacebookIntro from "../assets/Socialmedia/bg-social.webp"
import FacebookCover from "../assets/Socialmedia/facebook.webp"
import ImgSection from "../assets/bg/b8.webp"

import  { Divider} from '../components/patterns/Pattern1'
import IMG1 from "../assets/bg/b1.webp"
import IMG2 from "../assets/bg/b2.webp"
import IMG3 from "../assets/bg/b3.webp"
import Social_Hero from '../components/helpers/Social_Hero'
import { useTranslation } from 'react-i18next'
import Image from 'next/image';
import HEAD from '@/components/HEAD'





const Facebook = () => {
  const {t} =useTranslation() ;
  const TYPES =  t("facebook.box1.data" , {returnObjects:true})
  const SERVICES = t("facebook.box2.data" , {returnObjects:true})

   return (
    <div className="Facebook shared">
      <HEAD canonical="facebook" title=" Best Facebook Marketing Agency in Dubai , UAE  "  desc="Looking for Facebook Marketing Services in Dubai? Elevate Your Brand's Visibility and Engagement MRM Delivers High ROI with Efficient Spending on Facebook " />
      <Social_Hero Cover={FacebookCover} Intro={FacebookIntro} 
      H1={t("facebook.Hero.title")}
      Img={IMG1} 
      Span1={t("facebook.qoute.title1")}
      Span2={t("facebook.qoute.desc1")}
      Span3={t("facebook.qoute.title2")}
      Span4={t("facebook.qoute.desc2")}
        />

        <Divider classn="divider" />
        <div className="box-style-6">
          <div className="bgCover"  >  <Image loading="eager"  src={IMG2} alt="Facebook-page"  /> </div>
          <div className="h1 "data-aos="zoom-in-right" >  {t("facebook.box1.title")}  </div>
          <div className="phead"data-aos="zoom-in-right" >  {t("facebook.box1.phead")}  </div>
          <div className="container">
          {TYPES.map((e,index)=> (
            <figure className="snip1218" key={index} data-aos="zoom-in" data-aos-delay={`${index + 1}00`}>
              <figcaption>
                <span></span>
                <h3 className='h2'>{e.title}</h3>
                <div className="p">{e.desc}</div>
              </figcaption>
            </figure>
          ))}
          </div>
        </div>


        <Divider classn="divider" />
        <div className="box-style-4">
          <div className="bgCover"  >  <Image loading="eager"  src={IMG3} alt="Facebook-page"  /> </div>
          <div className="container">
            <div className="h1" data-aos="zoom-in" > {t("facebook.box2.title")} </div>
            <div className="bg"> <Image loading="eager" src={ImgSection} alt="Facebook-page"  /> </div>
            <div className="boxs">
            {
              SERVICES.map((e,index)=> (
                <div className="box" key={index} data-aos="zoom-in" >
                  <div className="coverImg"> <Image loading="eager" src={e.icon} alt={e.title} /> </div>
                    <h2 className='h2'>{e.title} </h2>
                    <p className='p'>{e.desc}</p>
                </div>            
              ))
            }
            </div>
          </div>
        </div>

      <Footer />
      </div>
  )
}

export default Facebook





