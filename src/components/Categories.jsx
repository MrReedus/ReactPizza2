import React from 'react';


const Categories = (props) => {
    const [category, setCategory] = React.useState(["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"])
    const [activeIndex, setActiveIndex] = React.useState(0)


    const onClickActiveIndex = (index, category) => {
        setActiveIndex(index)
        props.categoryCallBack(category)
    }

    return (
        <div>
            <div className="categories">
                <ul>
                    {category.map((item, index) => <li
                        key={index}
                        onClick={() => onClickActiveIndex(index, item)}
                        className={(index === activeIndex) ? 'active' : ''}
                                           >{item}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default Categories;