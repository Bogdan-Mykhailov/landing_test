import React from 'react';
import { Card } from '../Card';
import { StyledRecommendSwiper, WrapperStyled } from './CardWrapper.styled';
import { Navigation } from 'swiper';
import { featuredHouse } from '../../data/recommendationData';
import 'swiper/css';
import 'swiper/css/navigation';
import { Slide } from '../../components/Recommendation/Recomendations.styled';

export const CardWrapper = () => (
  <WrapperStyled>
    <StyledRecommendSwiper
      navigation={true}
      slidesPerView={'auto'}
      spaceBetween={40}
      // centeredSlides={true}
      // freeMode={true}
      // loop={true}
      // autoplay={{
      //     delay: 3500,
      //     disableOnInteraction: false,
      //     // pauseOnMouseEnter: true
      // }}
      // pagination={{
      //     clickable: true,
      // }}
      modules={[Navigation]}
    >
      {featuredHouse.map(cardData => {
        return (
          <Slide key={cardData.id}>
            <Card cardData={cardData}/>
          </Slide>
        );
      })}
    </StyledRecommendSwiper>
  </WrapperStyled>
);
