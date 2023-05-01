import React from 'react';
import {
  HeaderWrapper,
  MenuButton,
  MenuItem,
  NavMenu,
  NawWrapper,
} from './Header.styled';
import arrowDown from '../../assets/icons/arrow_down.svg';
import { MainLogo } from '../../common/MainLogo/MainLogo';
import { Select } from '../../common';

export const Header = () => {
  return (
    <HeaderWrapper>
      <MainLogo/>

         <NawWrapper>
           <NavMenu>
             <MenuItem>About Us</MenuItem>
             <MenuItem>Article</MenuItem>
             <Select
               title='Property'
               icon={arrowDown}
             />
           </NavMenu>

           <MenuButton>Sign Up!</MenuButton>
         </NawWrapper>
    </HeaderWrapper>
  );
};
