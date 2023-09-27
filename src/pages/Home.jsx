import React, {useEffect, useState} from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";
import ReactPaginate from "react-paginate";
import {logDOM} from "@testing-library/react";
import Pagination from "../components/Pagination";
import {SearchContext} from "../App";


const Home = () => {
    const {searchValue} = React.useContext(SearchContext)
    const [items, setItems] = useState([])
    const [isloading, setIsloading] = useState(true)
    const [currentPage, setCurrentPage] = React.useState(1)
    const [categoryId, setCategoryId] = React.useState(0)
    const [sortType, setSortType] = React.useState({
        name: "Популярности", sortProperty: 'rating'
    })

    useEffect(() => {
        setIsloading(true)

        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
        const sortBy = sortType.sortProperty.replace('-', '');
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : ''

        fetch(`https://63ece635be929df00cb4a1e8.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
            .then((response) => response.json())
            .then((arr) => {
                setItems(arr)
                setIsloading(false)
            })
    }, [categoryId, sortType, searchValue, currentPage]) // запрос на сервер будет отправлять только один раз [] - значит при первом рендере

    const pizzas = items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza}/>)  // разворачиваем все свойства объекта
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
    return (
        <div>
            <div className="container">
                <div className="content__top">
                    <Categories value={categoryId} onClickCategory={(id) => {
                        setCategoryId(id)
                    }}/>
                    <Sort value={sortType} onClickSort={(sortType) => {
                        setSortType(sortType)
                    }}/>

                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isloading ? skeletons : pizzas}
                </div>
                <Pagination onChangePage={(number) => setCurrentPage(number)}/>
            </div>
        </div>
    );
};

export default Home;