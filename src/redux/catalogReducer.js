

const ADD_CATALOG = "ADD_CATALOG"
const initialState = {
    catalogList: [
        {
            id: 1,
            url: "https://zont-online.ru/_mod_files/ce_images/eshop/generated/korobka_mega_350_light_350x350_pc.jpg",
            discriptionUrl: "https://zont-online.ru/_mod_files/ce_images/Komplekt/komplektacija_mega_sx350_lite.jpg",
            name: "Mega SX-350 Light",
            discription: "Сигнализация для охраны стационарных объектов и дистанционного управления элементами бытовой автоматики.",
            fullDiscription: "Работает с проводным охранным оборудованием, датчиками и извещателями различного назначения, а также с радиоканальным оборудованием, работающим на частотах 433 и 868 МГц\n" +
                "\n" +
                "- 10 беспроводных зон (до 10-ти датчиков на зону)\n" +
                "\n" +
                "- 6 проводных входов (до 10-ти датчиков на вход)\n" +
                "\n" +
                "- 6 управляемых выходов (Макс. ток выхода - 100 мА)",
            price: 9000
        },
        {
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
        },
        {
            id: 3,
            url: "https://zont-online.ru/_mod_files/ce_images/eshop/generated/sx-300_light_200x200_sm.png",
            name: "Mega SX-300 Light",
            discription: "GSM-сигнализация с WEB-интерфейсом.",
            fullDiscription:"Ключевые особенности:\n" +
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
            price: 9000
        },
        {
            id: 4,
            url: "https://zont-online.ru/_mod_files/ce_images/eshop/generated/foto_tovara_mega_sx-170m_200x200_sm.jpg",
            discriptionUrl: "https://zont-online.ru/_mod_files/ce_images/Komplekt/komplektacija_mega_sx170m.jpg",
            name: "Mega SX-170M",
            discription: "Беспроводная GSM-сигнализация с управлением со смартфона.",
            fullDiscription: "Удобное решение для построения систем охраны разного уровня:\n" +
                "\n" +
                "- Простых - на радиодатчиках 433 МГц\n" +
                "\n" +
                "- Сложных - на оригинальных датчиках ZONT 868 МГц с использованием контроля питания и шифрованием радиоканала",
            price: 6499
        },
        {
            id: 5,
            url: "https://zont-online.ru/_mod_files/ce_images/eshop/generated/sx-300_350x350_pc.png",
            discriptionUrl: "https://zont-online.ru/_mod_files/ce_images/Komplekt/komplektacija_mega_sx300light.jpg",
            name: "Mega SX-300",
            discription: "Беспроводная охранная GSM-сигнализация с WEB-интерфейсом и возможностью дистанционного " +
                "управления элементами бытовой автоматики.",
            fullDiscription: "Эта модель разработана именно для тех, кто до сих пор не защитил свой дом, потому что" +
                " установка сигнализации кажется им сложным и долгим делом. Комплект Mega SX-300 уже готов к " +
                "применению и не требует предварительной настройки. В комплект входят блок питания, датчики движения" +
                " и размыкания, радиобрелок, сирена, аккумулятор резервного питания и SIM карта с единым тарифом по " +
                "всей России.",
            price: 11299
        },
        {
            id: 6,
            url: "https://zont-online.ru/_mod_files/ce_images/eshop/generated/mega_150_350x350_pc.jpg",
            discriptionUrl: "https://zont-online.ru/_mod_files/ce_images/Komplekt/komplektacija_mega_sx150.jpg",
            name: "Mega SX-150",
            discription: "Сигнализация для охраны дома, квартиры, гаража с возможностью дистанционного управления" +
                " элементами бытовой автоматики",
            fullDiscription: "Сигнализация для охраны дома, квартиры, гаража с возможностью дистанционного управления элементами бытовой автоматики\n" +
                "     - 5   проводных входов;\n" +
                "     - 4   управляемых выхода (Макс. ток выхода = 200мА);\n" +
                "     - встроенный микрофон, голосовая связь, СМС-управление",
            price: 7299
        },
    ]
}
const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATALOG:
            return {...state, catalogList: [...state.catalogList, action.value]}
        default:
            return state
    }
}
export const addCard = (value) => {
    return {type: ADD_CATALOG, value}
}

export default catalogReducer