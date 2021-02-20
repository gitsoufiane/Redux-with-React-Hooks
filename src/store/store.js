import { createStore , combineReducers } from 'redux';
import { rateReducer } from './rates'
import { userReducer} from './user'
export const store = createStore(combineReducers({
    user: userReducer,
    rates: rateReducer,
}))