"use client" ;
import { useState  ,useRef, memo} from 'react'
import Animation from './helpers/Animation';
import FormImg from "../assets/400x500 help you-01.webp"
import IMG1 from "../assets/bg/b1.webp"
import emailjs from '@emailjs/browser';
import { Pattern9 } from './patterns/Pattern1';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const Contact = memo(({title , desc , onHere , number}) => {
  const form = useRef();
  const {t} = useTranslation() ;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_pl60iqr', 'template_03nn5rk', form.current, '3BxbLM5srobXbwT-i')
      .then((result) => {
          console.log(result);
      }, (error) => {
          console.log(error);
      });
      e.target.reset() ;
  };
  let services = t("servicesAction" , {returnObjects:true})
  const [values , setvalues] = useState(services[number])

  return (
    <>
      <Pattern9 />
      <Animation />
    <section className='Contact' id='Contact'>
      <div className="bgCover"  >  <Image loading="eager"   src={IMG1} alt="contact"  /> </div>      
      <div className="container">
      <div className="box box-img "   > <Image loading="eager"   data-aos="zoom-in" src={FormImg} alt="Smiling man with laptop on geometric patterned background with text 'We're Here to Help You”"  /> </div>
        <div   className="box" data-aos="zoom-in"  >
          <div data-aos="zoom-in"  className='h1 '>{title || t("home.contact.h1")}</div> 
          <p data-aos="zoom-in"  className='h2'>{desc ? desc : t("home.contact.phead")} </p>

          <form ref={form} onSubmit={sendEmail}>
              <input data-aos="zoom-in"   required type="text" name="name" placeholder={t("home.contact.name")} id="" />
              <input data-aos="zoom-in"   required type="Email" name="email" placeholder={t("home.contact.email")} id="" />
              <input data-aos="zoom-in"   required type="text" name="phone" placeholder={t("home.contact.phone")} id="" />
              <select data-aos="zoom-in"   name='services' className='input form-select' aria-label=".form-select-lg examplev" value={values} >
                <option value="0">{t("home.contact.select")}</option>
                {services.map((e,index)=> <option key={index} value={e} >{e}</option> )}
              </select>
            <textarea data-aos="zoom-in"   name="message" placeholder={t("home.contact.message")} id="" cols="30" rows="10"></textarea>

            <button data-aos="zoom-in"   className='bt'>{t("home.contact.bt")}</button>
          </form>
        </div>

      </div>
    </section>
    </>
  )
})

export default Contact