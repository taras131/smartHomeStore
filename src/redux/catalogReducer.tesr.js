import catalogReducer, {setCatalog} from "./catalogReducer";

const initialState = {
    catalogList: []
}
const value =  {
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
}
it("catalog should be installed", () => {
    const action = setCatalog(value)
    const newState= catalogReducer(initialState, action)
    expect(newState.catalogList.length).toBe(1)
} )