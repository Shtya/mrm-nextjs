import React from 'react'
import Image from 'next/image';

const Box_6 = ({title , desc , data , Img}) => {
  return (
    <section className='box_6'>
      <div className="bgCover"  >  <Image loading="eager"  src={Img} alt="tiktok-page"  /> </div>
      <div className="container">
        <div className="h1">{title}</div>
        <div className="phead">{desc}</div>
      </div>
        {
          data.map((e,index)=>(
            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="card">
                  <div className="cover item-a">
                    <h1>{e.title}</h1>
                    <div className="card-back">
                      <div className='p'>{e.desc}</div>
                    </div>
                  </div>
                </div>
              </div>
      </div>
          ))
        }
        
    </section>
  )
}

export default Box_6