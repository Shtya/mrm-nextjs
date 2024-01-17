import { memo } from "react";
import Landing from "../components/Landing";
import Who from "../components/Who";
import Why from "../components/Why";
import Services from "../components/Services";
import NewSlider from "../components/NewSlider";
import Clients2 from "../components/Clients2"
import Contact from "../components/Contact";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

import { Divider } from "../components/patterns/Pattern1";
import {  ImageGalleryHome2 } from '../components/Images2';
import { useTranslation } from 'react-i18next';

import Animation from "../components/helpers/Animation";


import HEAD from "@/components/HEAD";



function Home() {
  const { t, i18n } = useTranslation();

  const sitelinksData = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    "url": "https://mrmadvertisingdubai.com/",
    "name": "MRM",
    "mainEntity": [
      {
        "@type": "Services",
        "@id": "https://mrmadvertisingdubai.com/#services",
        "url": "https://mrmadvertisingdubai.com/#services",
        "name": "Services"
      },
      {
        "@type": "Blog",
        "@id": "https://mrmadvertisingdubai.com/blog",
        "url": "https://mrmadvertisingdubai.com/blog",
        "name": "Blog"
      },
      {
        "@type": "Contact Us",
        "@id": "https://mrmadvertisingdubai.com/contact-us",
        "url": "https://mrmadvertisingdubai.com/contact-us",
        "name": "Contact Us"
      }
    ]
  };


  return (
    <div className="Home" >
      <HEAD schema={sitelinksData}  canonical=""   title="MRM | Best Digital Marketing & Advertising Agency in Dubai" desc="Boost your Brand with MRM Advertising, Top Digital Marketing & Advertising Agency in Dubai.We Offer Premier Digtal marketing, SEO and Web Design Services." />
        <Animation />
        
        <Landing />

        <Divider classn="divider" />
        <Who />


        <Divider classn="divider-left" />
        <Why />


        <Divider classn="divider" />
        <Services />


        <Divider classn="divider-left" />
        <NewSlider  DATA={ImageGalleryHome2} typeOf="Signages" title={t("home.Home_Header.name")}   header1={t("home.Home_Header.header",{returnObjects:true})}  /> 

        
        
        <Divider classn="divider" />
         <Clients2 />

         <Contact /> 


        <Divider classn="divider" />
        <Blog />

        
        <Footer  />
        </div>
  );
}

export default memo(Home);
