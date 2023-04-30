import styled from 'styled-components';

export const SectionTitle = styled.h2`
  font-family: Lexend300, sans-serif;
  font-size: 14px;
  line-height: 18px;
  text-transform: capitalize;
  color: var(--gold);
  position: relative;
  margin-left: ${({margin}) => margin ? '40px' : '0'};
  
  :before {
    content: '';
    position: absolute;
    left: -40px;
    bottom: 50%;
    transform: translate(0, -50%);
    width: 32px;
    height: 1px;
    background-color: var(--gold);
  }
`;
