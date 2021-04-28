import React from 'react'
import style from "./HeaderLeft.module.css";
function HeaderLeft() {
    return (
        <div className = {style.headerLeft}>
            <div className={style.header_logo}>
                <img src="https://img.icons8.com/color/48/000000/facebook-new.png"/>
                <div className={style.search}>
                     <img src="https://img.icons8.com/android/18/000000/search.png" className={style.search_logo}/>
                     <input className={style.input} placeholder="Search in facebook"/>
                </div>
            </div>
        </div>
    )
}

export default HeaderLeft
