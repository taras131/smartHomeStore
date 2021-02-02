import FooterComponent from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

import {Switch, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";


function App() {
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/cart/" component={Cart}/>
            </Switch>
            <FooterComponent/>
        </>
    );
}

export default App;
