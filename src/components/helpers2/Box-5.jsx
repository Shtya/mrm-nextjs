import React from 'react'
import Image from 'next/image';

const Box5 = ({Img , title , desc , data}) => {
  return (
    <div className="box-style-4 ">
    <div className="bgCover"  >  <Image loading="eager"  src={Img} alt="twitter-page"  /> </div>
    <div className="container">
      <div className="h1"  data-aos="zoom-in" >{title}</div>
      <div className="phead"  data-aos="zoom-in" data-aos-delay="200" >{desc}</div>
      <div className="boxs">
      {
        data.map((e,index)=> (
          <div className="box" data-aos="zoom-in"  >
               <h2 className='number'>{index+1 >= 10 ?"":"0"}{index+1}</h2>
              <h3 className='h2'>{e.title}</h3>
              <p className='p'>{e.desc}</p>
          </div>
        ))
      }
      </div>
    </div>
  </div>
  )
}

export default Box5