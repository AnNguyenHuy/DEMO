import styled from 'styled-components';

import { colors } from '@constants/color';

export const PaymentContainer = styled.div`
  margin: 80px 40px 160px 60px;
  padding: 80px 40px 60px 60px;
  width: 500px;
  background-color: ${colors.white};
  @media screen and (max-width: 750px) {
    padding: 20px 0px 60px 0px;
  }
  .test {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  .btn {
  }
`;
