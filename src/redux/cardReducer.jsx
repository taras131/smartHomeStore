import React from "react";

const ADD_CARD = "ADD_CARD"
const initialState = {
    cardList: [
        {
            id: 1,
            url: "https://zont-online.ru/_mod_files/ce_images/eshop/generated/korobka_mega_350_light_350x350_pc.jpg",
            name: "Mega SX-350 Light",
            discription: "Сигнализация для охраны стационарных объектов и дистанционного управления элементами бытовой автоматики.",
            price: 9000
        },
        {
            id: 2,
            url: "https://zont-online.ru/_mod_files/ce_images/C2000_Plus/detali_s2000_.jpg",
            name: "ZONT C2000+",
            discription: "Предназначен для Охраны, Мониторинга и Автоматизации \n" +
                "Обеспечивает контроль и дистанционное управление различными устройствами через веб-сервис",
            price: 15000
        },
        {
            id: 3,
            url: "https://zont-online.ru/_mod_files/ce_images/eshop/generated/sx-300_light_200x200_sm.png",
            name: "Mega SX-300 Light",
            discription: "GSM-сигнализация с WEB-интерфейсом.",
            price: 9000
        },
        {
            id: 4,
            url: "https://zont-online.ru/_mod_files/ce_images/eshop/generated/foto_tovara_mega_sx-170m_200x200_sm.jpg",
            name: "Mega SX-170M",
            discription: "Беспроводная GSM-сигнализация с управлением со смартфона.",
            price: 6499
        },
        {
            id: 5,
            url: "https://zont-online.ru/_mod_files/ce_images/eshop/generated/sx-300_350x350_pc.png",
            name: "Mega SX-300",
            discription: "Беспроводная охранная GSM-сигнализация с WEB-интерфейсом и возможностью дистанционного " +
                "управления элементами бытовой автоматики.",
            price: 11299
        },
        {
            id: 6,
            url: "https://zont-online.ru/_mod_files/ce_images/eshop/generated/mega_150_350x350_pc.jpg",
            name: "Mega SX-150",
            discription: "Сигнализация для охраны дома, квартиры, гаража с возможностью дистанционного управления" +
                " элементами бытовой автоматики",
            price: 7299
        },
    ]
}
const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CARD:
            return {...state, cardList: [...state.cardList, action.value]}
        default:
            return state
    }
}
export const addCard = (value) => {
    return {type: ADD_CARD, value}
}

export default cardReducer