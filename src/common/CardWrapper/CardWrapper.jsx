import React from 'react';
import { featuredHouse } from '../../data/recommendationData';
import { Card } from '../Card';
import { WrapperStyled } from './CardWrapper.styled';

export const CardWrapper = () => (
  <WrapperStyled>
    {featuredHouse.map(cardData => (
      <Card key={cardData.id} cardData={cardData}/>
    ))}
  </WrapperStyled>
);
