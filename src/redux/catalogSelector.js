export const  getCatalogItem = (state, id) =>{
    return state.catalogInfo.catalogList.filter(item =>  item.id === id)[0]
}