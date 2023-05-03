import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ReviewContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 40px;
`;

export const StyledReviewSwaper = styled(Swiper)`
  user-select: none;
  padding-bottom: 150px;
  

  //margin-left: 48px;
  //margin-bottom: 38px;

  .swiper-pagination {
    bottom: 0;
  }

  .swiper-pagination-bullet {
    background: #282828;
    width: 8px;
    height: 8px;
    :not(:last-child) {
       margin-right: 10px;
     }
  }

  .swiper-pagination-bullet-active {
    background: #3C4563;
    width: 8px;
    height: 8px;
    :not(:last-child) {
      margin-right: 10px;
    }
  }
`;

export const SlideItem = styled(SwiperSlide)`
  max-width: max-content;
`;
