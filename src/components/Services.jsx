import { memo } from 'react';
import Link  from "next/link";
import IMG3 from "../assets/bg/b1.webp"
import { useTranslation } from 'react-i18next';
import Image from 'next/image';


const Services = memo(()=> {
  const {t} = useTranslation() ;
  const services = t("home.Home_Services3.box" , {returnObjects:true})

  return (
    <>
    <section className='services search-edite' id='Services'>
    <div className="bgCover"  >  <Image loading="eager" src={IMG3} alt="services"  /> </div>
      <h2 className='h1 clip ' data-aos="zoom-in" >{t("home.Home_Services3.h1")}</h2> 
      
      <div className="container">
      <ul className='ul' data-aos="zoom-in">
        {services.map((e , index) => (
          <div key={index} className="box" data-aos="zoom-in"   >
            <div className="animate" ></div>
            <Link href={`${e.route}`}   >
              <div className='a' ><i className={`${e.icon} `}> <span />  <span /> </i> </div>
              <h3 className='h2 '>{e.title}</h3>
              <div className='p '>{e.desc}</div>
          </Link>
          </div>
        ))}
      </ul>
      </div>
    </section>
    </>
  );
})


export default Services