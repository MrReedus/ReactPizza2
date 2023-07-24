
import './scss/app.scss';
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import logo from './img/pizza-logo.svg'

function App() {

и начинает писать логику

    const pizzas = [1,2,2]
    return (
        <div className="App">
            <div className="wrapper">
                <Header logo={logo}/>

                <div className="content">
                    <div className="container">
                        <div className="content__top">
                            <Categories/>
                            <Sort/>
                        </div>
                        <h2 className="content__title">Все пиццы</h2>
                        <div className="content__items">
                            <PizzaBlock title="Мексиканская" price="500"/>
                            <PizzaBlock title="Пепперони" price="670"/>
                            <PizzaBlock title="Чикаго" price="900"/>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
