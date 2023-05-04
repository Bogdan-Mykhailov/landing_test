import React, { useState } from 'react';
import { Button, Container, Subtitle, Title } from '../../common';
import {
  ContactNowWrapper,
  GalleryButton,
  GalleryButtonImg,
  HouseDetail,
  HouseDetailDesc,
  HouseDetailItem,
  HouseDetailList,
  HouseDetailsIcon,
  HouseDetailSpan,
  MainImage,
  MainImageCover,
  MiddleImage,
  SellContent,
  SellGallery,
  SellImage,
  SellInfo,
  SellName,
  SellPosition,
  SellWrapper,
  SmallImage,
  SmallImageLast,
  UserInfoWrapper,
} from './Sell.styled';
import phone from '../../assets/icons/phone.svg';
import girl2 from '../../assets/images/girl2.jpg';
import bed from '../../assets/icons/bed.svg';
import bath from '../../assets/icons/bath.svg';
import car from '../../assets/icons/car.svg';
import stairs from '../../assets/icons/stairs.svg';
import { Modal } from '../../common/Modal';
import { useHandleModal } from '../../hooks/use-modal';
import play from '../../assets/icons/play.svg';
import apart7 from '../../assets/images/apart7.jpg';
import house0 from '../../assets/images/house0.jpg';
import apart6 from '../../assets/images/apart6.jpg';
import apart8 from '../../assets/images/apart8.jpg';

export const Sell = () => {
  const {
    modal,
    toggleModal,
  } = useHandleModal();
  const [image, setImage] = useState('');

  const handleModalToggle = (event) => {
    toggleModal();
    setImage(event.currentTarget.src);
  };

  return (
    <Container>
      <SellWrapper>
        <SellContent>
          <div>
            <Title title="ReadyTo TipsAndTricks!"/>

            <Subtitle marginTop={'marginTop'}
                      subtitle="Let’s tour and see our house!"/>

            <HouseDetail>
              <HouseDetailDesc>
                Houses recommended by our partners that have been curated to
                become the home of your dreams!
              </HouseDetailDesc>

              <HouseDetailSpan>House Detail</HouseDetailSpan>

              <HouseDetailList>
                <HouseDetailItem>
                  <HouseDetailsIcon src={bed} alt="Bed"/>
                  4 Bedrooms
                </HouseDetailItem>

                <HouseDetailItem>
                  <HouseDetailsIcon src={bath} alt="Bath"/>
                  2 Bathrooms
                </HouseDetailItem>

                <HouseDetailItem>
                  <HouseDetailsIcon src={car} alt="Car"/>
                  1 Carport
                </HouseDetailItem>

                <HouseDetailItem>
                  <HouseDetailsIcon src={stairs} alt="Stairs"/>
                  2 Floors
                </HouseDetailItem>
              </HouseDetailList>
            </HouseDetail>

            <ContactNowWrapper>
              <SellInfo>
                <SellImage src={girl2} alt="Dianne Russell"/>

                <UserInfoWrapper>
                  <SellName>Dianne Russell</SellName>
                  <SellPosition>Manager Director</SellPosition>
                </UserInfoWrapper>
              </SellInfo>

              <Button iconPosition="before" icon={phone} title="Contact Now"/>
            </ContactNowWrapper>
          </div>
        </SellContent>

        <SellGallery>
          <Modal modalMode={modal} closeModal={toggleModal}>
            {image && (
              <img
                src={image}
                alt="Modal img"
                onClick={handleModalToggle}/>
            )}
          </Modal>

          <MainImageCover>
            <MainImage onClick={handleModalToggle} src={house0}
                       alt="Modal img"/>
            <GalleryButton>
              <GalleryButtonImg src={play} alt="Play Button"/>
            </GalleryButton>
          </MainImageCover>

          <MiddleImage
            src={apart7}
            onClick={handleModalToggle}
            alt="Modal img"/>

          <SmallImage
            src={apart6}
            onClick={handleModalToggle}
            alt="Modal img"/>

          <SmallImageLast
            src={apart8}
            onClick={handleModalToggle}
            alt="Modal img"/>
        </SellGallery>
      </SellWrapper>
    </Container>
  );
};
