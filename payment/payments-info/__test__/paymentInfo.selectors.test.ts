/* eslint-disable no-undef */

import { createState } from '@/testUtils/sharedExamples';
import { Entity } from '@/types/local';
import paymentInfoPageSelectors from '../paymentInfo.selectors';

const data: Entity.PaymentInfoCard = {
  card_number: '',
  card_name: '',
  cvv: '',
  exp_month: 0,
  exp_year: 0,
};
const isLoading = false;
const error = null;
export const state = createState({
  paymentInfoCard: {
    isLoading,
    data,
    error,
  },
});

test('get data', () => {
  expect(paymentInfoPageSelectors.data(state)).toEqual(data);
});

test('get refreshExpiredTime', () => {
  expect(paymentInfoPageSelectors.error(state)).toBeNull();
});

test('get isLoading ', () => {
  expect(paymentInfoPageSelectors.isLoading(state)).toBeFalsy();
});
