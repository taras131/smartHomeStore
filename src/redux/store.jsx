import {combineReducers, createStore} from "redux";
import cartReducer from "./cartReducer";
import projectReducer from "./projecrReducer";
import authReducer from "./authReducer";
import catalogReducer from "./catalogReducer";


let reducersList = combineReducers({
    catalogInfo: catalogReducer,
    cartInfo: cartReducer,
    projectInfo: projectReducer,
    authInfo: authReducer
})
let store = createStore(reducersList);
export default store