import React, { useState } from 'react';
import {
  ItemStyled,
  SelectButton,
  SelectIcon,
  SelectStyled,
} from './Select.styled';

export const Select = ({title, icon}) => {
  const [toggle, setToggle] = useState(false);

  const handleToggleClick = () => {
    setToggle(toggle => !toggle)
  };

  return (
    <>
      <SelectButton
        toggle={toggle}
        onClick={handleToggleClick}
      >
        {title}
        <SelectIcon toggle={toggle} src={icon} alt="Arrow down"/>
      </SelectButton>
      <SelectStyled toggle={toggle}>
        <li onClick={handleToggleClick} >
          <ItemStyled href="/">House</ItemStyled>
        </li>

        <li onClick={handleToggleClick}>
          <ItemStyled href="/">Vila</ItemStyled>
        </li>

        <li onClick={handleToggleClick}>
          <ItemStyled href="/">Apartment</ItemStyled>
        </li>
      </SelectStyled>
    </>
  );
};
