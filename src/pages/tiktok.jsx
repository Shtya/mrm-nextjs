import Footer from '../components/Footer'
import FacebookIntro from "../assets/Socialmedia/bg-social.webp"
import FacebookCover from "../assets/Socialmedia/tiktok.webp"
import { Divider} from '../components/patterns/Pattern1'


import IMG1 from "../assets/bg/b1.webp"
import IMG2 from "../assets/bg/b2.webp"
import IMG3 from "../assets/bg/bg11.webp"
import Social_Hero from '../components/helpers/Social_Hero'
import { useTranslation } from 'react-i18next'
import Image from 'next/image';
import HEAD from '@/components/HEAD'



const Tiktok = () => {
  const {t} = useTranslation() ;
  const TYPES = t("tiktok.box1.data" , {returnObjects:true} )
  const SERVICES = t("tiktok.box2.data" , {returnObjects:true} )

   return (
    <div className="Tiktok shared">
      <HEAD canonical="tiktok" title=" Top TikTok Marketing Agency in Dubai   "  desc="Boost your brand's visibility and sales on TikTok with MRM's advertising services. Maximize your reach and engage your audience effectively. Contact Us Now" />
      <Social_Hero Cover={FacebookCover} Intro={FacebookIntro} 
      H1={t("tiktok.Hero.title")}
      Img={IMG1} 
      Span1={t("tiktok.qoute.title1")}
      Span2={t("tiktok.qoute.desc1")}
      Span3={t("tiktok.qoute.title2")}
      Span4={t("tiktok.qoute.desc2")}
      />

      <Divider classn="divider-left" />
      <div className="impact4">
        <div className="bgCover"  >  <Image loading="eager"  src={IMG3} alt="tiktok-page"  /> </div>
            <div className="container">
                <div className="h1 "  data-aos="zoom-in" >   {t("tiktok.box1.title")} </div>
                <div className="phead"   data-aos="zoom-in" data-aos-delay="200"> {t("tiktok.box1.phead")} </div>
                <div className="boxs" >
                  {
                    TYPES.map((e,index)=> (
                      <div className="box" key={index}  data-aos="zoom-in"  >
                        <div className="icon"> <Image loading="eager" src={e.icon} alt="" /> </div>
                          <div className="text">
                              <div className="h2 clip hidden-text" >{e.title} </div>
                              <div className="p hidden-text" >{e.desc} </div>
                          </div>
                      </div>
                    ))
                  }
                </div>
            </div>
        </div>



        <Divider classn="divider" />
        <div className="box-style-8">
          <div className="bgCover"  >  <Image loading="eager"  src={IMG2} alt="tiktok-page"  /> </div>
          <div className="container">
            <div className="h1"  data-aos="zoom-in"  style={{marginBottom:""}}> {t("tiktok.box2.title")}</div>
            <div className="phead"  data-aos="zoom-in" data-aos-delay="200"> {t("tiktok.box2.phead")}</div>
            <div className="boxs">
            {
              SERVICES.map((e,index)=> (
                <div className="box"  data-aos="zoom-in" >
                    <div className='coverImg'> <Image loading="eager" src={e.icon} alt="" /> </div>
                    <span/>
                    <h3 className='h2'>{e.title}  </h3>
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

export default Tiktok





