import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  width: 1200px;
  margin: 0 auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const MainLogo = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 12px;
`;

export const LogoTitle = styled.p`
  font-family: Lexend700, sans-serif;
  font-size: 16px;
  line-height: 20px;
  text-transform: capitalize;
  color: var(--headline);
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
