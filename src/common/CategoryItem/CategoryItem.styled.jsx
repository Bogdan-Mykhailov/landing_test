import styled from 'styled-components';
import { Button } from '../Button';

export const ItemStyled = styled.li`
  box-sizing: border-box;
  display: flex;
  border-radius: 32px;
  align-items: center;
  border: ${({ sort }) => sort ? '1px solid white' : '1px solid #E0E3EB'};
  padding: 12px 24px;
  gap: 8px;
  font-size: 18px;
  line-height: 28px;
  font-family: Lexend400, sans-serif;
  color: ${({ sort }) => sort ? '#10B981' : '#888B97'};
  cursor: pointer;
  background-color: ${({ sort }) => sort ? '#D1FAE5' : 'white'}


`;

export const ItemIcon = styled.img`
  height: 18px;
  width: 18px;
  filter: ${({ sort }) => sort && `brightness(0) saturate(50%) invert(62%) sepia(18%) saturate(6141%) hue-rotate(118deg) brightness(100%) contrast(40%);`};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const RecommendationButton = styled(Button)`
  cursor: pointer;
  filter: brightness(0) saturate(100%) invert(97%) sepia(3%) saturate(1393%) hue-rotate(185deg) brightness(95%) contrast(94%);
`;



