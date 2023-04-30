import styled from 'styled-components';

export const CustomPaginationContainer = styled.div`
display: flex;
justify-content: center;
`;

export const CustomPaginationBullet = styled.span`
width: 10px;
height: 10px;
margin: 0 10px;
border-radius: 50%;
background-color: ${({ isActive }) => isActive ? '#007aff' : '#ccc'};
opacity: ${({ isActive }) => isActive ? 1 : 0.5};
cursor: pointer;
`;
