"use client"; // <===== REQUIRED

import React from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Box from '@mui/material/Box'

// Our custom button component
import SliderButtons from "./SliderButtons";

interface Slide {
  id: number;
  title: string;
  tagline: string;
  image: string;
  buttons: ButtonProps[];
}

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

interface DemoSliderProps {
  data: Slide[];
}

const DemoSlider: React.FC<DemoSliderProps> = ({ data }) => {
  return (
    <Box sx={{width: '100%'}}>
      <Box sx={{height: '100vh'}}>
        <ul style={{height: '100%', width: '100%'}}>
          <Swiper
            navigation
            pagination={{ type: "bullets", clickable: true }}
            // autoplay={true}
            // loop={true}
            modules={[Autoplay, Navigation, Pagination]}
            mousewheel={{
              invert: false
            }}
            keyboard={{
              enabled: true,
              onlyInViewport: false
            }}
          >
            {data.map(({ id, image, tagline, title, buttons }) => (
              <SwiperSlide key={id}>
                <Box sx={{height: '100%', width: '100%', position: 'absolute', left: '0px', top: '0px', background: `url(${image}) center center / cover scroll no-repeat`}}>
                </Box>
                <Box sx={{height: '100%', width: '100%', position: 'absolute', left: '0', top: '0', opacity: '0.2', backgroundColor: 'rgb(0 0 0 / 1)'}}>
                </Box>
                <Box sx={{height: '100%', position: 'relative', zIndex: '10', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Box sx={{textAlign: 'center'}}>
                    {tagline && (
                      <p style={{fontWeight: '600', color: 'rgb(255 255 255 / 1)', fontSize: '1.875rem', lineHeight: '2.25rem', margin: '0px'}}>
                        {tagline}
                      </p>
                    )}
                    <p style={{fontSize: '6rem', lineHeight: '1', color: 'rgb(255 255 255 / 1)', fontWeight: '700', margin: '0px'}}>
                      {title}
                    </p>
                    {buttons.length > 0 ? (
                      <p style={{marginTop: '5rem', color: 'rgb(255 255 255 / 1)', paddingTop: '0.5rem', paddingBottom: '0.5rem', paddingLeft: '2.25rem', paddingRight: '2.25rem', backgroundColor: 'rgb(31 41 55 / 1)', borderRadius: '9999px', display: 'inline-block'}}>
                        <SliderButtons buttons={buttons} />
                      </p>
                    ) : null}
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
