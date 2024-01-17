import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import IntroImg from "../assets/footer.webp"
import  Link  from "next/link"
import  {useRouter}  from "next/router"
import { useTranslation } from 'react-i18next'
import Image from 'next/image';

const Error = () => {
const {pathname} = useRouter() ;
const {t} = useTranslation() ;


  return (
    <div className="error">
        <div className="container"> <Navbar /> </div>
        <div className="intro">
          <div className="CoverImg"> <Image loading="eager" width={1200} height={1200} src={IntroImg} alt="error"  /> </div>
          <h1>404</h1>
          <h2 className='clip'> {t("error.h1")} </h2>
          <h3 className='phead'> {t("error.phead")} </h3>
          <ul className='buttons'>
            <Link href="/" > {t("error.header.li1")}</Link>
            <a href={pathname!= "/" ? "/#Services" : "#Services"}  > {t("error.header.li2")}</a>
            <Link href="/contact-us" > {t("error.header.li3")} </Link>
          </ul>
        </div>
        <Footer />
    </div>
    )
  }
export default Error