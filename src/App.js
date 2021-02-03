import FooterComponent from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import {Switch, Route} from "react-router-dom";
import Cart from "./components/cart/Cart";
import Project from "./components/project/Project";
import Contacts from "./components/contacts/Contacts";
import Catalog from "./components/catalog/Catalog";
import Discription from "./components/catalog/Discription";

function App() {
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/catalog/" component={Catalog}/>
                <Route exact path="/catalog/:id?" component={Discription}/>
                <Route exact path="/project/" component={Project}/>
                <Route exact path="/contacts/" component={Contacts}/>
                <Route exact path="/cart/" component={Cart}/>
            </Switch>
            <FooterComponent/>
        </>
    );
}

export default App;
