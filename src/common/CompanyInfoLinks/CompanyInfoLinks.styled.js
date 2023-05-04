import styled from 'styled-components';

export const InfoWrapper = styled.div`
  display: flex;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  :not(:last-child) {
    margin-right: 88px;
  }
`;

export const InfoTitle = styled.h3`
  font-size: 18px;
  line-height: 22px;
  text-transform: capitalize;
  margin-bottom: 24px;
  color: #0E1735;
  font-family: Lexend600, sans-serif;
`;

export const InfoListItem = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 18px;
  text-transform: capitalize;
  font-family: Lexend300, sans-serif;
  :not(:last-child) {
    margin-bottom: 18px;
  }
`;

export const InfoLink = styled.a`
  color: #888B97;
`;
