"use client" ;
import React, { useEffect, useState } from 'react'
import Logo from "../assets/Logo1.webp"
import  Link  from "next/link"
import Image from 'next/image';

const Alt_Navbar = () => {

  const [top , settop] = useState(false)
  useEffect(_=>{
    const handelScroll =  _=> window.scrollY > 50 ? settop({background:"#00000087" ,backdropFilter: "blur(3px)" }) : settop("")
    window.addEventListener("scroll" , handelScroll)
    return _=> window.removeEventListener("scroll" , handelScroll)} ,[ ])

    
  useEffect(_=>{
    let navbar = document.querySelector(".Navbar1 .navbar");
    let searchBox = document.querySelector(".Navbar1 .search-box .bx-search");



let navLinks = document.querySelector(" .Navbar1 .nav-links");
let menuOpenBtn = document.querySelector(" .Navbar1 .navbar .bx-menu");
let menuCloseBtn = document.querySelector(" .Navbar1 .nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}

  } ,[])


  return (
  <div className="Navbar1" >
    <nav>
      <div className="navbar" style={{background:top}}>
        <i className='bx bx-menu'></i>
        <div className="logo"><Link href="/"> <Image loading="eager" src={Logo} alt="Navbar"  /></Link></div>
        <div className="nav-links">
          <div className="sidebar-logo">   <span className="logo-name"><Image loading="eager" src={Logo} alt="Navbar"  /></span>   <i className='bx bx-x' ></i> </div>
          
          <ul className="links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/dashboard/blogs" >Blogs</Link></li>
            <li><Link href="/dashboard/create">Create</Link></li>
            <li><Link href="/dashboard/img">Add Image</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default Alt_Navbar