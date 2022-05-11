/* eslint-disable no-undef */

import { paymentCardInfoActions } from '../paymentInfo.actions';
import { initialState, PaymentInfoPageReducer } from '../paymentInfo.reducer';

const { types } = paymentCardInfoActions;

const subject = (action: any) => PaymentInfoPageReducer(initialState, action);

describe(types.GET_CARD_INFO.REQUEST, () => {
  it('get card info actions request', () => {
    expect(
      subject({
        type: types.GET_CARD_INFO.REQUEST,
      })
    ).toEqual({
      ...initialState,
      isLoading: true,
    });
  });
});

describe(types.GET_CARD_INFO.SUCCESS, () => {
  it('get card info actions success', () => {
    expect(
      subject({
        type: types.GET_CARD_INFO.SUCCESS,
        payload: {
          data: {
            card_number: 'string',
            card_name: 'string',
            cvv: 'string',
            exp_month: 0,
            exp_year: 0,
          },
        },
      })
    ).toEqual({
      ...initialState,
      isLoading: false,
      data: {
        card_number: 'string',
        card_name: 'string',
        cvv: 'string',
        exp_month: 0,
        exp_year: 0,
      },
    });
  });
});

describe(types.GET_CARD_INFO.FAILED, () => {
  it('get card info actions failed', () => {
    expect(
      subject({
        type: types.GET_CARD_INFO.FAILED,
        payload: {
          message_id: 'E0008',
          message: '存在しません',
        },
      })
    ).toEqual({
      ...initialState,
      isLoading: false,
      error: {
        message_id: 'E0008',
        message: '存在しません',
      },
    });
  });
});
