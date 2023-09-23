import './scss/app.scss';

import Header from "./components/Header";
import logo from './assets/img/pizza-logo.svg'
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import {Route, Routes} from "react-router-dom";
import Cart from "./pages/Cart";
import {useState} from "react";

// import pizzas from './assets/pizzas.json'


function App() {
const [searchValue, setSearchValue] = useState('')
    console.log(searchValue, 'changed')
    return (
        <div className="App">
            <div className="wrapper">
                <Header logo={logo} searchValue={searchValue} setSearchValue={setSearchValue}/>

                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home searchValue={searchValue}/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="*" element={<NotFound/>}/>

                    </Routes>


                </div>
            </div>
        </div>
    );
}

export default App;
