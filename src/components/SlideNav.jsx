"use client" ;
import React, { memo, useEffect, useRef, useState } from 'react'
import { Social_Media } from '@/pages/_app'
import { useRouter } from "next/router"


const SlideNav = memo(() => {
  const [isFooterVisible, setIsFooterVisible] = useState(50);
  const [height , setheight] = useState(3500)
  const {pathname} = useRouter() ;

  // UP
  const [top , settop] = useState(false)
  useEffect(_=>{
    if(pathname == "/") { setheight(3500) }
    else {setheight(500)}

    const handelScroll =  _=> window.scrollY > height ? settop(true) : settop(false)
    window.addEventListener("scroll" , handelScroll)
    return _=> window.removeEventListener("scroll" , handelScroll)} ,[pathname])

  const handleScroll = ()=> window.scrollTo({top:0 , behavior: "smooth"})




  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById('footer');
      if (footer) {
        const footerPosition = footer.getBoundingClientRect();
        footerPosition.top < window.innerHeight ?  setIsFooterVisible(300) :setIsFooterVisible(30);
      } 
    }
    window.addEventListener('scroll', handleScroll);
    return () =>  window.removeEventListener('scroll', handleScroll); 
  }, []);


  return (
    <div  className='slidenav' style={{display : "flex" , bottom: isFooterVisible }}>
      <a  style={{display:"flex" }} target='_black' href={Social_Media[3]} className='active'> <i  className={`fa-brands fa-whatsapp whatsapp ${top ? "show-btn":""}`}></i> <div className="pop">Need Help? Chat With Us</div> </a>
      <a  href='#' style={{display:`${top ? "flex" : "none"}`}}  > <i onClick={handleScroll} className={`fa-solid fa-chevron-up floatIcon ${top ? "show-btn":""}`}></i> </a>
    </div>
  )
})

export default SlideNav