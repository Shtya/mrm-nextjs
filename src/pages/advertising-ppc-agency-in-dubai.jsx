
import ImgIntro from "../assets/bg/b9.webp"
import ImgSection from "../assets/Intro&Cover/cover-social.webp"

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Animation from '../components/helpers/Animation'
import  { Divider } from '../components/patterns/Pattern1'
import IMG1 from "../assets/bg/b1.webp"
import IMG2 from "../assets/bg/b2.webp"
import IMG3 from "../assets/bg/b3.webp"
import Contact from '../components/Contact'
import Qutation from "../components/helpers/Qutation"
import Social_media from "../components/helpers/Social_media"
import ImpactComponent from "../components/helpers/Impact"
import Process from "../components/helpers/Process"
import { useTranslation } from "react-i18next"
import Image from 'next/image';
import HEAD from "@/components/HEAD"


const S_Media = () => {
  const {t} = useTranslation() ;

  const Paid = t("media.Socialmedia.data" , {returnObjects:true})
  const Impact = t("media.impact.data" , {returnObjects:true})
  const process = t("media.process.data" , {returnObjects:true})

  const schema = {
    "@context": "http://schema.org",
    "@type": "media-buying",
    "url": "https://mrmadvertisingdubai.com/advertising-ppc-agency-in-dubai",
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
  <div className="S_media landing">
    <HEAD canonical="advertising-ppc-agency-in-dubai" schema={schema} title="Leading Social Media Advertising & PPC Agency in Dubai , UAE" desc="Transform your brand's online visibility with MRM the Best Advertising Agency in Dubai. Our Expert Strategies Maximize your Return on Investment" />
    <Animation />
      <div className="container"> <Navbar /> </div>
      <div className="coverIntro " data-aos="zoom-in-left" > <Image loading="eager" src={ImgIntro} alt="media buying services"  /></div>

      <div className="home">
        <div className="container">
            <div className="boxImg hidden-img " data-aos="zoom-in-left" data-aos-delay="400"  >  <Image loading="eager" src={ImgSection} alt="A woman shops in-store with a digital shopping app"  /> </div>
            <div className="boxs" >
                <h1 className='h1 ' data-aos="zoom-in-right" data-aos-delay="600" >  {t("media.Hero.h1")} </h1>
                <h2 className='h2 ' data-aos="zoom-in-right" data-aos-delay="600" >  {t("media.Hero.h2")} </h2>
                <div className="inner-boxs"  data-aos="zoom-in-left" data-aos-delay="600">
              <ul className="box" >
                <li className='li ' >  {t("media.Hero.ul.li1")} </li>
                <li className='li ' >  {t("media.Hero.ul.li2")} </li>
                <li className='li ' >  {t("media.Hero.ul.li3")} </li>
                <li className='li ' >  {t("media.Hero.ul.li4")} </li>
              </ul>

              <ul className="box box-2">
                <li className='li ' >  {t("media.Hero.ul.li5")} </li>
                <li className='li ' >  {t("media.Hero.ul.li6")} </li>
                <li className='li ' >  {t("media.Hero.ul.li7")} </li>
              </ul>
            </div>
          </div>
      </div>
      </div>
      
      <Qutation Img={IMG1} 
      title1={t("media.qoute.h1")}
      desc1={t("media.qoute.h2")}
      />
      
      <Divider classn="divider-left" />
      <Social_media Img ={IMG2} title={t("media.Socialmedia.title")} desc ="" data={Paid} />

      <Divider classn="divider" />
      <ImpactComponent classn="impact" Img={IMG3}   title={t("media.impact.title")} data={Impact} desc={t("media.impact.desc")} nameServices="media buying services"  />
        
      <Divider classn="divider-left" />
      <Process Img={IMG2} title={t("media.process.title")} desc="" data={process}/>
      
      <Contact number={6} title={t("media.contact.title")} desc={t("media.contact.desc")} />
      <Footer />
    </div>
  )
}

export default S_Media