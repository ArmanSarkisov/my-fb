import React from 'react';
import HeaderLeft from './components/HeaderLeft/HeaderLeft';
import HeaderMiddle from './components/HeaderMiddle/HeaderMiddle';
import HeaderRight from './components/HeaderRight/HeaderRight';
import style from "./Header.module.css";

function Header() {
    return (
        <div className = {style.header}>
            <HeaderLeft/>
            <HeaderMiddle/>
            <HeaderRight/>
        </div>
    )
}

export default Header
