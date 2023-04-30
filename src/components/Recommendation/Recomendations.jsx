import React from 'react';
import {
  NavigationWrapper,
  RecommendationCategories,
  RecommendationWrapper,
} from './Recomendations.styled';
import { Title } from '../SectionTitle';
import { Container } from '../../common/Container';
import { Subtitle } from '../SectionSubtitle';
import { CategoryItem } from '../../common/CategoryItem';
import house from '../../assets/icons/house.svg'
import villa from '../../assets/icons/villa.svg'
import apartments from '../../assets/icons/apartment.svg'
import arrowLeft from '../../assets/icons/arrow_left.svg'
import arrowRight from '../../assets/icons/arrow_right.svg'
import {
  ButtonWrapper, RecommendationButton,
} from '../../common/CategoryItem/CategoryItem.styled';
import { CardWrapper } from '../../common/CardWrapper';

export const Recommendation = () => {
  return (
    <Container>
      <RecommendationWrapper>
        <Title title='Our Recommendation'/>
        <NavigationWrapper>
          <Subtitle subtitle='Featured House'/>
          <RecommendationCategories>
            <CategoryItem title='House' icon={house}/>
            <CategoryItem title='Villa' icon={villa}/>
            <CategoryItem title='Apartment' icon={apartments}/>
          </RecommendationCategories>
          <ButtonWrapper>
            <RecommendationButton icon={arrowLeft}></RecommendationButton>
            <RecommendationButton icon={arrowRight}></RecommendationButton>
          </ButtonWrapper>
        </NavigationWrapper>
        <CardWrapper/>
      </RecommendationWrapper>
    </Container>
  );
};
