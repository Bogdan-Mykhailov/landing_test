import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import { devices } from '../../common-styles/MediaQueries';

export const RecommendationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  @media ${devices.tab} {
    padding: 0 40px;
  }
  
  @media ${devices.desk} {
    padding: 0 0 0 160px;
  }
`;

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px 20px;
  margin-bottom: 10px;

  @media ${devices.tab} {
    gap: 10px 40px;
    margin-bottom: 20px;
    align-items: start;
  }

  @media ${devices.desk} {
    gap: 30px;
    flex-direction: row;
    margin-bottom: 40px;
    align-items: end;
  }
  
  @media (min-width: 1200px) {
    gap: 140px;
  }
`;

export const RecommendationCategories = styled.menu`
  display: flex;
  flex-direction: column;
  width: max-content;
  gap: 5px 32px;

  @media ${devices.tab} {
    margin: 0;
    gap: 0 32px;
    flex-direction: row;
  }
`;

export const Slide = styled(SwiperSlide)`
  max-width: max-content;
  gap: 20px;
`;
