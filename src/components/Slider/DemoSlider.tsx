"use client"; // <===== REQUIRED

import type { CSSProperties } from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Box from '@mui/material/Box'

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Our custom button component
import Image from "next/image";

interface Slide {
  id: number;
  alt: string;
  image: string;
}

interface DemoSliderProps {
  data: Slide[];
  imgPriority?: boolean;
}

const DemoSlider: React.FC<DemoSliderProps> = ({ data, imgPriority = false }) => {
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.down('tablet'));
  const styles = {
    image: tablet ? {
      width: '100%', 
      height: '100%', 
      objectFit: 'contain',
    } as CSSProperties : {
      width: 'auto', 
      height: '100%', 
      objectFit: 'contain'
    } as CSSProperties
  
  }
  return (
    <Box sx={{width: '100%'}}>
      <Box sx={{height: '100vh'}}>
        <ul style={{height: '100%', width: '100%', paddingLeft: 0}}>
          <Swiper
            navigation
            // pagination={{ type: "bullets", clickable: true }}
            // autoplay={true}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
            mousewheel={{
              invert: false
            }}
            keyboard={{
              enabled: true,
              onlyInViewport: false
            }}
          >
            {data.map(({ id, image, alt }) => (
              <SwiperSlide key={id}>
                {/* <Box sx={{height: '100%', width: '100%', position: 'absolute', left: '0px', top: '0px', background: `url(${image}) center center / contain scroll no-repeat`}}>
                </Box> */}
                {/* <Box sx={{height: '100%', width: '100%', position: 'absolute', left: '0', top: '0', opacity: '0', backgroundColor: 'rgb(0 0 0 / 1)'}}>
                </Box> */}
                <Box sx={{height: '100%', position: 'relative', zIndex: '10', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Box sx={{textAlign: 'center', height: '100vh', maxHeight: tablet ? "100vw" : "500px"}}>
                    <Image src={image} alt={alt}
                      width={0}
                      height={0}
                      sizes={tablet ? "100vw" : "100vh"}
                      style={styles.image}
                      priority={imgPriority}
                    />
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </Box>
    </Box>

  );
};

export default DemoSlider;
