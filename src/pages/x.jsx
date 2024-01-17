import Footer from '../components/Footer'
import FacebookIntro from "../assets/Socialmedia/bg-social.webp"
import FacebookCover from "../assets/Socialmedia/x.webp"

import { Divider } from '../components/patterns/Pattern1'
import IMG1 from "../assets/bg/b1.webp"
import IMG3 from "../assets/bg/b3.webp"
import Social_Hero from '../components/helpers/Social_Hero'
import Box_4 from '../components/helpers2/Box_4'
import BoxBorderRight from '../components/helpers2/BoxBorderRight'
import { useTranslation } from 'react-i18next'
import Image from 'next/image';
import HEAD from '@/components/HEAD'

const X = () => {
  const {t} = useTranslation() ;
  const TYPES = t("x.box1.data" , {returnObjects:true})
  const SERVICES = t("x.box2.data" , {returnObjects:true})
  const SERVICES1 = t("x.box3.data" , {returnObjects:true})

  return (
    <div className="x shared">
      <HEAD canonical="x" title=" Best Twitter Marketing Agency in Dubai "  desc="Enhance your brand's online presence,grow your followers, boost engagement,and generate potential leads via MRM's Twitter marketing services. Contact Us Now" />
      <Social_Hero Cover={FacebookCover} Intro={FacebookIntro} 
      H1={t("x.Hero.title")}
      Img={IMG1} 
      Span1={t("x.qoute.title1")}
      Span2={t("x.qoute.desc1")}
      Span3={t("x.qoute.title2")}
      Span4={t("x.qoute.desc2")}
      />
      


        <Divider classn="divider-left" />
        <div className="impact1">
          <div className="bgCover"  >  <Image loading="eager"  src={IMG3} alt="twitter-page"  /> </div>
              <div className="container">
                  <div className="h1 " data-aos="zoom-in"> {t("x.box1.title")} </div>
                  <div className="boxs" >
                    {
                      TYPES.map((e,index)=> (
                        <div className="box" key={index} data-aos="zoom-in-left"   >
                          <div className="coverImg"><Image loading="eager" src={e.icon} alt="" /></div>
                            <div className="text">
                              <span/> 
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
        <Box_4 Img={IMG1} data={SERVICES}  title={t("x.box2.title")} desc={t("x.box2.phead")} />


        <Divider classn="divider-left" />
        <BoxBorderRight Img={IMG3} data={SERVICES1} title={t("x.box3.title")} phead={t("x.box3.phead")} />

      <Footer />
      </div>
  )
}

export default X





