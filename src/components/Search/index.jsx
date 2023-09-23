import React from 'react';

import s from './search.module.scss'
import closeIcon from '../../assets/img/close-icon.svg'

const Search = ({searchValue, setSearchValue}) => {
    return (
        <div className={s.root}>

            <svg className={s.icon} fill="none" height="24" stroke="currentColor" strokeLinecap="round"
                 strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"
                 xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" x2="16.65" y1="21" y2="16.65"/>
            </svg>

            <input value={searchValue}
                className={s.input}
                   type="text" placeholder={"Поиск пиццы..."}
                   onChange={e => setSearchValue(e.currentTarget.value)}
                   />
            {
                searchValue && (

                    <img className={s.closeIcon} src={closeIcon} alt="close button" onClick={()=> setSearchValue("") } />
                )
            }


        </div>

    );
};

export default Search;

