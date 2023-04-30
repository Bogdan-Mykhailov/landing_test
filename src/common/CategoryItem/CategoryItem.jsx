import React from 'react';
import { ItemIcon, ItemStyled } from './CategoryItem.styled';

export const CategoryItem = ({icon, title}) => {
  return (
    <ItemStyled>
      <ItemIcon src={icon} alt={`Category: ${icon}`}/>
      {title}
    </ItemStyled>
  );
};
