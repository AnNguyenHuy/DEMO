/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */

import produce from 'immer';

import { Redux } from '@/types/local';

import { paymentCardInfoActions } from './paymentInfo.actions';

export type State = Redux.UserState['paymentInfoCard'];

const { types } = paymentCardInfoActions;
export const initialState: State = {
  isLoading: false,
  data: null,
  error: null,
};
export const PaymentInfoPageReducer = produce((state: State, action: Redux.Action) => {
  switch (action.type) {
    case types.GET_CARD_INFO.REQUEST:
      state.isLoading = true;
      break;
    case types.GET_CARD_INFO.SUCCESS:
      state.isLoading = false;
      state.data = action.payload.data;
      break;
    case types.GET_CARD_INFO.FAILED:
      state.isLoading = false;
      state.error = action.payload;
      break;

    // no default
  }
}, initialState);
