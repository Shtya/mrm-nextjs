import ImgIntro from "../assets/bg/b9.webp"
import ImgSection from "../assets/Intro&Cover/cover-seo.webp" ;

import OneWhy from '../components/OneWhy';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Animation from '../components/helpers/Animation';
import { Divider} from '../components/patterns/Pattern1';

import IMG1 from "../assets/bg/b1.webp"
import IMG2 from "../assets/bg/b2.webp"
import IMG3 from "../assets/bg/b3.webp"
import Hero from '../components/helpers/Hero';
import Qutation from '../components/helpers/Qutation';
import Plateforms from '../components/helpers/Plateforms';
import Process2 from '../components/helpers/Process2';
import { Animate } from "@/pages/_app";
import { useTranslation } from "react-i18next";
import Image from 'next/image';
import HEAD from "@/components/HEAD";

const S_SEO = () => {
  const {t} = useTranslation() ;

  const OUR_SEO = t("seo.plateform.data" , {returnObjects:true})
  const PROCESS = t("seo.process.data" , {returnObjects:true})
  const WHY_MRM = t("seo.why.data" , {returnObjects:true})

  const schema = {
    "@context": "http://schema.org",
    "@type": "seo",
    "url": "https://mrmadvertisingdubai.com/seo-agency-in-dubai",
    "publisher": {
      "@type": "Organization",
      "name": "MRM Advertising",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mrmadvertisingdubai.com/Logo1.webp"
      }
    }
  }

  return (
    <div className='M_SEO landing'>
      <HEAD canonical="seo-agency-in-dubai" schema={schema} title="Leading SEO Agency in Dubai | Higher Website Rankings Insured" desc="Improve your Website's Visibility, Ranking on Search Engines and Beat Your competitors with MRM One of the Best SEO Agencies in Dubai ,UAE" />
      <Animation />
      <Hero  
        H1={t("seo.Hero.h1")}
        H2={t("seo.Hero.h2")}
        H3={t("seo.Hero.h3")}
        Img={ImgSection} nameServices="Desktop monitor, keyboard, mouse" Imgintro={ImgIntro} />
      
      <Qutation Img={IMG1} 
      title1={t("seo.qoute.h1")}
      desc1={t("seo.qoute.h2")} />

      <Divider classn="divider-left" />
      <Plateforms Img={IMG2} title={t("seo.plateform.title")} data={OUR_SEO} nameServices="search-engine-optomization services" />

      <Divider classn="divider" />
      <Process2 data={PROCESS} Img={IMG3} title={t("seo.process.title")} />
      
    <Divider classn="divider-left" />
    <div className="WHY">
        <div className="bgCover"  >  <Image loading="eager"  src={IMG2} alt="search-engine-optomization services"  /> </div>
      <h2 className="h1" data-aos={Animate}> {t("seo.why.title")}  </h2>
      <div className="container" data-aos={Animate}>
        {
          WHY_MRM.map((e,index)=> (
            <OneWhy altCover={e.altCover} key={index} img={e.img} title={e.title} desc={e.desc} classn={`${e.classn} one-why-${index+1}`} />
          ))
        }
      </div>
    </div>

    <Contact number={8} title={t("seo.contact.title")}  desc={t("seo.contact.desc")} />
    <Footer />
    </div>
  )
}

export default S_SEO