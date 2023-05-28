import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import { partners } from '../../data/partnersData';

export const SwiperT = () =>  {
  const [thumbsSwiper, setThumbsSwiper] = useState();

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {partners.map(({icon, title}) => <SwiperSlide key={title}>
          <img src={icon} alt="com/demos/images" />
        </SwiperSlide>)}

      </Swiper>
      <Swiper
        // onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {partners.map(({icon, title}) => <SwiperSlide key={title}>
          <img src={icon} alt="com/demos/images" />
        </SwiperSlide>)}
      </Swiper>
    </>
  );
}
