import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

export const RecommendationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 120px;
  margin-left: 40px;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  gap: 140px;
  margin-bottom: 40px;
  align-items: end;
`;

export const RecommendationCategories = styled.menu`
  display: flex;
  gap: 32px;
`;

export const Slide = styled(SwiperSlide)`
  max-width: max-content;
`;
