import './scss/app.scss';

import Header from "./components/Header";
import logo from './assets/img/pizza-logo.svg'
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// import pizzas from './assets/pizzas.json'


function App() {


    return (
        <div className="App">
            <div className="wrapper">
                <Header logo={logo}/>

                <div className="content">

                    <NotFound/>
                </div>
            </div>
        </div>
    );
}

export default App;
