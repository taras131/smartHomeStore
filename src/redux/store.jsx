import {combineReducers, createStore} from "redux";
import cartReducer from "./cartReducer";
import projectReducer from "./projecrReducer";
import authReducer from "./authReducer";
import catalogReducer from "./catalogReducer";
import alertReducer from "./alertReducer";


let reducersList = combineReducers({
    catalogInfo: catalogReducer,
    cartInfo: cartReducer,
    projectInfo: projectReducer,
    authInfo: authReducer,
    alertInfo: alertReducer
})
let store = createStore(reducersList);
export default store