import React from 'react'
import './story.css'

function St(props) {
    return (
        <div>
            <div className='story_card' >
                <img className='story_img' src={props.storyImgSrc} />
                <div className='user_img'>
                    <img />
                </div>
                <div className='user_name'>
                    <p>{props.name}</p>
                </div>
            </div>
        </div>
    )
}

export default St