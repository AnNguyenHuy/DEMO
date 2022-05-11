import { createSelector } from 'reselect';

import { Redux } from '@/types/local';

import { State } from './paymentInfo.reducer';

const getState = (state: Redux.State): State => state.user.paymentInfoCard;

const isLoading = createSelector(getState, (state) => state.isLoading);

const error = createSelector(getState, (state) => state.error);

const data = createSelector(getState, (state) => state.data);

const paymentInfoPageSelectors = {
  isLoading,
  data,
  error,
};

export default paymentInfoPageSelectors;
