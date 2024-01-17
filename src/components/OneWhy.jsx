import React, { memo } from 'react'
import { Animate } from '@/pages/_app' ;
import Image from 'next/image';

const OneWhy = ({img , title , desc , classn , alt , altCover}) => {
  return (
    <div className={`one-why ${classn}`} data-aos={Animate}>
      <div className="coverImg" > <Image loading="eager" src={img} alt={altCover}  /> </div>
      <div className="inner-box">
        <div className="p ">{desc}</div>
      </div>
  </div>
  )
}

export default OneWhy