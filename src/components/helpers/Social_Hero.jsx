import React from 'react'
import Navbar1 from '../Navbar'
import Animation from './Animation'
import Image from 'next/image';

const Social_Hero = ({Cover , Intro , H1 , Img , Span1 , Span2 , Span3 , Span4 ,}) => {
  return (
    <>
      <div className="container"> <Navbar1 /> </div>
      <Animation />
      <div className="coverIntro " data-aos="zoom-in-right" > <Image loading="eager" src={Intro} alt="Facebook-page"  /></div>

      <div className="home">
          <div className="container">
              <div className="boxImg" data-aos="fade-left" data-aos-delay="400" >  <Image loading="eager" src={Cover} alt="Facebook-page"  /> </div>
              <div className="boxs"  >
              <p data-aos="zoom-in-right" data-aos-delay="600"  className="h2 hidden-text" > <span>{H1}</span> </p>
            </div>
        </div>
      </div>

      <div className="quotation">
        <div className="bgCover"  >  <Image loading="eager"  src={Img} alt="Facebook-page"  /> </div>
            <div className="container" >
            <div className="box-style" data-aos="fade-up">
                <p  className="h2"  > <span>{Span1}</span></p>
                <p  className="h3 div" > <span> {Span2} </span></p>
            </div>
            <div className="box-style-2" data-aos="fade-up">
                <p  className="h2" > <span> {Span3} </span> </p>
                <p  className="h3" > <span> {Span4} </span> </p>
            </div></div>
        </div>

    </>
  )
}

export default Social_Hero