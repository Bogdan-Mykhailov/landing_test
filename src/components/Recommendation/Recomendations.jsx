import React, { useState } from 'react';
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
import { CardWrapper, Container } from '../../common';
import {
  ItemIcon,
  ItemStyled,
} from '../../common/CategoryItem/CategoryItem.styled';
import { sortedByType } from '../../utils/helpers';
import { APARTMENT, HOUSE, VILLA } from '../../utils/constants';

export const Recommendation = () => {
  const [sort, setSort] = useState('house');

  const visibleCategory = sortedByType(sort);
  const isHouse = sort === HOUSE;
  const isVilla = sort === VILLA;
  const isApartment = sort === APARTMENT;

  return (
    <Container>
      <RecommendationWrapper>
        <Title title="Our Recommendation"/>
        <NavigationWrapper>
          <Subtitle subtitle="Featured House"/>
          <RecommendationCategories>
            <ItemStyled
              sort={isHouse}
              onClick={() => setSort(HOUSE)}
            >
              <ItemIcon
                sort={isHouse}
                src={house}
                alt={`Category: ${house}`}
              />
              House
            </ItemStyled>

            <ItemStyled
              sort={isVilla}
              onClick={() => setSort(VILLA)}
            >
              <ItemIcon
                sort={isVilla}
                src={villa}
                alt={`Category: ${villa}`}
              />
              Villa
            </ItemStyled>

            <ItemStyled
              sort={isApartment}
              onClick={() => setSort(APARTMENT)}
            >
              <ItemIcon
                sort={isApartment}
                src={apartments}
                alt={`Category: ${apartments}`}
              />
              Apartment
            </ItemStyled>
          </RecommendationCategories>
          {/* <ButtonWrapper> */}
          {/*   <RecommendationButton icon={arrowLeft}></RecommendationButton> */}
          {/*   <RecommendationButton icon={arrowRight}></RecommendationButton> */}
          {/* </ButtonWrapper> */}
        </NavigationWrapper>
        <CardWrapper visibleCategory={visibleCategory}/>
      </RecommendationWrapper>
    </Container>
  );
};
