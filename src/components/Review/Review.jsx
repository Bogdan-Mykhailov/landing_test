import React from 'react';

import {
  ReviewContent,
  SlideItem,
  StyledReviewSwaper,
  Wrapper,
} from './Review.styled';

import { Container, Subtitle, Title } from '../../common';
import { ReviewCard } from '../../common/ReviewCard';
import { reviewData } from '../../data/reviewData';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

export const Review = () => {
  return (
    <Container>
      <Wrapper>
        <Title center="center" title="See Our Review"/>
        <Subtitle subtitle="What Our User Say About Us"/>

        <ReviewContent>
          <StyledReviewSwaper
            slidesPerView={'auto'}
            spaceBetween={56}
            initialSlide={1}
            centeredSlides={true}
            freeMode={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: false,
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination]}
          >
            {reviewData.map((card) => {
              const { id } = card;

              return (
                <SlideItem key={id}>
                  <ReviewCard card={card}/>
                </SlideItem>
              );
            })}
          </StyledReviewSwaper>
        </ReviewContent>
      </Wrapper>
    </Container>
  );
};
