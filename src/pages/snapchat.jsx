import React from 'react'
import Footer from '../components/Footer'
import CoverSectionImg from "../assets/Socialmedia/bg.webp"
import FacebookIntro from "../assets/Socialmedia/bg-social.webp"
import FacebookCover from "../assets/Socialmedia/snapchat.webp"


import{ Divider } from '../components/patterns/Pattern1'
import IMG1 from "../assets/bg/b1.webp"
import IMG2 from "../assets/bg/b9.webp"
import IMG3 from "../assets/bg/b3.webp"

import Social_Hero from '../components/helpers/Social_Hero'

import BoxBlueColor from '../components/helpers2/BoxBlueColor'
import BoxBorderRight from '../components/helpers2/BoxBorderRight'
import { useTranslation } from 'react-i18next'
import Image from 'next/image';
import HEAD from '@/components/HEAD'




const Snapchat = () => {
  const {t} = useTranslation() ;
  const TYPES =t("snapchat.box1.data" , {returnObjects:true})
  const SERVICES = t("snapchat.box2.data" , {returnObjects:true})
  const SERVICES1 = t("snapchat.box3.data" , {returnObjects:true})
   return (
    <div className="Snapchat shared">
      <HEAD canonical="snapchat" title=" Best Snapchat Marketing Agency In Dubai  "  desc="Looking for Snapchat advertising services? Discover MRM`s Snapchat marketing services that empower your brand, boost engagement, and supercharge your sales" />
      <Social_Hero Cover={FacebookCover} Intro={FacebookIntro} 
      H1={t("snapchat.Hero.title")}
      Img={IMG1} 
      Span1={t("snapchat.qoute.title1")}
      Span2={t("snapchat.qoute.desc1")}
      Span3={t("snapchat.qoute.title2")}
      Span4={t("snapchat.qoute.desc2")}
      />

      <Divider classn="divider" />
      <BoxBlueColor title={t("snapchat.box1.title")} data={TYPES} Img={CoverSectionImg} />


        <Divider classn="divider" />
        <div className="reason2">
          <div className="bgCover"  >  <Image loading="eager"  src={IMG2} alt="Snapchat-page"  /> </div>
        <div className='clip h1'data-aos="fade-up" >{t("snapchat.box2.title")}</div> 
        <article className="gallery">
          {
            SERVICES.map((e,index)=>(<div className="img" key={index} data-aos="zoom-in-right" > 
            <div className="num hidden-text"> {index + 1} </div>
              <div className="h2 ">{e.title}</div>
              <div className="p">{e.desc}</div>
             </div>) )
          }
        </article>
        </div>

        <Divider classn="divider-left" />
        {/* box-style-1 */}
        <BoxBorderRight title={t("snapchat.box3.title")} data={SERVICES1} Img={IMG3} />

      <Footer />
      </div>
  )
}

export default Snapchat





