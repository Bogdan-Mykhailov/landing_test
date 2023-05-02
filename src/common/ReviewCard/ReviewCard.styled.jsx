import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardImage = styled.div`
  background-image: ${({image}) => image && `url(${image})`};
  background-position: center;
  background-size: cover;
  width: 740px;
  height: 400px;
  opacity: 0.7;
  border-radius: 8px;
  position: relative;
`;

export const ReviewCardWrapper = styled.div`
  position: absolute;
  bottom: -105px;
  background: var(--white);
  box-shadow: 0 9px 32px rgba(89, 92, 219, 0.05);
  border-radius: 16px;
  padding: 32px;
`;

export const ReviewTitle = styled.h2`
  font-family: Lexend600, sans-serif;
  font-size: 20px;
  line-height: 25px;
  text-transform: capitalize;
  color: var(--headline);
  margin-bottom: 16px;
`;

export const ReviewDesc = styled.p`
  font-family: Lexend300, sans-serif;
  font-size: 14px;
  line-height: 24px;
  color: #626687;
  opacity: 0.75;
  margin-bottom: 24px;
  width: 548px;
`;

export const RatingStyled = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

export const ReviewInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  gap: 24px;
`;

export const ReviewImage = styled.img`
  filter: drop-shadow(0 9px 32px rgba(89, 92, 219, 0.1));
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReviewName = styled.span`
  font-family: Lexend400, sans-serif;
  align-self: stretch;
  font-size: 14px;
  line-height: 22px;
  color: #0E1735;
`;

export const ReviewPosition = styled.span`
  font-family: Lexend400, sans-serif;
  font-size: 14px;
  line-height: 22px;
  color: #888B97;
  align-self: stretch;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const RatingIcon = styled.img`
  width: 28px;
  height: 28px;
`;

export const Rate = styled.p`
  font-family: Lexend600, sans-serif;
  font-size: 20px;
  line-height: 28px;
  color: #3C4563;
`;
