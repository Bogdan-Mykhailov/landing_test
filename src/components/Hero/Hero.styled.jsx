import styled from 'styled-components';
import mainLogo from '../../assets/images/header.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';

export const HeroStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  padding-top: 89px;
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

export const SelectedText = styled.span`
  font-family: Lexend700, sans-serif;
  font-size: 40px;
  line-height: 50px;
  text-transform: capitalize;
  position: relative;
  display: inline-block;
  color: var(--white);
  text-shadow: -1px 0 var(--headline),
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
  display: flex;
  justify-content: end;
  align-items: flex-end;
  width: 720px;
  height: 720px;
  background-color: gray;
  background-image: linear-gradient(16.74deg, #0C1537 -6.09%, rgba(12, 21, 55, 0) 32.63%),
  ${`url(${mainLogo})`};
  background-size: cover;
  background-position: center;
  border-bottom-left-radius: 80px;
  overflow-x: hidden;
`;

export const SwiperStyled = styled(Swiper)`
  margin-left: 48px;
  margin-bottom: 48px;
  border-bottom-left-radius: 32px;
  border-top-left-radius: 32px;
  .swiper-pagination {
    bottom: 120px;
  }
  
  .swiper-pagination-bullet {
    background: blueviolet;
    width: 20px;
    height: 20px;
  }

  .swiper-pagination-bullet-active {
    background: crimson;
    width: 20px;
    height: 20px;
  }
`;

export const SwiperSlideStyled = styled(SwiperSlide)`
  max-width: max-content;
`;

export const SliderItem = styled.div`
  max-width: max-content;
  background: var(--white);
  box-shadow: 0 11px 48px rgba(51, 51, 51, 0.06);
  border-radius: 32px;
  display: flex;
  align-items: center;
  padding: 24px;
  gap: 16px;
`;

export const SliderImgList = styled.div`
  position: relative;
  width: ${({ params }) => params ? '112px' : '56px'};
`;

export const SliderImg = styled.img`
  position: ${({ position }) => position ? 'absolute' : 'static'};
  top: 0;
  width: 56px;
  height: 56px;
  margin-left: ${({ position }) => position ? position : '0'};
  filter: drop-shadow(0 9px 32px rgba(89, 92, 219, 0.1));
  box-sizing: border-box;
  border: 3px solid var(--white);
  border-radius: ${({ type }) => type ? '24px' : '50%'}
}
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SliderTitle = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-family: Lexend600, sans-serif;
  color: var(--headline);
`;

export const SliderSubTitle = styled.p`
  font-size: 12px;
  line-height: 20px;
  font-family: Lexend300, sans-serif;
  color: #68799F;
`;
