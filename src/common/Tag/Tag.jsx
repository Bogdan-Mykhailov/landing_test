import React from 'react';
import { TagIcon, TagStyled, TagTitle } from './Tag.styled';

export const Tag = ({icon, title, type}) => {
  return (
    <TagStyled type={type}>
      <TagIcon src={icon} alt={`${title}`}/>
      <TagTitle type={type}>{title}</TagTitle>
    </TagStyled>
  );
};
