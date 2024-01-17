import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AnimatePresence  , motion} from 'framer-motion';
import Image from 'next/image';


const Slider_2_Imgs = ({data , settings }) => {

  const len = Math.ceil(data?.length/2)

  return (
    <motion.div className="Slider_2_Imgs" >

        <Slider {...settings} className='container' >
          {Array(len).fill(1).map((e,index)=>(
            <motion.div   initial={{opacity:0}}  animate={{opacity:1}} exit={{ opacity: 0, }} transition={{duration:1}}   className="box" key={index} > 
              <div  className="cover" data-aos="fade-up" data-aso-delay={`${index}00`}> <Image loading="eager"  src={data[index]?.img} /> </div>
              <div className="cover" data-aos="fade-up" data-aso-delay={`${index}00`}> {data[index + len]?.img && <Image loading="eager" src={data[index + len]?.img} />} </div>
            </motion.div>
            ))}
        </Slider>

        </motion.div>
  )
}

export default Slider_2_Imgs