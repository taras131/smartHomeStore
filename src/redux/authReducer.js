const SET_AUTH = "SET_AUTH"
const initialState = {
    isAuth: false
}
const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_AUTH:
            return {...state, isAuth: action.value}
        default:
            return state
    }
}
export const setAuth = (value) => {
    return {type: SET_AUTH, value}
}
export default authReducer