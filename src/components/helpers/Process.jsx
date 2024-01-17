import React, { memo } from 'react'
import Image from 'next/image';

const Process = ({Img , title , desc , data}) => {
  return (
    <div className="process2">
        <div className="bgCover"  >  <Image loading="eager"  src={Img} alt="signages services"  /> </div>
            <div className="container">
                <div className="h1  clip" data-aos="fade-up">{title}</div>
                <div className="phead " data-aos="fade-up">{desc}</div>
                <div className="timeline">
                  {
                    data.map((e,index)=>(
                      <div className="check-point " data-aos="fade-left" key={index}  >
                        <div className="number " data-aos="fade-left"> 0{index +1} </div>
                        <div className='inner-box'>
                          <span className='hidden-img' ><Image loading="eager" src={e.img} alt="signages services"  /></span>
                          <h2 className="h2 clip  " data-aos="fade-left">{e.title}</h2>
                          <p className="p  " data-aos="fade-left"> {e.desc}</p>
                      </div>
                      </div>
                    ))
                  }
                </div>
            </div>
      </div>
  )
}

export default memo(Process)