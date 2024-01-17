"use client" ;
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Animation from '../components/helpers/Animation'

import IMG1 from "../assets/bg/b1.webp"
import {useRef, useState} from 'react'
import MapImg from "../assets/about-us/introContact.webp"
import emailjs from '@emailjs/browser';
import  Link  from "next/link"
import { Social_Media } from '@/pages/_app';
import { useTranslation } from 'react-i18next'
import HEAD from '@/components/HEAD';
import Image from 'next/image';

const ContactUs = () => {
  const [value , setvalue] = useState() ;
  const form = useRef();
  const {t} = useTranslation() ;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_pl60iqr', 'template_03nn5rk', form.current, '3BxbLM5srobXbwT-i')
      .then((result) => { console.log(result) }, (error) => { console.log(error) });
      e.target.reset() ;
  };

  let services = t("servicesAction",{returnObjects:true})
    
  return (
    <div className='contact-us'>
      <HEAD canonical="contact-us" title=" Get in Touch with MRM Advertising  Your Marketing Partner in Dubai" desc="Connect with MRM Advertising Agency in Dubai for best digital marketing and advertising services. Specializing in SEO, media buying and creative solutions. " schema={`  "@context": "https://schema.org",  "@type": "AboutPage",  "name": "mrm advertising",  "url": "https://mrmadvertisingdubai.com/contact-us",  "description": "Connect with MRM Advertising Agency in Dubai for best digital marketing and advertising services. Specializing in SEO, media buying and creative solutions.",  "address": {    "@type": "PostalAddress",    "addressRegion": "State",    "postalCode": "0000",    "addressCountry": "dubai"  },  "contactPoint": {    "@type": "ContactPoint",    "telephone": "+971561384496",    "contactType": "customer service",    "areaServed": "US" }`} />
      <Animation />
      <div className="bgCover"  >  <Image loading="eager"  src={IMG1} alt="contact-us"  /> </div>
      <div className="container"> <Navbar /> </div>
      {/* <Contact2  /> */}
      <section className='Contact2' id='Contact2'>
      <div className="container">
          
              <div className="box" data-aos="fade-right" data-aos-delay="200" >
                  <div className="coverMap"> <Image loading="eager" className='mapImg' src={MapImg} alt="contact-map"  /> </div>
                  <div className="text"> <h2 className='h1 blur' data-aos="fade-right" data-aos-delay="300"> {t("contact_us.h1")} </h2> </div>

                  <ul className='contact-list'>
                    <li className="list-item" data-aos="fade-right" data-aos-delay="300"> <Link href="" > <i className="fa-solid fa-phone"></i>         </Link>    <span className='contact-text place p'>+971561384496</span></li>
                    <li className="list-item" data-aos="fade-right" data-aos-delay="400"> <Link href="" >  <i className="fa-solid fa-envelope"></i>     </Link>    <span className='contact-text phone p'>info@mrmadvertisingdubai.com</span> </li>
                    <li className="list-item" data-aos="fade-right" data-aos-delay="500"> <Link href="" >  <i className="fa-solid fa-location-dot"></i> </Link>    <span className='contact-text gmail p'>Business Bay - Dubai</span></li>
                    </ul>
                        <hr />
                    <ul className='social-media-list'>
                      <li > <Link href={`${Social_Media[0]}`}  data-aos="fade-up" data-aos-delay="300" className="Iicon">  <i className="fa-brands fa-facebook-f"></i>     </Link></li>
                      <li > <Link href={`${Social_Media[1]}`}  data-aos="fade-up" data-aos-delay="400" className="Iicon">  <i className="fa-brands fa-instagram"></i> </Link></li>
                      <li > <Link href={`${Social_Media[3]}`}  data-aos="fade-up" data-aos-delay="500" className="Iicon"> <i className= "fa-brands fa-whatsapp"></i>         </Link></li>
                      <li > <Link href={`${Social_Media[2]}`}  data-aos="fade-up" data-aos-delay="600" className="Iicon">  <i className="fa-brands fa-linkedin-in"></i> </Link></li>
                    </ul>
              </div>

              <div className="box1" data-aos="fade-left" data-aos-delay="300">
              <h1 className='h1' data-aos="fade-right" data-aos-delay="300"> {t("contact_us.contact.h1")} </h1>
              <h2 className='h2' data-aos="fade-right" data-aos-delay="300"> {t("contact_us.contact.phead")} </h2>
              <form ref={form} onSubmit={sendEmail}>
                  <input data-aos="fade-left" data-aos-delay="300" name="name" type="text"  placeholder={t("contact_us.contact.name")}  id="" />
                  <input data-aos="fade-left" data-aos-delay="400" name="email" type="Email"  placeholder={t("contact_us.contact.email")}  />
                  <input data-aos="fade-left" data-aos-delay="500" name="phone" type="text"  placeholder={t("contact_us.contact.phone")}  />
                  <select  data-aos="fade-left" data-aos-delay="600" name="services" className='input form-select' aria-label=".form-select-lg examplev" value={value} onChange={e=> setvalue(e.target.value)}>
                    <option value="0">{t("contact_us.contact.select")} </option>
                    {services.map((e,index)=> <option key={index} value={e} >{e}</option> )}
                  </select>
                  <input data-aos="fade-left" data-aos-delay="700" name="message" placeholder={t("contact_us.contact.message")}  id="" type='text'></input>
                   <button data-aos="fade-left" data-aos-delay="800" className='bt'>{t("contact_us.contact.bt")} </button>
              </form>
              </div>
          </div>
    </section>
      <Footer />
    </div>
  )
}

export default ContactUs