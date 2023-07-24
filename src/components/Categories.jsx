import React from 'react';


const Categories = () => {
    const [category, setCategory] = React.useState(["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"])
    const [activeIndex, setActiveIndex] = React.useState(0)


    const onClickActiveIndex = (index) => {
        setActiveIndex(index)
    }

    return (
        <div>
            <div className="categories">
                <ul>
                    {category.map((item, index) => <li
                        key={index}
                        onClick={() => onClickActiveIndex(index)}
                        className={(index === activeIndex) ? 'active' : ''}
                                           >{item}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default Categories;