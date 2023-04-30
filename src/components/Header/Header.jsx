import React from 'react';
import {
  HeaderWrapper,
  LogoTitle,
  LogoWrapper,
  MainLogo, MenuButton,
  MenuItem,
  NavMenu,
  NawWrapper,
} from './Header.styled';
import logo from '../../assets/icons/logo.svg';
import arrowDown from '../../assets/icons/arrow_down.svg';
import { Select } from '../../common/Select/Select';

export const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <MainLogo src={logo} alt="Main logo"/>
        <LogoTitle>Hounter</LogoTitle>
      </LogoWrapper>

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
