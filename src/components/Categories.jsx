import React from 'react';


const Categories = ({ value, onClickCategory }) => {
    const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]


    return (
        <div>
            <div className="categories">
                <ul>
                    {categories.map((item, index) => <li
                        key={index}
                        onClick={() => onClickCategory(index)}
                        className={(index === value) ? 'active' : ''}
                                           >{item}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default Categories;