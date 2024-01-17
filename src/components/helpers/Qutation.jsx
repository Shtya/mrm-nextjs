import { memo } from 'react'
import { Pattern9 } from '../patterns/Pattern1'
import { Animate } from '@/pages/_app' ;
import Image from 'next/image';

const Qutation = memo(({Img , title1 , title2 , desc1 , desc2}) => {
  return (
    <>
    <Pattern9 />
    <div className="quotation">
      <div className="bgCover"> <Image loading="eager"  src={Img} alt="web design services"  /> </div>
            <div className="container" >
            <h2 className='h2 'data-aos={Animate} >{title1}</h2>
            <div className='h3 ' data-aos={Animate} data-aos-delay="200">{desc1}</div>
            </div>
        </div>
    </>
  )
})

export default Qutation