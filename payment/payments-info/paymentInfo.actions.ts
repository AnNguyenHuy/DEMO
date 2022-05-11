import { createApiHandler } from '@/helpers/apiHandler';
import { Redux } from '@/types/local';
import paymentsApi from '@api/paymentsApi';
import { createActionsSet } from '@utils/redux';

const types = {
  GET_CARD_INFO: createActionsSet.api('payment-info-page.getPaymentCardInfo'),
};

const getCardInfo = (params: { userId: string }) => async (dispatch: Redux.Dispatch, getState: Redux.GetState) => {
  dispatch({ type: types.GET_CARD_INFO.REQUEST });
  try {
    const handleApi = createApiHandler(dispatch, getState);
    const response = await handleApi(paymentsApi.getCardInfo(params));
    dispatch({ type: types.GET_CARD_INFO.SUCCESS, payload: response });
  } catch (e) {
    dispatch({ type: types.GET_CARD_INFO.FAILED, payload: e });
  }
};

export const paymentCardInfoActions = {
  types,
  getCardInfo,
};
