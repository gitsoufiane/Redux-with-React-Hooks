
const initialState = {
    amount: '13.00',
    currencyCode: 'USD',
}
export const rateReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RateamountChanged':
            return { ...state, amount: action.payload }
        case 'RatecurrencyCodeChanged':
            return { ...state, currencyCode: action.payload }
        default:
            return state;
    }

}

// selectors
export const getAmount = state => state.rates.amount;
export const getCurrencyCode=state=>state.rates.currencyCode;
