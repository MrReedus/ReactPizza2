import React, {useEffect, useState} from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";

const Home = () => {

    const [items, setItems] = useState([])

    const [isloading, setIsloading] = useState(true)

    useEffect(() => {
        fetch('https://63ece635be929df00cb4a1e8.mockapi.io/items')
            .then((response) => response.json())
            .then((arr) => {
                setItems(arr)
                setIsloading(false)
            })
    }, []) // запрос на сервер будет отправлять только один раз [] - значит при первом рендере
    return (
        <div>
            <div className="container">
                <div className="content__top">
                    <Categories/>
                    <Sort/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">

                    {
                        isloading ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>) : items.map((pizza) =>  <PizzaBlock{...pizza}/> )   // разворачиваем все свойства объекта
                    }

                </div>
            </div>
        </div>
    );
};

export default Home;