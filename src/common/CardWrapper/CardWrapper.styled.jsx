import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const WrapperStyled = styled.div`
  display: flex;
  gap: 40px;
  overflow: hidden;
`;

export const StyledRecommendSwiper = styled(Swiper)`
  user-select: none;
  //padding-top: 120px;
  //margin-top: -122px;

  //.swiper-pagination {
  //  bottom: 0;
  //}

  .swiper-pagination-bullet {
    background: #282828;
    width: 8px;
    height: 8px;
  }

  .swiper-pagination-bullet-active {
    background: #3C4563;
    width: 8px;
    height: 8px;
  }

  //.swiper-button-prev {
  //  left: 1020px;
  //}

  //.swiper-button-next {
  //  left: 1100px;
  //}

  .swiper-button-next, .swiper-button-prev{
    width: 60px;
    height: 52px;
    background: #10B981;
    border-radius: 32px;
    //top: 50px;
     
    :after{
      font-size: 16px;
      font-weight: 900;
      color: white;
      fill: #FFFFFF
    }
  }

  .swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled {
    width: 60px;
    height: 52px;
    background-color: #E0E3EB;
    border-radius: 32px;
    opacity: 1;

    :after{
      font-size: 16px;
      font-weight: 900;
      color: #3C4563;
    }
  }
`;

// export const StyledReviewSwaper = styled(Swiper)`
//   user-select: none;
//   padding-bottom: 45px;
//
//   //margin-left: 48px;
//   //margin-bottom: 38px;
//
//   .swiper-pagination {
//     bottom: -3px;
//
//   }
//
//   .swiper-pagination-bullet {
//     background: #282828;
//     width: 8px;
//     height: 8px;
//   }
//
//   .swiper-pagination-bullet-active {
//     background: #3C4563;
//     width: 8px;
//     height: 8px;
//   }
// `;
