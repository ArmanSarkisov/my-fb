import React from 'react';
import style from "./HeaderMiddleIcon.module.css"

function HeaderMiddleIcon({source}) {
    console.log(source)
    return (
        <div className={style.headerMiddleIcons}>
            <img src={source} className={style.haaderMiddleIcon}/>
        </div>
    )
}

export default HeaderMiddleIcon
