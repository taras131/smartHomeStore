import {combineReducers, createStore} from "redux";
import cardReducer from "./cardReducer";
import cartReducer from "./cartReducer";
import projectReducer from "./projecrReducer";


let reducersList = combineReducers({
    cardInfo: cardReducer,
    cartInfo: cartReducer,
    projectInfo: projectReducer
})
let store = createStore(reducersList);
export default store