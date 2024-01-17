import React, { useRef, useState } from 'react'
import Footer from '../components/Footer'
import FacebookIntro from "../assets/Socialmedia/bg-social.webp"
import FacebookCover from "../assets/Socialmedia/linkedin.webp"

import  { Divider} from '../components/patterns/Pattern1'
import IMG1 from "../assets/bg/b1.webp"
import IMG2 from "../assets/bg/b2.webp"
import IMG3 from "../assets/bg/b3.webp"
import Social_Hero from '../components/helpers/Social_Hero'
import BoxBorderRight from '../components/helpers2/BoxBorderRight'
import Image from 'next/image';


import { useTranslation } from 'react-i18next'
import HEAD from '@/components/HEAD'

const Linkedin = () => {
  const {t} = useTranslation() ;
  const TYPES = t("linkedin.box1.data" , {returnObjects:true})
  const SERVICES =  t("linkedin.box2.data" , {returnObjects:true})
  const SERVICES1 =  t("linkedin.box3.data" , {returnObjects:true})

   return (
    <div className="Linkedin shared">
      <HEAD canonical="linkedin" title=" Best LinkedIn Advertising Services in Dubai, UAE "  desc="Looking for B2B  marketing agency in Dubai? With MRM you can Reach decision-makers, establish thought leadership, and generate high-quality B2B leads" />
      <Social_Hero Cover={FacebookCover} Intro={FacebookIntro} 
      H1={t("linkedin.Hero.title")}
      Img={IMG1} 
      Span1={t("linkedin.qoute.title1")}
      Span2={t("linkedin.qoute.desc1")}
      Span3={t("linkedin.qoute.title2")}
      Span4={t("linkedin.qoute.desc2")}
      />
      
        <Divider classn="divider-left" />
        <div className="impact1 impact-custom">
          <div className="bgCover"  >  <Image loading="eager"  src={IMG2} alt="twitter-page"  /> </div>
              <div className="container">
                  <div className="h1 " data-aos="zoom-in"> {t("linkedin.box1.title")}</div>
                  <div className="boxs" >
                    {
                      TYPES.map((e,index)=> (
                        <div className="box" key={index} data-aos="zoom-in"   >
                          <div className="coverImg"><Image loading="eager" src={e.icon} alt="" /></div>
                            <div className="text">
                              <span/> 
                                <div className="h2 clip hidden-text">{e.title} </div>
                                <div className="p hidden-text" >{e.desc} </div>
                            </div>
                        </div>
                      ))
                    }
                  </div>
              </div>
          </div>


        <Divider classn="divider" />
        
        <div className="box-style-7">
          <div className="bgCover"  >  <Image loading="eager"  src={IMG3} alt="Linkedin-page"  /> </div>
          <div className="container">
            <div className="h1"  data-aos="zoom-in">{t("linkedin.box2.title")}  </div>
            <div className="phead" data-aos="zoom-in" data-aos-delay="200" > {t("linkedin.box2.phead")} </div>
            <div className="boxs">
            {
              SERVICES.map((e,index)=> (
                <div className="box" data-aos="zoom-in"  key={index} >
                    <h2 className='number'><Image loading="eager" src={e.icon} alt="" /></h2>
                    <div className="text">
                      <h3 className='h2'>{e.title}</h3>
                      <p className='p'>{e.desc}</p>
                    </div>
                </div>
              ))
            }
            </div>
          </div>
        </div>


        <Divider classn="divider-left" />
        <BoxBorderRight Img={IMG2} data={SERVICES1} title={t("linkedin.box3.title")}  />

      <Footer />
      </div>
  )
}

export default Linkedin





