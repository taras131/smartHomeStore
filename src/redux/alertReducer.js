const ADD_ALERT = "ADD_ALERT",
    DELETE_ALERT = "DELETE_ALERT"
const initialState = {
    isAlert: false,
    alertMessage: ""
}

const alertReducer = (state = initialState ,action) => {
    switch (action.type) {
        case ADD_ALERT:
            return {...state,isAlert: true ,alertMessage: action.message}
        case DELETE_ALERT:
            return {...state,isAlert: false ,alertMessage: ''}
        default:
            return state
    }
}
export const addAlert = (message) => {
    return {type: ADD_ALERT, message}
}
export const deleteAlert = () =>{
    return {type: DELETE_ALERT}
}

export default alertReducer