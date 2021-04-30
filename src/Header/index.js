import React from 'react';
import style from './Header.module.css';
import HeaderRight from './components/HeaderRight/HeaderRight';
import Home from './components/Home/Home';
import HeaderPageList from './components/HeaderMiddle/HeaderPageList'


function Header() {
    return (
        <div className={style.header}>
            <Home/>
            <HeaderPageList/>
            <HeaderRight/>
        </div>
    )
}

export default Header
