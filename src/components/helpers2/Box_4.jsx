import React from 'react'
import Image from 'next/image';

const Box_4 = ({Img , data , title , desc}) => {
  return (
    <div className="box-style-5">
    <div className="bgCover"  >  <Image loading="eager"  src={Img} alt="twitter-page"  /> </div>
    <div className="h1"  data-aos="zoom-in" >{title}</div>
      <div className="phead"  data-aos="zoom-in" data-aos-delay="200" >{desc}</div>
    <div className="container">
      {data.map((e,index)=> (
      <div className='box' key={index} data-aos="zoom-in"  >
          <div className="cover"> <Image loading="eager" src={e.icon}  alt="twitter-page"  /> </div>
          <div className="text">
            <h3 className="h2" >{e.title}</h3>
            <p className="p" >{e.desc}</p>
          </div>
      </div>
      ))}
    </div>
  </div>
  )
}

export default Box_4