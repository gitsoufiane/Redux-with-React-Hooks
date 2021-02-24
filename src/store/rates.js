const initialState = {
  amount: "13.00",
  currencyCode: "USD",
};
export const rateReducer = (state = initialState, action) => {
  switch (action.type) {
    case AMOUNT_CHANGED:
      return { ...state, amount: action.payload };
    case CURRENCY_CODE_CHANGED:
      return { ...state, currencyCode: action.payload };
    default:
      return state;
  }
};

// selectors
export const getAmount = (state) => state.rates.amount;
export const getCurrencyCode = (state) => state.rates.currencyCode;

// Action type
export const AMOUNT_CHANGED = "RateamountChanged";
export const CURRENCY_CODE_CHANGED = "RatecurrencyCodeChanged";

// Action Creator
export const changeAmount = (amount) => ({
  type: AMOUNT_CHANGED,
  payload: amount,
});

export const changeCurrencyCode = (code) => ({
  type: CURRENCY_CODE_CHANGED,
  payload: code,
});
