import React from 'react';
import style from './HeaderPageIcon.module.css';

function HeaderPageIcon({source}) {
    return (
        <div className={style.headerMiddleIcons}>
            <img src={source} className={style.haaderMiddleIcon}/>
        </div>
    )
}

export default HeaderPageIcon
