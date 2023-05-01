import React from 'react';
import {
  NavigationWrapper,
  RecommendationCategories,
  RecommendationWrapper,
} from './Recomendations.styled';
import { Title } from '../SectionTitle';
import { Subtitle } from '../SectionSubtitle';
import house from '../../assets/icons/house.svg';
import villa from '../../assets/icons/villa.svg';
import apartments from '../../assets/icons/apartment.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import { CardWrapper, CategoryItem, Container } from '../../common';

export const Recommendation = () => {
  return (
    <Container>
      <RecommendationWrapper>
        <Title title="Our Recommendation"/>
        <NavigationWrapper>
          <Subtitle subtitle="Featured House"/>
          <RecommendationCategories>
            <CategoryItem title="House" icon={house}/>
            <CategoryItem title="Villa" icon={villa}/>
            <CategoryItem title="Apartment" icon={apartments}/>
          </RecommendationCategories>
          {/* <ButtonWrapper> */}
          {/*   <RecommendationButton icon={arrowLeft}></RecommendationButton> */}
          {/*   <RecommendationButton icon={arrowRight}></RecommendationButton> */}
          {/* </ButtonWrapper> */}
        </NavigationWrapper>
        <CardWrapper/>
      </RecommendationWrapper>
    </Container>
  );
};
