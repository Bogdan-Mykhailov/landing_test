import styled from "styled-components";
import mainLogo from '../../assets/images/header.jpg'

export const HeroStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  padding-top: 45px;
  padding-left: 120px;
`;

export const TitleWrapper = styled.div`
  margin-top: 100px;
`;

export const MainTitle = styled.h1`
  font-family: Lexend900, sans-serif;
  font-size: 40px;
  line-height: 50px;
  text-transform: capitalize;
  color: var(--headline);
`;

export const SelectedText = styled.h1`
  font-family: Lexend800, sans-serif;
  font-size: 40px;
  line-height: 50px;
  text-transform: capitalize;
  position: relative;
  display: inline-block;
  color: var(--white);
  text-shadow: 
          -1px 0 var(--headline), 
          0 1px var(--headline), 
          1px 0 var(--headline), 
          0 -1px var(--headline);
`;

export const SubTitle = styled.p`
  font-family: Lexend300, sans-serif;
  font-size: 16px;
  line-height: 28px;
  color: var(--neutral);
  opacity: 0.75;
  margin-top: 24px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 4px 4px 24px;
  gap: 16px;
  background: var(--white);
  border: 1px solid #E0E3EB;
  border-radius: 32px;
  margin-top: 32px;
`;

export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const PartnershipWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

export const PartnershipTitle = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: var(--grey);
  font-family: Lexend300, sans-serif;
`;

export const PartnershipList = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 32px;
  }
`;

export const RightSide = styled.div`
  width: 720px;
  height: 720px;
  display: block;
  background-color: gray;
  background-image: ${`url(${mainLogo})`};
  background-size: cover;
  background-position: center;
  border-bottom-left-radius: 80px;
`;



