import './App.css';
import {CartContextWrapper} from "./context/CartContextWrapper/CartContextWrapper";
import MainPage from './mainPage/MainPage';
import {Route, Routes} from "react-router-dom";
import Cart from './shoppingCartPage/Cart';


const App = () => {
    return (
        <CartContextWrapper>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </CartContextWrapper>

    );
}

export default App;

