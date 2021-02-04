import alertReducer, {addAlert, deleteAlert} from "./alertReducer";

let initialState = {
    isAlert: false,
    alertMessage: ""
};
it(`isAlert should be true`, () => {
    let action = addAlert("alert");
    let newState = alertReducer(initialState, action)
    expect(newState.isAlert).toBe(true);
});
it(`isAlert should be false`, () => {
    let action = deleteAlert();
    let newState = alertReducer(initialState, action)
    expect(newState.isAlert).toBe(false);
});
it(`message should be added`, () => {
    let action = addAlert("alert");
    let newState = alertReducer(initialState, action)
    expect(newState.alertMessage.length).toBe(5);
});
it(`message should be delete`, () => {
    let action = deleteAlert();
    let newState = alertReducer(initialState, action)
    expect(newState.alertMessage.length).toBe(0);
});