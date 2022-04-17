import styled from 'styled-components';

import { colors } from '@constants/color';

export const PaymentInfoContainer = styled.div`
  margin: 80px 40px 160px 60px;
  padding: 80px 40px 60px 60px;
  width: 500px;
  background-color: ${colors.white};
  @media screen and (max-width: 750px) {
    padding: 20px 0px 60px 0px;
  }
  .row {
    display: flex;
  }
`;
