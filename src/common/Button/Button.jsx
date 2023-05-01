import React from 'react';
import {ButtonStyled} from "./Button.styled";

export const Button = ({title, icon}) => (
    <ButtonStyled>
      {title}
      {icon && <img src={icon} alt='Button icon'/>}
    </ButtonStyled>
);
