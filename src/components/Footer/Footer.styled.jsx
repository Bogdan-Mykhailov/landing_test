import styled from 'styled-components';

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 269px;
  box-sizing: border-box;
`;

export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.p`
  font-family: Lexend300, sans-serif;
  font-size: 14px;
  line-height: 24px;
  color: #626687;
  opacity: 0.75;
  margin: 16px 0 30px;
`;

export const SocialWrapper = styled.div`
  display: flex;
`;

export const SocialLinks = styled.li`
  list-style: none;
  :not(:last-child) {
    margin-right: 24px;
  }
`;

export const SocialImg = styled.img`
  width: 32px;
  height: 32px;
`;
