import styled from 'styled-components';

export const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const SelectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgb(209, 250, 229);
  border-radius: 32px;
  font-size: 14px;
  color: var(--greenDark);
  line-height: 18px;
  font-family: Lexend600, sans-serif;
  gap: 14px;
  cursor: pointer;

  @media (min-width: 1200px) {
    color: var(--white);
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  :hover {
    background: rgb(209, 250, 229);

    @media (min-width: 1200px) {
      background: rgba(255, 255, 255, 0.1);    }
  }
`;

export const SelectStyled = styled.menu`
  display: ${({ toggle }) => (
          toggle
                  ? 'block'
                  : 'none')};
  position: absolute;
  top: 85px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ItemStyled = styled.li`
  text-align: center;
  border-radius: 32px;
  cursor: pointer;
  padding: 0 15px;

  :hover {
    background: rgb(209, 250, 229);

    @media (min-width: 1200px) {
      background: rgba(255, 255, 255, 0.1);    }
  }
`;

export const ItemLink = styled.a`
  font-size: 14px;
  color: var(--greenDark);
  line-height: 30px;
  font-family: Lexend600, sans-serif;

  @media (min-width: 1200px) {
    color: var(--white);
  }
`;

export const SelectIcon = styled.img`
  transform: ${({toggle}) => (
          toggle
                  ? 'rotate(180deg)'
                  : 'rotate(0deg)')}
`;
