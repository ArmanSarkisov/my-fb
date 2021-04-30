import React from 'react';
import style from './headerPageList.module.css';
import HeaderPageIcon from './HeaderMiddleIcon/HeaderPageIcon';

function HeaderPageList() {
    return (
        <div className={style.header_middle}>
            <HeaderPageIcon source={"https://img.icons8.com/ios/31/000000/home.png"}/>
            <HeaderPageIcon source={"https://img.icons8.com/ios/31/000000/user-group-man-man--v1.png"}/>
            <HeaderPageIcon source={"https://img.icons8.com/ios/31/000000/facebook-gaming.png"}/>
            <HeaderPageIcon source={"https://img.icons8.com/ios/31/000000/laptop-play-video--v2.png"}/>
        </div>
    )
}

export default HeaderPageList
