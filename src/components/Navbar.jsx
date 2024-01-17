"use client"  ;
import React, { memo, useEffect, useState } from 'react'
import Logo from "../assets/Logo1.webp"
import {useLocation, useRouter } from "next/router";
import Link  from "next/link";

import Animation from './helpers/Animation';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const Navbar1 = memo(() => {
  const {pathname} =useRouter() ;

  // herflang
  const { t, i18n } = useTranslation();
  const handleLang = (e)=>{
    localStorage.setItem("lang" , e.target.value)
    i18n.changeLanguage(e.target.value || localStorage.getItem("lang") )
  }

  // when scroll up
  const [prevScrollPos, setPrevScrollPos] = useState();
  const [visible, setVisible] = useState(true);
  const [en , seten ]= useState("")
  useEffect(() => {
    seten(localStorage.getItem("lang"))
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;
      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };
    window.addEventListener('scroll', handleScroll);
    return () =>  window.removeEventListener('scroll', handleScroll); 
  }, [prevScrollPos]);


  const {push} = useRouter()
  const [top , settop] = useState(false)
  useEffect(_=>{
    const handelScroll =  _=> window.scrollY > 50 ? settop("up-anything") : settop("")
    window.addEventListener("scroll" , handelScroll)
    return _=> window.removeEventListener("scroll" , handelScroll)} ,[])
    useEffect(_=>{


  let navLinks = document.querySelector(" .Navbar1 .nav-links");
  let menuOpenBtn = document.querySelector(" .Navbar1 .navbar .bx-menu");
  let menuCloseBtn = document.querySelector(" .Navbar1 .nav-links .bx-x");
  menuOpenBtn.onclick = function() {
  navLinks.style.left = "0";
  }
  menuCloseBtn.onclick = function() {
  navLinks.style.left = "-100%";
  }
  let htmlcssArrow = document.querySelector(".Navbar1 .htmlcss-arrow");
  htmlcssArrow.onclick = function() {
  navLinks.classList.toggle("show1");
  }
    } ,[])
  return (
  <div className="Navbar1"   >
    <Animation />
    <nav  >
      <div className={`navbar ${top}`} >
        <i className='bx bx-menu'></i>
        <div data-aos="fade-down" data-aos-delay="100" className="logo"><Link href="/"> <Image loading="eager" src={Logo} alt="Navbar"  /></Link></div>
        <div className="nav-links">
          <div className="sidebar-logo">   <span className="logo-name"><Image loading="eager" src={Logo} alt="Navbar"  /></span>   <i className='bx bx-x' ></i> </div>
          
          <ul className="links">
            <li data-aos="fade-down" data-aos-delay="200" onClick={_=> push("/")}><Link className={pathname == "/" ? "active":""} href="/">   {t("Nav.li1")}  </Link></li>
            <li data-aos="fade-down" data-aos-delay="300" ><Link href=""  > {t("Nav.li2")} </Link>
              <i className='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
              <ul className="htmlCss-sub-menu sub-menu">
                <li   onClick={_=> push("/web-development-company-in-dubai")}><Link className={pathname == "/web-development-company-in-dubai" ? "active":""}    href="/web-development-company-in-dubai">    {t("Nav.li3")}  </Link></li>
                <li   onClick={_=> push("/Photography-In-Dubai")}><Link className={pathname == "/Photography-In-Dubai" ? "active":""}    href="/Photography-In-Dubai">    {t("Nav.li4")}  </Link></li>
                <li   onClick={_=> push("/exhibition-and-display-stand-agency-in-dubai")}><Link className={pathname == "/exhibition-and-display-stand-agency-in-dubai" ? "active":""}    href="/exhibition-and-display-stand-agency-in-dubai">   {t("Nav.li5")}  </Link></li>
                <li   onClick={_=> push("/indoor-and-outdoor-signages-agency-in-dubai")}><Link className={pathname == "/indoor-and-outdoor-signages-agency-in-dubai" ? "active":""}    href="/indoor-and-outdoor-signages-agency-in-dubai">    {t("Nav.li6")}  </Link></li>
                <li   onClick={_=> push("/social-media-marketing-agency-in-dubai")}><Link className={pathname == "/social-media-marketing-agency-in-dubai" ? "active":""}    href="/social-media-marketing-agency-in-dubai">   {t("Nav.li7")}  </Link></li>
                <li   onClick={_=> push("/Corporate-gifts-in-dubai")}><Link className={pathname == "/Corporate-gifts-in-dubai" ? "active":""}    href="/Corporate-gifts-in-dubai">   {t("Nav.li8")}  </Link></li>
                <li   onClick={_=> push("/advertising-ppc-agency-in-dubai")}><Link className={pathname == "/advertising-ppc-agency-in-dubai" ? "active":""}    href="/advertising-ppc-agency-in-dubai">   {t("Nav.li9")}  </Link></li>
                <li   onClick={_=> push("/branding-agency-in-dubai")}><Link className={pathname == "/branding-agency-in-dubai" ? "active":""}    href="/branding-agency-in-dubai">   {t("Nav.li10")}  </Link></li>
                <li   onClick={_=> push("/seo-agency-in-dubai")}><Link className={pathname == "/seo-agency-in-dubai" ? "active":""}    href="/seo-agency-in-dubai">   {t("Nav.li11")}  </Link></li>
              </ul>
            </li>
            <li data-aos="fade-down" data-aos-delay="400" onClick={_=> push("/blog")}><Link  className={pathname == "/blog" ? "active":""} href="/blog">   {t("Nav.li12")}  </Link></li>
            <li data-aos="fade-down" data-aos-delay="500" onClick={_=> push("/about-us")}><Link  className={pathname == "/about-us" ? "active":""} href="/about-us">    {t("Nav.li13")}  </Link></li>
            <li data-aos="fade-down" data-aos-delay="600" onClick={_=> push("/contact-us")}><Link  className={pathname == "/contact-us" ? "active":""} href="/contact-us">    {t("Nav.li14")}  </Link></li>
            
            <select data-aos="fade-down" data-aos-delay="700" className='tran' value={ en || "en"}  onChange={e => handleLang(e)}>
              <option value="en">English</option>
              <option value="en">العربية</option>
            </select>

          </ul>
        </div>
      </div>
    </nav>
  </div>
  )
})

export default Navbar1