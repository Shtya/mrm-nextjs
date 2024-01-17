import React from 'react'
import Image from 'next/image';

const Impact = ({Img , title , phead , data}) => {
  return (
    <div className="impact2">
            <div className="bgCover"  >  <Image loading="eager"  src={Img} alt="instagram-page"  /> </div>
            <div className="container">
                <div className="h1" data-aos="zoom-in">{title}</div>
                <div className="phead"  data-aos="zoom-in" data-aos-delay="200">{phead}</div>
                <div className="boxs" >
                  {
                    data.map((e,index)=> (
                      <div className="box" key={index} data-aos="zoom-in"   >
                          <div className="text">
                              <div className="number">{index+1}</div>
                              <div className="icon"> <Image loading="eager" src={e.icon} alt="" /> </div>
                              <div className="h2" >{e.title} </div>
                              <div className="p " >{e.desc} </div>
                          </div>
                      </div>
                    ))
                  }
                </div>
            </div>
        </div>
  )
}

export default Impact