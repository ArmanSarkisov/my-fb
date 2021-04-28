import React from 'react'
import style from "./HeaderAction.module.css"
function HeaderAction({src}) {
    return (
        <div className={style.action}>
            <img src={src}/>
        </div>
    )
}

export default HeaderAction
