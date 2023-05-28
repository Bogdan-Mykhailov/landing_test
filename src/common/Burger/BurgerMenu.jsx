import React from 'react';
import { BurgerMenuContent, Nav, NavItem } from './BurgerMenu.styled';
import arrowDown from '../../assets/icons/arrow_down.svg';
import { Select } from '../Select';
import cross from '../../assets/icons/cross.svg';
import { BurgerImage } from '../../components/Header/Header.styled';

export const BurgerMenu = ({ isOpen, handleBurgerOpen }) => {

  return (
    <BurgerMenuContent isOpen={isOpen} >
      <BurgerImage src={cross} onClick={handleBurgerOpen} alt="Burger menu"/>
      <Nav>
        <NavItem><a href="#">About Us</a></NavItem>
        <NavItem><a href="#">Article</a></NavItem>
        <NavItem>
          <Select
          title="Property"
          icon={arrowDown}
        />
        </NavItem>
      </Nav>
    </BurgerMenuContent>
  );
};
