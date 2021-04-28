import React, { useState } from 'react'
import './story.css'
import user_img from '../../Assets/user_img.jpeg'
import St from './St'

const data = [
    {
        name: 'Leonard Arnold',
        userImgSrc: '',
        storyImgSrc: user_img,
    },
    {
        name: 'Josefine Anderson',
        userImgSrc: '',
        storyImgSrc: '',
    },
    {
        name: 'Kaitlin Weaver',
        userImgSrc: '',
        storyImgSrc: '',
    },
    {
        name: 'Edward Northon',
        userImgSrc: '',
        storyImgSrc: '',
    },
    {
        name: 'Tyler Durden',
        userImgSrc: '',
        storyImgSrc: '',

    },
    {
        name: 'Bob Smith',
        userImgSrc: '',
        storyImgSrc: '',
    }
]
function Story() {
    const [state, setState] = useState(data)
    console.log(state)
    return (
        <div>
            <div>

                {/* <div>
                        <img className='story_img' src={user_img} />
                        <div className='user_img'>
                            <img />
                        </div>
                        <div className='user_name'>
                            <p>Leonard<br /> Arnold</p>
                        </div>
                    </div> */}
                <div className='user_story'>
                    {state.map((person, index) => (
                        // <div className='story_card' key={index}>
                        //     {/* {console.log(state.length)} */}

                        //     <img className='story_img' src={user_img} />
                        //     <div className='user_img'>
                        //         <img />
                        //     </div>
                        //     <div className='user_name'>
                        //         <p>{person.name}</p>
                        //     </div>
                        // </div>
                        <St 
                            key={index}
                            name={person.name}
                            storyImgSrc={person.storyImgSrc}
                        />

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Story