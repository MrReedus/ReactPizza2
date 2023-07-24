import React from 'react';


const Categories = () => {
    const [category, setCategory] = React.useState(["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"])



    const addActiveClass = () => {

    }


    return (
        <div>
            <div className="categories">
                <ul>
                    {category.map(item => <li className={''}

                                              onClick={addActiveClass}>{item}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default Categories;