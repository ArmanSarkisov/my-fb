import React from 'react';
import style from './User.module.css';

function User({name,src}) {
    return (
        <div className={style.userInfo}>
            <div>
                 <img src={src} className={style.userImage}/>
            </div>
            <p className={style.userInfoText}>{name}</p>
        </div>
    )
}

export default User
