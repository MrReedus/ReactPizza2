import React from "react";
import './scss/app.scss';
import Header from "./components/Header";
import logo from './assets/img/pizza-logo.svg'
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import {Route, Routes} from "react-router-dom";
import Cart from "./pages/Cart";
import {useState} from "react";
import { useSelector, useDispatch } from 'react-redux'

// import pizzas from './assets/pizzas.json'


export const SearchContext = React.createContext();


function App() {
    const [searchValue, setSearchValue] = useState('')

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div className="App">
            <div className="wrapper">
                <SearchContext.Provider value={{searchValue, setSearchValue}}>
                    <Header logo={logo}/>

                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/cart" element={<Cart/>}/>
                            <Route path="*" element={<NotFound/>}/>

                        </Routes>

                    </div>
                </SearchContext.Provider>


            </div>
        </div>
    )
        ;
}

export default App;
