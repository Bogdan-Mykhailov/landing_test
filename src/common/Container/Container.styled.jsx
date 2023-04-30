import styled from "styled-components";
import { devices } from '../../common-styles/MediaQueries';

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 auto 120px;

  @media ${devices.tab} {
    max-width: 1303px;
  }
  
  @media ${devices.desk} {
    max-width: 1440px;
  }
`;
