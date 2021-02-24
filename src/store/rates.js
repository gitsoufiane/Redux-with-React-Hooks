import { getExchangeRates } from "../api";

export const supportedCurrencies = ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"];
const initialState = {
  amount: "13.00",
  currencyCode: "USD",
  currencyData: { USD: 1.0 },
};
export const rateReducer = (state = initialState, action) => {
  switch (action.type) {
    case AMOUNT_CHANGED:
      return { ...state, amount: action.payload };
    case CURRENCY_CODE_CHANGED:
      return { ...state, currencyCode: action.payload };
    case RATES_RECEIVED:
      return { ...state, currencyData: action.payload };
    default:
      return state;
  }
};

// selectors
export const getAmount = (state) => state.rates.amount;
export const getCurrencyCode = (state) => state.rates.currencyCode;
export const getCurrencyData = (state) => state.rates.currencyData;
// Action type
export const AMOUNT_CHANGED = "RateamountChanged";
export const CURRENCY_CODE_CHANGED = "RatecurrencyCodeChanged";
export const RATES_RECEIVED = "RatesReceived";

// Action Creator
export const changeAmount = (amount) => ({
  type: AMOUNT_CHANGED,
  payload: amount,
});

export const changeCurrencyCode = (code) => (dispatch) => {
  dispatch({
    type: CURRENCY_CODE_CHANGED,
    payload: code,
  });
  getExchangeRates(code, supportedCurrencies).then((rates) => {
    dispatch({
      type: RATES_RECEIVED,
      payload: rates,
    });
  });
};

// thunk
export function getInitialRates(dispatch, getState) {
  const state = getState();
  const currencyCode = getCurrencyCode(state);
  dispatch(changeCurrencyCode(currencyCode));
}
