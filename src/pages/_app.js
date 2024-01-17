import '@/sass/main.css'
import '@/sass/pattern.css'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import '../components/i18n';
import HEAD from '@/components/HEAD';
import SlideNav from '@/components/SlideNav';
import Head from 'next/head';

import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress'; 
import 'nprogress/nprogress.css'; 
import { useEffect } from 'react';
import Script from 'next/script';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

Router.events.on('routeChangeError', () => {
  NProgress.done();
});


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

export const Social_Media = ["https://www.facebook.com/MRMadvertisingDubai" , "https://www.instagram.com/mrmadvertising/" , "https://www.linkedin.com/company/mrm-advertising-media" , "https://api.whatsapp.com/send?phone=+971561384496&text=Hello%2C%20world!"]
export const Animate = "zoom-in"

export default function App({ Component, pageProps }) {
  const {pathname , push} = useRouter() ;

  // useEffect(_=>{
  //   if(pathname == "/home") return push("/")
  //   if(pathname == "/photography-and-videography-agency-in-dubai") return push("/Photography-In-Dubai")
  //   if(pathname == "/web-design") return push("/web-development-company-in-dubai")
  //   if(pathname == "/seo") return push("/seo-agency-in-dubai")
  //   if(pathname == "/Exhibition-and-display-stand") return push("/exhibition-and-display-stand-agency-in-dubai")
  //   if(pathname == "/gifts") return push("/Corporate-gifts-in-dubai")
  //   if(pathname == "/signages") return push("/indoor-and-outdoor-signages-agency-in-dubai")
  //   if(pathname == "/portfolio") return push("/social-media-marketing-agency-in-dubai")
  // } ,[])

  return <>
  <Head>
    <meta name="robots" content="index,follow,max-image-preview:larg,max-snippet:-1,max-video-preview:-1" />
    <Script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-557ZRNC8');` }} />
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-HWW2EB5XHD" />
    <Script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-HWW2EB5XHD');` }} />
  </Head>

  <HEAD title="MRM | Best Digital Marketing & Advertising Agency in Dubai" desc="Boost your Brand with MRM Advertising, Top Digital Marketing & Advertising Agency in Dubai.We Offer Premier Digtal marketing, SEO and Web Design Services." schema={sitelinksData} canonical="" />
  <div className={` App`}>
    <SlideNav whats={false} />
    <Component {...pageProps} />
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-557ZRNC8" height="0" width="0" style={{display:"none" , visibility:"hidden"}}></iframe></noscript>
  </div>
  </>
}

