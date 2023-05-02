import React from 'react';
import { Card } from '../Card';
import { StyledRecommendSwiper, WrapperStyled } from './CardWrapper.styled';
import { Navigation } from 'swiper';
import { Slide } from '../../components/Recommendation/Recomendations.styled';
import 'swiper/css';
import 'swiper/css/navigation';

export const CardWrapper = ({swiperRef, visibleCategory}) => (
  <WrapperStyled>
    <StyledRecommendSwiper
      navigation={{
        prevEl: '.swiper-prev',
        nextEl: '.swiper-next',
        clickable: true,
      }}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      slidesPerView={'auto'}
      spaceBetween={40}
      ref={swiperRef}
      modules={[Navigation]}
    >
      {visibleCategory.map(cardData => {
        const { id } = cardData;

        return (
          <Slide key={id}>
            <Card cardData={cardData}/>
          </Slide>
        );
      })}
    </StyledRecommendSwiper>
  </WrapperStyled>
);
