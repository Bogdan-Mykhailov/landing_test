import React from 'react';
import { Card } from '../Card';
import { StyledRecommendSwiper, WrapperStyled } from './CardWrapper.styled';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Slide } from '../../components/Recommendation/Recomendations.styled';

export const CardWrapper = ({visibleCategory}) => (
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
      {visibleCategory.map(cardData => {
        return (
          <Slide key={cardData.id}>
            <Card cardData={cardData}/>
          </Slide>
        );
      })}
    </StyledRecommendSwiper>
  </WrapperStyled>
);
