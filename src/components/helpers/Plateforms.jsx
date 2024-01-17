import React, { memo } from 'react'
import  Link  from "next/link"
import { Animate } from '@/pages/_app' ;
import Image from 'next/image';

const Plateforms = memo(({Img , title , data , nameServices ,}) => {

  return (
    <div className="platforms">
         <div className="bgCover"  >  <Image loading="eager"  src={Img} alt={nameServices}  /> </div>
          <div className="container">
              <h3 className='h1'data-aos={Animate}>{title}</h3>
              <div className="boxs" data-aos={Animate}>
                  {
                    data.map((e,index)=> (
                      <Link key={index} href={`${e.path}`} data-aos={Animate}   className={`box box-${index+1}`}>
                        <div className="coverImg"> <Image loading="eager" src={e.img} alt="platform"  /></div>
                        <div className="inner-box">
                            <span className="one"/>
                            <span className="two"/>
                            <h3 className='h2 '> {e.title} </h3>
                            <p className='p '>{e.desc}</p>
                        </div>
                      </Link>
                    ))
                  }
              </div>
          </div>
      </div>
  )
})

export default Plateforms