import React from 'react'
import OneProcess from '../OneProcess'
import Image from 'next/image';

const Process2 = ({data , Img , title ,}) => {
  return (
    <div className="process3">
        <div className="bgCover"  >  <Image loading="eager"  src={Img} alt="search-engine-optomization services"  /> </div>
        <h2 className="h1 " data-aos="fade-up">{title}</h2>
          <div className="container">
              <div className="box box1">
                  <OneProcess num="1" classn={data[0]?.classn} img={data[0]?.img} title={data[0]?.title} paragraph={data[0]?.desc} />
                  <OneProcess num="2" classn={data[1]?.classn} img={data[1]?.img} title={data[1]?.title} paragraph={data[1]?.desc} />
                  <OneProcess num="3" classn={data[2]?.classn} img={data[2]?.img} title={data[2]?.title} paragraph={data[2]?.desc} />
                  <OneProcess num="4" classn={data[3]?.classn} img={data[3]?.img} title={data[3]?.title} paragraph={data[3]?.desc} />
                  <OneProcess num="5" classn={data[4]?.classn} img={data[4]?.img} title={data[4]?.title} paragraph={data[4]?.desc} />
              </div>
              <div className="box box2">
                  <OneProcess num="6" classn={data[5]?.classn} img={data[5]?.img} title={data[5]?.title} paragraph={data[5]?.desc} />
                  <OneProcess num="7" classn={data[6]?.classn} img={data[6]?.img} title={data[6]?.title} paragraph={data[6]?.desc} />
                  <OneProcess num="8" classn={data[7]?.classn} img={data[7]?.img} title={data[7]?.title} paragraph={data[7]?.desc} />
                  <OneProcess num="9" classn={data[8]?.classn} img={data[8]?.img} title={data[8]?.title} paragraph={data[8]?.desc} />
              </div>
          </div>
    </div>
  )
}

export default Process2