import styled from 'styled-components';

export const TagStyled = styled.div`
  gap: 10px;
  display: inline-flex;
  background: ${({type}) => {
    switch (type) {
      case 'popular': {
        return '#FEE2E2';
      }

      case 'newHouse': {
        return '#DBEAFE';
      }

      case 'bestDeals': {
        return '#D1FAE5';
      }
      
      default:
        return 'yellow'
    }
  }};
  border-radius: 32px;
  padding: 8px 16px;
  position: absolute;
  left: 16px;
  top: 332px;
`;

export const TagTitle = styled.span`
  font-size: 14px;
  line-height: 18px;
  text-transform: capitalize;
  color: ${({type}) => {
    switch (type) {
      case 'popular': {
        return '#EF4444';
      }

      case 'newHouse': {
        return '#1D4ED8';
      }

      case 'bestDeals': {
        return '#047857';
      }

      default:
        return 'yellow'
    }
  }};;
  font-family: Lexend400, sans-serif;
`;

export const TagIcon = styled.img`
  width: 16px;
  height: 16px;
`;
