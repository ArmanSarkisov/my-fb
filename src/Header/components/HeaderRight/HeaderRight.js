import React from 'react'
import HeaderAction from './HeaderActions/HeaderAction'
import User from './User/User'
import style from "./HeaderRight.module.css"
function HeaderRight() {
    return (
        <div className={style.info}>
            <User src={"https://img.icons8.com/ios/26/000000/user-male-circle.png"} name={"Արփինե"}/>
            <div className={style.infoAction}>
                <HeaderAction src={"https://img.icons8.com/android/20/000000/plus.png"}/>
                <HeaderAction src={"https://img.icons8.com/material-sharp/20/000000/facebook-messenger--v1.png"}/>
                <HeaderAction src={"https://img.icons8.com/ios-glyphs/20/000000/bell.png"}/>
                <HeaderAction src={"https://img.icons8.com/android/20/000000/sort-down.png"}/>
            </div>
        </div>
    )
}
export default HeaderRight