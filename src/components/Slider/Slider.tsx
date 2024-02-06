'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Box from '@mui/material/Box'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FC, useState } from 'react';
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';

interface ISlider {
  images: Array<any>
  imgParams: Record<any,any>
  heightDefault: number
}


const Slider:FC<ISlider> = ({images, imgParams, heightDefault}) => {

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      centeredSlides={true}
      
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}

      modules={[Navigation, Pagination]}
      navigation
      pagination={{
        clickable:true
      }}

      mousewheel={{
        invert: false
      }}
      keyboard={{
        enabled: true
      }}

      key={images[0]}
    >
      {images.map((thisImage) => {

        const name = (thisImage as String).split('/')[3]
        const thisImgParams = imgParams[name]

        let width = thisImgParams.width
        let height = thisImgParams.height
        if(thisImgParams.type === 'vertical') {
          height = heightDefault
          width = heightDefault / thisImgParams.ratio
        } else {
          width = heightDefault * thisImgParams.ratio
          height = heightDefault 
        }

        return (<> 
          <SwiperSlide key={thisImage}>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
              <Image src={thisImage} alt='' width={width} height={height} />
            </Box>
          </SwiperSlide>
        </>)
      })}
    </Swiper>
  );
};

export default Slider
