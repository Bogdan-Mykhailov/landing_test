import styled from "styled-components";
import { devices } from '../../common-styles/MediaQueries';

// export const ContainerStyled = styled.div`
//   display: flex;
//   flex-direction: column;
//   position: relative;
//   margin: 0 auto 120px;
//   padding: ${({padding}) => padding && '0 120px'};
//
//   @media ${devices.tab} {
//     max-width: 1303px;
//   }
//
//   @media ${devices.desk} {
//     max-width: 1440px;
//   }
// `;


export const ContainerStyled = styled.div`
  min-width: 380px;
  padding: ${({ padding }) => padding && '0 20px'};
  margin: 0 auto 120px;

  @media ${devices.tab} {
    padding: ${({ padding }) => padding && '0 40px'};
  }

  @media ${devices.desk} {
    max-width: 1440px;
    padding: ${({ padding }) => padding && '0 120px'};
  }
`;
