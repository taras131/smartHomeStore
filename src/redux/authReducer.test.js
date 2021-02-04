import authReducer, {setAuth} from "./authReducer";
const initialState = {
    isAuth: false
}
it("isAuth should be true", ()=> {
    let action = setAuth(true)
    let newState = authReducer(initialState, action)
    expect(newState.isAuth).toBe(true)
})
it("isAuth should be false", ()=> {
    let action = setAuth(false)
    let newState = authReducer(initialState, action)
    expect(newState.isAuth).toBe(false)
})