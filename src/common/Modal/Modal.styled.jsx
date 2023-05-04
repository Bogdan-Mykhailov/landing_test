import styled from 'styled-components';

export const ModalBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;
  z-index: 2;

  ${({ active }) => active
          && `opacity: 1; pointer-events: all;`}
`;

export const ModalContent = styled.div`
  transform: scale(0.5);
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65%;
  background-image: ${({image}) => image && `url(${image})`};
  background-position: center;
  background-size: cover;

  ${({ active }) => active && `transform: scale(1);`}
`;

