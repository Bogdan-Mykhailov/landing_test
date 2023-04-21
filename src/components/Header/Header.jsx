import React from 'react';
import {
  Hero,
  LeftSide, ListItem,
  LogoTitle,
  LogoWrapper,
  MainLogo,
  MainTitle, PartnershipList, PartnershipTitle, PartnershipWrapper, RightSide, SearchIcon,
  SearchWrapper,
  SubTitle,
  TitleWrapper
} from "./Header.styled";
import logo from '../../assets/icons/logo.svg'
import point from '../../assets/icons/map_point.svg'
import {Input} from "../../common/Input";
import {Button} from "../../common/Button";
import arrowRight from '../../assets/icons/arrow_right.svg'
import traveloka from '../../assets/icons/partners/traveloka.svg'
import ticketCom from '../../assets/icons/partners/ticketCom.svg'
import airbnb from '../../assets/icons/partners/airbnb.svg'
import tripadvisor from '../../assets/icons/partners/tripadvisor.svg'

export const Header = () => {
  const partners = [
    {icon: traveloka, title: 'Traveloka'},
    {icon: ticketCom, title : 'Ticket.Com'},
    {icon: airbnb, title : 'Airbnb'},
    {icon: tripadvisor, title : 'Tripadvisor'},
  ]

  return (
    <Hero>
      <LeftSide>
        <div>
          <LogoWrapper>
            <MainLogo src={logo} alt="Main logo"/>
            <LogoTitle>Hounter</LogoTitle>
          </LogoWrapper>

          <div>
            <TitleWrapper>
              <MainTitle>
                find the place to
                <br/> live your dreams
                <br/> easily here
              </MainTitle>

              <SubTitle>
                Everything you need about finding your place to live will be here, <br/> where it will be easier for you
              </SubTitle>
            </TitleWrapper>

            <SearchWrapper>
              <SearchIcon src={point} alt="Map piont"/>
              <Input
                type='text'
                placeholder='Search for the location you want!'
              />
              <Button title='Search' icon={arrowRight}/>
            </SearchWrapper>

            <PartnershipWrapper>
              <PartnershipTitle>Our Partnership</PartnershipTitle>
              <PartnershipList>
                {partners.map(({icon, title}) => (
                  <ListItem key={title}>
                    <img src={icon} alt={title}/>
                  </ListItem>
                ))}
              </PartnershipList>
            </PartnershipWrapper>
          </div>
        </div>
      </LeftSide>

      <RightSide>
        <div>
          <menu>
            <li>About Us</li>
            <li>Article</li>
            <li>Property ></li>
          </menu>

          <button>Sign Up!</button>
        </div>

        <div>
          <div>
            <img src="#" alt=""/>
            <img src="#" alt=""/>
            <img src="#" alt=""/>
            <span>1K+ People</span>
            <p>Successfully Getting Home</p>
          </div>

          <div>
            <img src="#" alt=""/>
            <span>56 Houses</span>
            <p>Sold Monthly</p>
          </div>

          <div>
            <img src="#" alt=""/>
            <span>4K+</span>
            <p>People Looking for New Homes</p>
          </div>
        </div>
      </RightSide>
    </Hero>
  );
};
