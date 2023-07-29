import './scss/app.scss';
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import logo from './assets/img/pizza-logo.svg'
import {useEffect, useState} from "react";

// import pizzas from './assets/pizzas.json'




function App() {

    const [items, setItems] = useState([])


  useEffect(() => {
      fetch('https://63ece635be929df00cb4a1e8.mockapi.io/items')
          .then((response) => response.json())
          .then((arr) => {
              setItems(arr)
          })
  }, []) // запрос на сервер будет отправлять только один раз [] - значит при первом рендере


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

                            {
                                items.map(pizza => {
                                    return (
                                        <PizzaBlock
                                            {...pizza} // разворачиваем все свойства объекта
                                        />
                                    )
                                })
                            }


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
