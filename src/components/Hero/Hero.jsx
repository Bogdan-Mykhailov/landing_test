import React from 'react';
import {
  ContentWrapper,
  HeroStyled,
  LeftSide,
  ListItem,
  MainTitle,
  PartnershipList,
  PartnershipTitle,
  PartnershipWrapper,
  RightSide,
  SearchIcon,
  SearchWrapper,
  SelectedText,
  SliderImg,
  SliderImgList,
  SliderItem,
  SliderSubTitle,
  SliderTitle,
  SubTitle, SwiperSlideStyled,
  SwiperStyled,
  TitleWrapper,
} from './Hero.styled';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import point from '../../assets/icons/map_point.svg';
import { Input } from '../../common/Input';
import { Button } from '../../common/Button';
import arrowRight from '../../assets/icons/arrow_right.svg';
import traveloka from '../../assets/icons/partners/traveloka.svg';
import ticketCom from '../../assets/icons/partners/ticketCom.svg';
import airbnb from '../../assets/icons/partners/airbnb.svg';
import tripadvisor from '../../assets/icons/partners/tripadvisor.svg';
import vila from '../../assets/images/vila.jpg';
import girl3 from '../../assets/images/girl3.jpg';
import girl2 from '../../assets/images/girl2.jpg';
import girl1 from '../../assets/images/girl1.jpg';
import man from '../../assets/images/man.jpg';
import { Autoplay, Pagination } from 'swiper';
import { Container } from '../../common/Container';

export const Hero = () => {
  const partners = [
    {
      icon: traveloka,
      title: 'Traveloka',
    },
    {
      icon: ticketCom,
      title: 'Ticket.Com',
    },
    {
      icon: airbnb,
      title: 'Airbnb',
    },
    {
      icon: tripadvisor,
      title: 'Tripadvisor',
    },
  ];

  return (
    <Container>
      <HeroStyled>
        <LeftSide>
          <TitleWrapper>
            <MainTitle>
              find the place to
              <br/> live <SelectedText>your dreams</SelectedText>
              <br/> easily here
            </MainTitle>

            <SubTitle>
              Everything you need about finding your place to live will be here,
              <br/> where it will be easier for you
            </SubTitle>
          </TitleWrapper>

          <SearchWrapper>
            <SearchIcon src={point} alt="Map piont"/>
            <Input
              type="text"
              placeholder="Search for the location you want!"
            />
            <Button title="Search" icon={arrowRight}/>
          </SearchWrapper>

          <PartnershipWrapper>
            <PartnershipTitle>Our Partnership</PartnershipTitle>
            <PartnershipList>
              {partners.map(({
                icon,
                title,
              }) => (
                <ListItem key={title}>
                  <img src={icon} alt={title}/>
                </ListItem>
              ))}
            </PartnershipList>
          </PartnershipWrapper>
        </LeftSide>

        <RightSide>
          <SwiperStyled
            slidesPerView={'auto'}
            spaceBetween={16}
            // freeMode={true}
            loop={true}
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false,
            // }}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
          >
            <SwiperSlideStyled>
              <SliderItem>
                <SliderImgList width>
                  <SliderImg src={girl1} alt="Satisfied people"/>
                  <SliderImg position="28px" src={man} alt="Satisfied people"/>
                  <SliderImg position="56px" src={girl2} alt="Satisfied people"/>
                </SliderImgList>
                <ContentWrapper>
                  <SliderTitle>1K+ People</SliderTitle>
                  <SliderSubTitle>Successfully Getting Home</SliderSubTitle>
                </ContentWrapper>
              </SliderItem>
            </SwiperSlideStyled>

            <SwiperSlideStyled>
              <SliderItem>
                <SliderImg type={vila} src={vila} alt="Vila"/>
                <ContentWrapper>
                  <SliderTitle>56 Houses</SliderTitle>
                  <SliderSubTitle>Sold Monthly</SliderSubTitle>
                </ContentWrapper>
              </SliderItem>
            </SwiperSlideStyled>

            <SwiperSlideStyled>
              <SliderItem>
                <SliderImg src={girl3} alt="Girl with purpure bacground"/>
                <ContentWrapper>
                  <SliderTitle>4K+</SliderTitle>
                  <SliderSubTitle>People Looking for New Homes</SliderSubTitle>
                </ContentWrapper>
              </SliderItem>
            </SwiperSlideStyled>

            <SwiperSlideStyled>
              <SliderItem>
                <SliderImgList width>
                  <SliderImg src={girl1} alt=""/>
                  <SliderImg position="28px" src={man} alt=""/>
                  <SliderImg position="56px" src={girl2} alt=""/>
                </SliderImgList>
                <ContentWrapper>
                  <SliderTitle>1K+ People</SliderTitle>
                  <SliderSubTitle>Successfully Getting Home</SliderSubTitle>
                </ContentWrapper>
              </SliderItem>
            </SwiperSlideStyled>

            <SwiperSlideStyled>
              <SliderItem>
                <SliderImg type={vila} src={vila} alt="Vila"/>
                <ContentWrapper>
                  <SliderTitle>56 Houses</SliderTitle>
                  <SliderSubTitle>Sold Monthly</SliderSubTitle>
                </ContentWrapper>
              </SliderItem>
            </SwiperSlideStyled>

            <SwiperSlideStyled>
              <SliderItem>
                <SliderImg src={girl3} alt="Girl with purpure bacground"/>
                <ContentWrapper>
                  <SliderTitle>4K+</SliderTitle>
                  <SliderSubTitle>People Looking for New Homes</SliderSubTitle>
                </ContentWrapper>
              </SliderItem>
            </SwiperSlideStyled>
          </SwiperStyled>
        </RightSide>
      </HeroStyled>
    </Container>
  );
};
