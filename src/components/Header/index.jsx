import React from 'react';
import Search from "../Search/Search";
import styled from './Header.module.scss'
import Categories from "../Categories/Categories";
import Sort from "../Sort/Sort";

const Header = () => {
    return (
        <div className={styled.background_root}>
            <h1 className={styled.title}></h1>
            <div className={styled.title__search}>
                <Search />
            </div>
            <div className='categories_sort'>
                <Categories />
                <Sort />
            </div>
        </div>
    );
}

export default Header;
