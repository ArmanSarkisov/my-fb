import React from 'react'
import style from "./HeaderMiddle.module.css"
import HeaderMiddleIcon from './HeaderMiddleIcon/HeaderMiddleIcon'
function HeaderMiddle() {


    return (
        <div className={style.header_middle}>

        
            <HeaderMiddleIcon source = {"https://img.icons8.com/ios/31/000000/home.png"}/>
            <HeaderMiddleIcon source = {"https://img.icons8.com/ios/31/000000/user-group-man-man--v1.png"}/>
            <HeaderMiddleIcon source = {"https://img.icons8.com/ios/31/000000/facebook-gaming.png"}/>
            <HeaderMiddleIcon source = {"https://img.icons8.com/ios/31/000000/laptop-play-video--v2.png"}/>
          
        </div>
    )
}

export default HeaderMiddle
