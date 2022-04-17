import styled from 'styled-components';

import { colors } from '@constants/color';

export const Title = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: flex-start;
  /* padding: 0px 30px 20px 30px; */
  /* position: absolute; */
  top: 0;
`;

export const PaymentMethodContainer = styled.div`
  /* margin: 80px 40px 160px 60px;
  padding: 80px 40px 60px 60px; */
  width: 300px;
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
export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px 30px 20px 30px;
  position: absolute;
  bottom: 0;
`;
