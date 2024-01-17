import React, { memo, useState } from 'react'
import Image from 'next/image';

const ExhibitionGallery = memo(({ classn ,Img , nameServices , data , title  }) => {
  const [ImgView , setImgView] = useState()
  return (
    <>
    <div className={classn}>
      <div className="bgCover"  >   <Image loading="eager"  src={Img} alt={nameServices}  />  </div>
      <div className="container"> <h2 className="h1" style={{marginBottom:"30px"}}>{title}</h2></div>
      <div className="container">
        <div className="boxs">
          {data.map((e,index)=> ( <div key={index} data-aos="zoom-in-up"  className="coverImg"> <i onClick={_=> setImgView(e.img)} className="fa-solid fa-compress"></i> <Image loading="eager" src={e.img} alt="slider" /> </div> ))}
        </div>
      </div>
    </div>
      {ImgView && <div className="show-img"> 
        <Image loading="eager" src={ImgView} alt={nameServices}  data-aos="zoom-in-up" /> 
        <i onClick={_=>setImgView("")} className="fa-regular fa-circle-xmark"></i>
      </div>}
    </>
  )
})

export default ExhibitionGallery