import React, { memo } from 'react'
import { useTranslation } from 'react-i18next';
import  Link  from "next/link"
import  {useRouter}  from "next/router"
import Image from 'next/image';


const OnePlatform = memo(({title , paragraph , img , classn , path , trueBtn}) => {
  const {push} = useRouter()
  const {t} = useTranslation() ;

  return (
    <Link href={`${path}`}  className={`box ${classn}`}>
        <div className="coverImg"> <Image loading="eager" src={img} alt="platform"  /></div>
        <div className="inner-box">
            <span className="one"/>
            <span className="two"/>
            <h3 className='h2 '> {title} </h3>
            <p className='p '>{paragraph}</p>
            {trueBtn &&<button className='bt' onClick={_=> push(path)}>  {t("services.OurSocialMedia.bt")} </button>}
        </div>
      </Link>
  )
})

export default OnePlatform