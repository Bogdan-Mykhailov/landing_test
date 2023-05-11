import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SellWrapper = styled.div`
  display: flex;
  padding: 0 120px 0 160px;
  justify-content: space-between;
`;

export const SellContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HouseDetail = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 440px;
  border-bottom: 2px solid #F0F3FD;
  margin: 16px 0 36px;
`;

export const HouseDetailDesc = styled.p`
  font-family: Lexend300, sans-serif;
  font-size: 16px;
  line-height: 28px;
  color: #626687;
  opacity: 0.75;
  margin-bottom: 16px;
`;

export const HouseDetailSpan = styled.span`
  font-family: Lexend500, sans-serif;
  font-size: 16px;
  line-height: 28px;
  color: #1B1C57;
  opacity: 0.75;
  margin-bottom: 16px;
`;

export const HouseDetailList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 20px;
  column-gap: 53px;
`;

export const HouseDetailItem = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 193.5px;
  height: 32px;
  align-items: center;
  margin-bottom: 16px;
  font-family: Lexend400, sans-serif;
  font-size: 16px;
  line-height: 20px;
  text-transform: capitalize;
  color: #3C4563;
`;

export const HouseDetailsIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;

export const SellInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  gap: 24px;
`;

export const ContactNowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 440px;
`;

export const SellImage = styled.img`
  filter: drop-shadow(0 9px 32px rgba(89, 92, 219, 0.1));
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SellName = styled.span`
  font-family: Lexend400, sans-serif;
  align-self: stretch;
  font-size: 18px;
  line-height: 24px;
  color: #0E1735;
`;

export const SellPosition = styled.span`
  font-family: Lexend400, sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #888B97;
  align-self: stretch;
`;

export const SellGallery = styled.div`
  width: 528px;
  height: 459px;
`;

export const MainImageWrapper = styled.div`
  margin-left: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
`;

export const MainImageCover = styled.div`
  display: flex;
  border-radius: 4px;
  object-fit: cover;
  //background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
`;

export const GalleryButton = styled.button`
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2.5px);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: linear 1s ease-in-out;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
  align-self: center;

  &:hover {
    transform: scale(1.03);
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const GalleryButtonImg = styled.img`
  width: 15px;
  height: 21px;
`;

export const MainImage = styled.img`
  width: ${({ width }) => width || '488px'};
  height: ${({ height }) => height || '416px'};
  border-radius: 4px;
  object-fit: cover;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  }
`;

export const MidImage = styled.img`
  object-fit: cover;
  width: ${({ width }) => width ? '296px' : '96px'};
  height: ${({ height }) => height ? '168px' : '80px'};
  border-radius: 4px;
`;

export const SmallImage = styled.img`
  display: flex;
  object-fit: cover;
  width: ${({ width }) => width ? '296px' : '96px'};
  height: ${({ height }) => height ? '168px' : '80px'};
  border-radius: 4px;
`;

export const SliderStyledMain = styled(Swiper)`
`;

export const SliderItem = styled(SwiperSlide)``;

export const SliderStyled = styled(Swiper)`
  border-radius: 4px;
  position: absolute;
  bottom: 0;
  padding: 0;
  width: 100%;
`;

export const SliderItemMid = styled(SwiperSlide)`
  object-fit: cover;
  border-radius: 4px;
`;
export const SliderItemSmallA = styled(SwiperSlide)`
  display: flex;
  align-items: end;
  justify-content: end;
  margin-left: 54px;
  margin-top: auto;
  object-fit: cover;
  border-radius: 4px;
`;

export const SliderItemSmallB = styled(SwiperSlide)`
  margin-top: auto;
  object-fit: cover;
  border-radius: 4px;
`;
