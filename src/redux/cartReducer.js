const ADD_CART = "ADD_CART",
    DELETE_ITEM_CART = "DELETE_ITEM_CART",
    PLUS_ITEM_CART =    "PLUS_ITEM_CART",
    MINUS_ITEM_CART = "MINUS_ITEM_CART"
const initialState = {
    cartList: new Map(),
    totalCartCount: 0
}
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART:
            if (state.cartList.has(action.item.id)) {
                return {
                    ...state, cartList: new Map(state.cartList).set(action.item.id,
                        {...action.item, count: state.cartList.get(action.item.id).count + 1})
                }
            } else {
                return {...state, cartList: new Map(state.cartList).set(action.item.id, {...action.item, count: 1})}
            }
        case DELETE_ITEM_CART:
            let temporallyCartList = new Map(state.cartList)
            temporallyCartList.delete(action.id)
            return {...state, cartList: temporallyCartList}
        case PLUS_ITEM_CART:
            return {...state,cartList: new Map(state.cartList).set(action.id,
                    {...new Map(state.cartList).get(action.id), count:state.cartList.get(action.id).count + 1 })}
        case MINUS_ITEM_CART:
            return {...state,cartList: new Map(state.cartList).set(action.id,
                    {...new Map(state.cartList).get(action.id), count:state.cartList.get(action.id).count - 1 })}
        default:
            return state
    }
}
export const addCart = (item) => {
    return {type: ADD_CART, item}
}
export const deleteItemCart = (id) => {
    return {type: DELETE_ITEM_CART, id}
}
export const plusItemCart = (id) =>{
    return {type: PLUS_ITEM_CART, id}
}
export const minusItemCart = (id) =>{
    return {type: MINUS_ITEM_CART, id}
}
export default cartReducer