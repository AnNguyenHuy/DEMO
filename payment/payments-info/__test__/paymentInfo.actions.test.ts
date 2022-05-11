/* eslint-disable no-undef */

import { paymentCardInfoActions } from '../paymentInfo.actions';

import { state } from './paymentInfo.selectors.test';

const { getCardInfo } = require('@/api/paymentsApi');
const { createApiHandler } = require('@/helpers/apiHandler');

const { types } = paymentCardInfoActions;

const resolveData = {
  data: {
    // card_number: 'string',
    // card_name: 'string',
    // cvv: 'string',
    // exp_month: 0,
    // exp_year: 0,
  },
};
const rejectData = {
  message_id: 'E0008',
  message: '存在しません',
};
jest.mock('@api/AuthApi', () => ({
  refreshToken: jest.fn(),
}));
jest.mock('@/api/paymentsApi', () => ({
  getCardInfo: jest.fn(),
}));
jest.mock('@/helpers/apiHandler');

describe('async actions get card info ', () => {
  it('dispatches a get card info request', async () => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    await paymentCardInfoActions.getCardInfo({
      userId: '',
    })(dispatch, getState);
    expect(dispatch).toHaveBeenCalledWith({
      type: types.GET_CARD_INFO.REQUEST,
    });
  });

  describe('get card info success', () => {
    const dispatch = jest.fn();
    const getState = jest.fn(() => state);
    beforeEach(() => {
      getCardInfo.mockResolvedValue(resolveData);
      createApiHandler.mockImplementation(jest.fn(() => jest.fn().mockResolvedValue(resolveData)));
    });
    it('should dispatch get card info success', async () => {
      await paymentCardInfoActions.getCardInfo({
        userId: '',
      })(dispatch, getState);
      expect(dispatch).toHaveBeenLastCalledWith({
        type: types.GET_CARD_INFO.SUCCESS,
        payload: resolveData,
      });
    });
  });

  describe('get card info failed', () => {
    const dispatch = jest.fn();
    const getState = jest.fn(() => state);
    beforeEach(() => {
      getCardInfo.mockRejectedValue(rejectData);
      createApiHandler.mockImplementation(jest.fn(() => jest.fn().mockRejectedValue(rejectData)));
    });

    it('should dispatch get card info failed', async () => {
      await paymentCardInfoActions.getCardInfo({
        userId: '',
      })(dispatch, getState);
      expect(dispatch).toHaveBeenLastCalledWith({
        type: types.GET_CARD_INFO.FAILED,
        payload: rejectData,
      });
    });
  });
});
