import styled from 'styled-components';

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
  position: relative;
`;

export const MainImageCover = styled.div`
  width: 488px;
  height: 416px;
  display: flex;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
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
  z-index: 1;

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

export const MiddleImage = styled.img`
  width: 296px;
  height: 168px;
  border-radius: 4px;
  position: absolute;
  bottom: 0;
  object-fit: cover;
  z-index: 1;
`;

export const SmallImage = styled.img`
  width: 96px;
  height: 80px;
  border-radius: 4px;
  position: absolute;
  bottom: 0;
  left: 308px;
  object-fit: cover;
  z-index: 1;
`;

export const SmallImageLast = styled.img`
  width: 96px;
  height: 80px;
  border-radius: 4px;
  position: absolute;
  bottom: 0;
  object-fit: cover;
  left: 416px;
  z-index: 1;
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
  z-index: 1;

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
