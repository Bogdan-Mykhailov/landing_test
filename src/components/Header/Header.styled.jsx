import styled from "styled-components";
import { devices } from '../../common-styles/MediaQueries';

export const HeaderWrapper = styled.header`
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  
  @media ${devices.tab} {
    padding: 0 120px;
  }
  
  @media ${devices.desk} {
    max-width: 1200px;
  }
`;

export const NawWrapper = styled.div`
  display: none;
  align-items: center;
  
  @media ${devices.tab} {
    max-width: 768px;
    display: flex;
  }
`;

export const NavMenu = styled.menu`
  display: flex;
  margin-left: auto;
  margin-right: 56px;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 32px;
  font-size: 14px;
  color: var(--white);
  line-height: 18px;
  font-family: Lexend600, sans-serif;
  cursor: pointer;
  :not(:last-child) {
    margin-right: 24px;
  }
`;

export const MenuButton = styled.button`
  font-size: 14px;
  line-height: 22px;
  font-family: Lexend600, sans-serif;
  color: var(--greenDark);
  padding: 12px 24px;
  background: #D1FAE5;
  border-radius: 32px;
  border: none;
  cursor: pointer;
`;
