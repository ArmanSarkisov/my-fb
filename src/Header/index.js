import React from 'react';
import style from './Header.module.css';
import Home from './components/Home/Home';
import HeaderPageList from './components/HeaderPageList/HeaderPageList'
import HeaderUserAction from './components/HeaderUserAction/HeaderUserAction';


function Header() {
    return (
        <div className={style.header}>
            <Home/>
            <HeaderPageList/>
            <HeaderUserAction/>
        </div>
    )
}

export default Header
