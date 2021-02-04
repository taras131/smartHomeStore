export const getCartList = (state) => {
    return [...state.cartInfo.cartList.values()];
}
export const getCountAllCart = (state) => {
    let count = 0;
    ([...state.cartInfo.cartList.values()]).forEach(value => {
        count += value.count
    })
    return count
}
export const getSumAllPriceCart = (state) => {
    let sum = 0;
    ([...state.cartInfo.cartList.values()]).forEach(value => {
        sum += value.count * value.price
    })
    return sum
}
export const getItemCount =(state, id) =>{
    const item = [...state.cartInfo.cartList.values()].filter(item=> item.id === id)[0]
    if(item){
        return item.count
    }
}




