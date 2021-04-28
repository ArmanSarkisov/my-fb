import React from 'react'
import './createStore.css'
import default_user from '../../Assets/default-user.png'
import plus_icon from '../../Assets/plus-8-16.png'

export default function CreateStore() {
    return (
        <div>
            <a href='#' className='asd'>
                <div className='createStore'>
                    <div className='userImage'>
                        <img src={default_user} className='default_user' />
                    </div>
                    <div className='add_story_icon'>
                        <div className='plus_icon'>
                            <img src={plus_icon} />
                        </div>
                    </div>
                    <div className='add_story'>
                        <p> Add Story</p>
                    </div>
                </div>
            </a>

        </div>
    )
}


// export default CreateStore