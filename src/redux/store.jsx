import {combineReducers, createStore} from "redux";
import cartReducer from "./cartReducer";
import projectReducer from "./projecrReducer";
import authReducer from "./authReducer";
import catalogReducer from "./catalogReducer";
import alertReducer from "./alertReducer";
import contactReducer from "./contactReducer";

let reducersList = combineReducers({
    catalogInfo: catalogReducer,
    cartInfo: cartReducer,
    projectInfo: projectReducer,
    authInfo: authReducer,
    alertInfo: alertReducer,
    contactInfo: contactReducer
})
let store = createStore(reducersList);
export default store