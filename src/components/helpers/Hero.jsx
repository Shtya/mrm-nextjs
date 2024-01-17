import { memo } from 'react'
import Navbar1 from '../Navbar'
import Image from 'next/image';

const Hero = ({H1 , H2 , H3 , Img , nameServices , Imgintro , altCover , titleServices  }) => {
  return (
    <>
    <div className="container"> <Navbar1 /> </div>
      <div className="coverIntro" data-aos="zoom-in"  > <Image loading="eager" src={Imgintro} alt=""  /></div>
    <div className="home">
          <div className="container">
              <div className="boxImg " data-aos="zoom-in-left" data-aos-delay="400"  >  <Image loading="eager"   src={Img} alt={nameServices} title={titleServices} /> </div>
              <div className="boxs" data-aos="fade-left" data-aos-delay="600" >
                  <h1 className='h1 '>{H1}</h1>
                  <h2 className='h2 '>{H2}</h2>
                  <h3 className='p '>{H3}</h3>
            </div>
        </div>
      </div>

      </>
  )
}

export default Hero