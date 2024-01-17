import React from 'react'
import Image from 'next/image';

const BoxBlueColor = ({Img , title , data}) => {
  return (
    <div className="box-style-3">
    <div className="bg"> <Image loading="eager" src={Img} alt="Snapchat-page"  /></div>
    <div className="container">
    <div className="h1 clip" data-aos="zoom-in" > {title}</div>
    <div className="boxs">
    {
      data.map((e,index)=> (
        <div className="box" key={index}  data-aos="zoom-in" >
          <div className='main'>
            <Image loading="eager" className='tokenImage' src={e.icon} alt="NFT" />
            <h2 className='h2'>{e.title} </h2>
            <p  className='p'>{e.desc}</p>
          </div>
        </div>
       ))
    }
    </div>
  </div>
</div>
  )
}

export default BoxBlueColor