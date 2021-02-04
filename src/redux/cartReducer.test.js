import cartReducer, {addCart, deleteAllItem, deleteItemCart, minusItemCart, plusItemCart} from "./cartReducer";

let initialState = {
    cartList: new Map()
}
const item = {
    id: 2,
    url: "https://zont-online.ru/_mod_files/ce_images/C2000_Plus/detali_s2000_.jpg",
    discriptionUrl: "https://zont-online.ru/_mod_files/ce_images/Komplekt/komplektacija_c2000_.jpg",
    name: "ZONT C2000+",
    discription: "Предназначен для Охраны, Мониторинга и Автоматизации \n" +
        "Обеспечивает контроль и дистанционное управление различными устройствами через веб-сервис",
    fullDiscription: "Ключевые особенности:\n" +
        "- любое количество контролируемых датчиков и зон\n" +
        "- позонная охрана и управление доступом\n" +
        "- ситуационное поведение\n" +
        "- настройка сценариев автоматизации\n" +
        "- дистанционное управление э/приборами\n" +
        "- поддержка цифровых и аналоговых датчиков температуры\n" +
        "- модули расширения входов/выходов/интерфейсов\n" +
        "- прямое подключение к Ethernet\n" +
        "- мобильный интернет (GSM/GPRS)\n" +
        "- интерактивная настройка через WEB интерфейс",
    price: 15000
}
it("item should be added in cart", () =>{

    let action = addCart(item)
    let newState = cartReducer(initialState, action)
    expect(newState.cartList.has(item.id)).toBe(true)
})
it("item should be removed from cart", () =>{
    let action = deleteItemCart(item.id)
    let tempState = cartReducer(initialState,addCart(item))
    let newState = cartReducer(tempState,action)
    expect(newState.cartList.has(item.id)).toBe(false)
    })
it("item count should be increase", () => {
    let action = plusItemCart(item.id)
    let tempState = cartReducer(initialState,addCart(item))
    let newState = cartReducer(tempState,action)
    expect(newState.cartList.get(item.id).count).toBe(2)
})
it("item count should be decreased", () => {
    let action = minusItemCart(item.id)
    let tempState = cartReducer(initialState,addCart(item))
    let newState = cartReducer(tempState,action)
    expect(newState.cartList.get(item.id).count).toBe(0)
})
it("all item should be removed", () =>{
    let action =  deleteAllItem()
    let tempState = cartReducer(initialState,addCart(item))
    let newState = cartReducer(tempState,action)
    expect(newState.cartList.size).toBe(0)
})