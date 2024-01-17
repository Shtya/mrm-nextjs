import Navbar from '../components/Navbar'
import ImgIntro from "../assets/bg/b9.webp"
import Community from "../assets/Intro&Cover/cover-socialMedia.webp" ;
import OnePlatform from '../components/OnePlatform';

import Grid1 from "../assets/landing/Grid1.webp" ;
import Grid2 from "../assets/landing/Grid2.webp" ;
import Grid3 from "../assets/landing/Grid3.webp" ;
import Grid4 from "../assets/landing/Grid4.webp" ;


import OneProcess from '../components/OneProcess';
import Footer from '../components/Footer';
import Animation from '../components/helpers/Animation';
import { Divider} from '../components/patterns/Pattern1';

import IMG1 from "../assets/bg/b1.webp"
import IMG2 from "../assets/bg/b2.webp"
import Contact from '../components/Contact';
import Social_media from '../components/helpers/Social_media';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import HEAD from '@/components/HEAD';

const Landing = () => {
  const {t} = useTranslation() ;

  const SocialMedia =  t("services.Socialmedia.data" , {returnObjects:true})
  const OurSocialMedia =  t("services.OurSocialMedia.data" , {returnObjects:true})
  const Process =  t("services.process.data" , {returnObjects:true})

  const schema = {
    "@context": "http://schema.org",
    "@type": "social-media-marketing",
    "url": "https://mrmadvertisingdubai.com/social-media-marketing-agency-in-dubai",
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
    <div className='landing'>
      <Animation />
      <HEAD canonical="social-media-marketing-agency-in-dubai" schema={schema} title="Social Media Marketing Services in Dubai to Boost Your Brand" desc="Partner with MRM, one of the leading social media marketing agencies in Dubai, to ensure a excellent digital journey for your brand." />
      <div className="container"> <Navbar /> </div>
      <div className="coverIntro" data-aos="zoom-in-left"> <Image loading="eager"  src={ImgIntro} alt="social media marketing services"  /></div>
      
      <div className="home">
        <div className="container">
          <div className="boxImg n-border" data-aos="zoom-in-left" data-aos-delay="400"  >  <Image loading="eager" className='' src={Community} alt="Social media icons floating over a phon"  /> </div>
          <div className="boxs " data-aos="zoom-in-right" data-aos-delay="400"  >
            <h1 className='h1 '> {t("services.Hero.h1")} </h1>
            <h2 className='h2 '> {t("services.Hero.h2")} </h2>
            <div className="inner-boxs"  >

              <ul className="box">
                <li className='li '>  {t("services.Hero.ul.li1")} </li>
                <li className='li '>  {t("services.Hero.ul.li2")} </li>
                <li className='li '>  {t("services.Hero.ul.li3")} </li>
                <li className='li '>  {t("services.Hero.ul.li4")} </li>
              </ul>

              <ul className="box box-2">
                <li className='li '>  {t("services.Hero.ul.li5")} </li>
                <li className='li '>  {t("services.Hero.ul.li6")} </li>
                <li className='li '>  {t("services.Hero.ul.li7")} </li>
                <li className='li '>  {t("services.Hero.ul.li8")} </li>
              </ul>

            </div>
          </div>
        </div>
      </div>

      <Divider classn="divider" />
      <div className="searching search-edite">
        <div className="bgCover"  >  <Image loading="eager"  src={IMG1} alt="social media marketing services"  /> </div>
          <div className="container">
              <div className="coverImg  "> 
                  <Image loading="eager" data-aos="zoom-in-right"  src={Grid1} alt="Golden Instagram and video icons"  /> 
                  <Image loading="eager" data-aos="zoom-in-top"      src={Grid2} alt="Golden TikTok, LinkedIn, and Facebook icons"  /> 
                  <Image loading="eager" data-aos="zoom-in-right"  src={Grid3} alt="Golden Twitter icon on magnifier over black"  /> 
                  <Image loading="eager" data-aos="zoom-in-top"      src={Grid4} alt="Golden Telegram icon"  /> 
              </div>

              <div className="boxs ">
                  <h2 className='h2 ' data-aos="fade-left">  {t("services.qoute.title")}  </h2>
                  <div className="box">
                      <h3 className='h3 ' data-aos="fade-left">  {t("services.qoute.h31")} </h3>
                      <div className='p ' data-aos="fade-left">  {t("services.qoute.p1")} </div>
                  </div>

                  <div className="box">
                      <h3 className='h3 ' data-aos="fade-left"> {t("services.qoute.h32")} </h3>
                      <div className='p ' data-aos="fade-left">  {t("services.qoute.p2")} </div>
                  </div>

              </div>
          </div>
      </div>


      <Divider classn="divider-left" />
      <Social_media Img={IMG2} data={SocialMedia} title= {t("services.Socialmedia.title")}  />

      <Divider classn="divider" />
      <div className="platforms">
        <div className="bgCover"  >  <Image loading="eager"  src={IMG2} alt="social media marketing services"  /> </div>
          <div className="container">
              <h2 className='h1 'data-aos="zoom-in">  {t("services.OurSocialMedia.title")}  </h2>
              <div className="boxs" data-aos="zoom-in">
                  <OnePlatform trueBtn={true} path={OurSocialMedia[1].path} img={OurSocialMedia[1].icon} title={OurSocialMedia[1].title} paragraph={OurSocialMedia[1].desc} />
                  <OnePlatform trueBtn={true} path={OurSocialMedia[2].path} img={OurSocialMedia[2].icon} title={OurSocialMedia[2].title} paragraph={OurSocialMedia[2].desc} />
                  <OnePlatform trueBtn={true} path={OurSocialMedia[3].path} img={OurSocialMedia[3].icon} title={OurSocialMedia[3].title} paragraph={OurSocialMedia[3].desc} />
                  <OnePlatform trueBtn={true} path={OurSocialMedia[4].path} img={OurSocialMedia[4].icon} title={OurSocialMedia[4].title} paragraph={OurSocialMedia[4].desc} />
                  <OnePlatform trueBtn={true} path={OurSocialMedia[5].path} img={OurSocialMedia[5].icon} title={OurSocialMedia[5].title} paragraph={OurSocialMedia[5].desc} />
                  <OnePlatform trueBtn={true} path={OurSocialMedia[0].path} img={OurSocialMedia[0].icon} title={OurSocialMedia[0].title} paragraph={OurSocialMedia[0].desc} />
              </div>
          </div>
      </div>

      <Divider classn="divider-left" />
    <div className="process">
    <div className="bgCover"  >  <Image loading="eager"  src={IMG2} alt="social media marketing services"  /> </div>
        <div className="container1"> <h2 className="h1" data-aos="zoom-in">{t("services.process.title")} </h2></div>
        <div className="container">
            <div className="box box1">
                <OneProcess num="1"  img={Process[0].img} title={Process[0].title} paragraph={Process[0].desc}/>
                <OneProcess num="2"  img={Process[1].img} title={Process[1].title} paragraph={Process[1].desc}/>
                <OneProcess num="3"  img={Process[2].img} title={Process[2].title} paragraph={Process[2].desc}/>
            </div>
            <div className="box box2">
                <OneProcess num="4"  img={Process[3].img} title={Process[3].title} paragraph={Process[3].desc}/>
                <OneProcess num="5"  img={Process[4].img} title={Process[4].title} paragraph={Process[4].desc}/>
            </div>
        </div>
    </div>

      <Contact number={4} />
      <Footer />
    </div>
  )
}

export default Landing