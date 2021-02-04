const initialState = {
    workingHours: "пн-вс, с 8:00 до 21:00 (мск)",
    address:  "Москва, Россия, 119019 Кремлёвская набережная, 1с3",
    phone: "8(800)800-80-80",
    email: "example@mail.com"
}
const contactReducer = (state = initialState ,action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default contactReducer