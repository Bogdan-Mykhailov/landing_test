import styled from 'styled-components';

export const SubscribeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 312px;
  border-radius: 32px;
  background: -webkit-linear-gradient(299deg, rgb(173, 198, 246) 11%, rgb(242, 253, 249) 55%, rgb(232, 234, 247) 90%);
  background: -o-linear-gradient(299deg, rgb(173, 198, 246) 11%, rgb(242, 253, 249) 55%, rgb(232, 234, 247) 90%);
  background: -ms-linear-gradient(299deg, rgb(173, 198, 246) 11%, rgb(242, 253, 249) 55%, rgb(232, 234, 247) 90%);
  background: -moz-linear-gradient(299deg, rgb(173, 198, 246) 11%, rgb(242, 253, 249) 55%, rgb(232, 234, 247) 90%);
  background: linear-gradient(151deg, rgb(173, 198, 246) 11%, rgb(242, 253, 249) 55%, rgb(232, 234, 247) 90%);
`;

export const SubscribeLeftContent = styled.div`
  position: relative;
  width: 253px;
`;

export const SubscribeImage1 = styled.img`
  border: 2px solid var(--white);
  border-radius: 24px;
  position: absolute;
  width: 81px;
  height: 81px;
  left: 44px;
  top: 38px;
`;

export const SubscribeImage2 = styled.img`
  position: absolute;
  width: 36px;
  height: 36px;
  left: 67px;
  top: 173px;
  border: 2px solid var(--white);
  filter: drop-shadow(0 9px 32px rgba(89, 92, 219, 0.1));
  border-radius: 50%;
`;

export const SubscribeImage3 = styled.img`
  position: absolute;
  width: 36px;
  height: 36px;
  left: 204px;
  top: 71px;
  border: 2px solid var(--white);
  filter: drop-shadow(0 9px 32px rgba(89, 92, 219, 0.1));
  border-radius: 50%;
`;

export const SubscribeImage4 = styled.img`
  position: absolute;
  width: 54px;
  height: 54px;
  left: 195px;
  top: 178px;
  border: 2px solid var(--white);
  border-radius: 24px;
`;

export const Feedback = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const FeedbackTitle = styled.h2`
  font-family: Lexen300, sans-serif;
  font-size: 32px;
  line-height: 48px;
  text-align: center;
  text-transform: capitalize;
  color: var(--headline);
  margin-bottom: 32px;
`;

export const FeedbackWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  background: var(--white);
  padding: 4px 4px 4px 24px;
  gap: 16px;
  box-shadow: 0 9px 32px rgba(89, 92, 219, 0.05);
  border-radius: 32px;
  max-width: max-content;
`;

export const EmailIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const SubscribeRightContent = styled.div`
  position: relative;
  width: 270px;
`;

export const SubscribeImage5 = styled.img`
  position: absolute;
  width: 70px;
  height: 70px;
  left: 0;
  top: 44px;
  border: 2px solid var(--white);
  border-radius: 24px;
`;

export const SubscribeImage6 = styled.img`
  position: absolute;
  width: 36px;
  height: 36px;
  left: 34px;
  top: 143px;
  border: 2px solid #FFFFFF;
  filter: drop-shadow(0px 9px 32px rgba(89, 92, 219, 0.1));
  border-radius: 50%;
`;

export const SubscribeImage7 = styled.img`
  position: absolute;
  width: 36px;
  height: 36px;
  left: 148px;
  top: 107px;
  border: 2px solid #FFFFFF;
  filter: drop-shadow(0px 9px 32px rgba(89, 92, 219, 0.1));
  border-radius: 50%;
`;

export const SubscribeImage8 = styled.img`
  position: absolute;
  width: 55px;
  height: 55px;
  left: 142px;
  top: 197px;
  border: 2px solid #FFFFFF;
  border-radius: 24px;
`;
