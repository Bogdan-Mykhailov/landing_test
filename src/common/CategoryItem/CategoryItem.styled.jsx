import styled from 'styled-components';
import { Button } from '../Button';

export const ItemStyled = styled.li`
  display: flex;
  border: 1px solid #E0E3EB;
  border-radius: 32px;
  align-items: center;
  padding: 12px 24px;
  gap: 8px;
  font-size: 18px;
  line-height: 28px;
  font-family: Lexend400, sans-serif;
  color: #888B97;
  cursor: pointer;
  
  :hover {
    filter: 
            brightness(0) 
            saturate(100%) 
            invert(52%) 
            sepia(77%) 
            saturate(2635%) 
            hue-rotate(126deg) 
            brightness(98%) 
            contrast(87%);
  }
`;

export const ItemIcon = styled.img`
  height: 18px;
  width: 18px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const RecommendationButton = styled(Button)`
  cursor: pointer;
  filter: brightness(0) saturate(100%) invert(97%) sepia(3%) saturate(1393%) hue-rotate(185deg) brightness(95%) contrast(94%);
`;



