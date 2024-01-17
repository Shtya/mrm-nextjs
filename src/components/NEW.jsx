import React, { useState } from 'react'
import {ImageGalleryWeb} from "./Images2"
import Image from 'next/image';

const NEW = () => {
  const [data , setdata] = useState(ImageGalleryWeb)
  

  return (
    <div className='NEW'> 
      <div className="container">

        <div className="wrapper">
        <i className="fa-solid fa-angle-left"></i>
        <div className="carousel">{
            data?.map((e , idx) =>( <div className='coverImg'> <Image loading="eager" src={e?.images[0]?.img} alt="" /> <Image loading="eager" src={e?.images[1]?.img} alt="" /> </div> ) )
        } </div>
        <i className="fa-solid fa-angle-right"></i>
      </div>

      </div>
    </div>
  )
}

export default NEW