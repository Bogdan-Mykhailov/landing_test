import React from 'react';
import { ContainerStyled } from './Container.styled';

export const Container = ({children}) => {
  return (
    <ContainerStyled>
      {children}
    </ContainerStyled>
  );
};
