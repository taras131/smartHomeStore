import {combineReducers, createStore} from "redux";
import cardReducer from "./cardReducer";
import cartReducer from "./cartReducer";


let reducersList = combineReducers({
    cardInfo: cardReducer,
    cartInfo: cartReducer
})
let store = createStore(reducersList);
export default store