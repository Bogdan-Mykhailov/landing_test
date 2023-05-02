import React from 'react';
import girl2 from '../../assets/images/girl2.jpg';
import {
  Rate,
  Rating,
  RatingIcon,
  RatingStyled,
  ReviewCardWrapper,
  ReviewDesc,
  ReviewImage,
  ReviewInfo,
  ReviewName,
  ReviewPosition,
  ReviewTitle,
  ReviewWrapper,
} from './ReviewCard.styled';
import star from '../../assets/icons/star.svg';

export const ReviewCard = () => {
  return (
    <ReviewCardWrapper>
      <ReviewTitle>Best! I got the house I wanted through Hounter</ReviewTitle>

      <ReviewDesc>
        Through this website I can get a house with the type and specifications
        I want
        <br/> very easily, without a complicated process to be able to find
        information on the
        <br/> house we want.
      </ReviewDesc>

      <RatingStyled>
        <ReviewInfo>
          <ReviewImage src={girl2} alt="Dianne Russell"/>

          <ReviewWrapper>
            <ReviewName>Dianne Russell</ReviewName>
            <ReviewPosition>Manager Director</ReviewPosition>
          </ReviewWrapper>
        </ReviewInfo>

        <Rating>
          <RatingIcon src={star} alt="Rating star"/>
          <Rate>4.6</Rate>
        </Rating>
      </RatingStyled>
    </ReviewCardWrapper>
  );
};
