import styled from "styled-components";
import { devices } from '../../common-styles/MediaQueries';

export const ContainerStyled = styled.div`
  min-width: 280px;
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
