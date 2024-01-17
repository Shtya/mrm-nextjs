import Footer from '../components/Footer'
import FacebookIntro from "../assets/Socialmedia/bg-social.webp"
import FacebookCover from "../assets/Socialmedia/instagram.webp"

import { Divider} from '../components/patterns/Pattern1'

import IMG1 from "../assets/bg/b1.webp"
import IMG2 from "../assets/bg/bg11.webp"
import IMG3 from "../assets/bg/b3.webp"
import Social_Hero from '../components/helpers/Social_Hero'
import BoxBorderRight from '../components/helpers2/BoxBorderRight'


import { useTranslation } from 'react-i18next'
import Impact from '../components/helpers2/Impact'
import HEAD from '@/components/HEAD'



const Instagram = () => {
  const {t} = useTranslation() ;
  const TYPES = t("insta.box1.data" , {returnObjects:true})
  const SERVICES = t("insta.box2.data" , {returnObjects:true})

   return (
    <div className="Instagram shared">
      <HEAD canonical="instagram" title=" TOP Instagram Marketing Agency in Dubai , UAE"  desc="Boost your brand with our Instagram marketing services in Dubai. Drive targeted engagement and visibility, resulting in high ROI for your business" />
      <Social_Hero Cover={FacebookCover} Intro={FacebookIntro} 
      H1={t("insta.Hero.title")}
      Img={IMG1} 
      Span1={t("insta.qoute.title1")}
      Span2={t("insta.qoute.desc1")}
      Span3={t("insta.qoute.title2")}
      Span4={t("insta.qoute.desc2")}
      />

      <Divider classn="divider" />
      <Impact data={TYPES} Img={IMG2} title={t("insta.box1.title")} phead={t("insta.box1.phead")} />


      <Divider classn="divider-left" />
      <BoxBorderRight title={t("insta.box2.title")} data={SERVICES} Img={IMG3} />

      <Footer />
      </div>
  )
}

export default Instagram





