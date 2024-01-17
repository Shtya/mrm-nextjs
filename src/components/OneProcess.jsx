import React, { memo } from 'react'
import Image from 'next/image';

const OneProcess = memo(({title , paragraph , img , classn , num}) => {
  return (
    <div className={`one-process ${classn} `} data-aos="fade-left"  >
      <div className="coverImg" data-aos="fade-left" > <Image loading="eager" src={img} alt="process"  /> </div>
      <span data-aos="fade-left"></span>
      <div className="num" data-aos="fade-left" >{num}</div>
      <div data-aos="fade-left" className="inner-box" >
        <h3 className="h2 clip " data-aos="zoom-in-up">{title} </h3>
        <p className="p " data-aos="zoom-in-up">{paragraph}</p>
      </div>
    </div>
  )
})

export default OneProcess